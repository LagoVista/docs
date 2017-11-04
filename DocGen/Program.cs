using Markdig;
using System;
using System.Linq;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Diagnostics;

namespace DocGen
{
    class Program
    {
        static Dictionary<string, List<string>> _filesByStatus = new Dictionary<string, List<string>>();

        static int fileCount = 0;
        static StringBuilder bldr = new StringBuilder("function getHelpIndexRoutes() { return [");
        static string RelativePath;

        static List<string> _files = new List<string>();
        static List<string> _links = new List<string>();

        static void AddFileByStatus(string status, string fileName)
        {
            if(!_filesByStatus.ContainsKey(status))
            {
                _filesByStatus.Add(status, new List<string>());
            }

            _filesByStatus[status].Add(fileName);
        }

        static void ParseDirectory(string dir, string outputDir)
        {
            System.IO.Directory.CreateDirectory(outputDir);

           
            var files = System.IO.Directory.GetFiles(dir, "*.md");
            foreach (var file in files)
            {
                var fileInfo = new System.IO.FileInfo(file);
                if(fileInfo.Name.ToLower() == "readme.md")
                {
                    continue;
                }

                var markdown = System.IO.File.ReadAllText(file);
                var headerRegEx = new Regex(@"(---[\s\S]{0,}---)");

                var headerMatch = headerRegEx.Match(markdown);
                if(headerMatch.Success)
                {
                    var header = headerMatch.Value;
                    var lines = header.Split('\r');
                    bool hasStatus = false;
                    foreach(var line in lines)
                    {
                        var parts = line.Split(':');
                        if (parts.Length == 2)
                        {
                            var field = parts[0].Trim();
                            var value = parts[1].Trim();
                            if(field == "status")
                            {
                                AddFileByStatus(value, fileInfo.FullName);
                                hasStatus = true;
                            }
                        }
                    }

                    if(!hasStatus)
                    {
                        AddFileByStatus("nostatus", fileInfo.FullName);
                    }

                    markdown = markdown.Substring(headerMatch.Groups[0].Length);
                }
                else
                {
                    if (fileInfo.Name.ToLower() != "toc.md")
                    {
                        AddFileByStatus("noheader", fileInfo.FullName);
                    }
                }

                var md = Markdown.ToHtml(markdown);
                var regEx = new Regex(@"<a\s+href=(?:""([^""]+)""|'([^']+)').*?>(.*?)<\/a>");
                var matches = regEx.Matches(md);
                var fullFilePath = file.Replace(RelativePath, "");
                fullFilePath = fullFilePath.Replace(@"\", @"/");
                var dirPath = fullFilePath.Substring(0, fullFilePath.LastIndexOf("/") );
                fileCount++;
                var links = new List<string>();

                foreach (var group in matches)
                {
                    if (group is Match)
                    {
                        var link = (group as Match).Groups[1].Value;
                        links.Add(link);
                    }
                }

                var orderedlinks = from link in links orderby link.Length descending select link;

                foreach (var link in orderedlinks)
                {
                    if (!link.ToLower().StartsWith("http"))
                    {
                        var newLink = String.Empty;
                        if (link.StartsWith("./"))
                        {
                            newLink = link.Replace("./", $"{dirPath}/");
                        }
                        else if (link.StartsWith("../.."))
                        {
                            var parentPath = dirPath.Substring(0, dirPath.LastIndexOf("/"));
                            parentPath = parentPath.Substring(0, parentPath.LastIndexOf("/"));
                            newLink = link.Replace("../..", parentPath);
                        }
                        else if (link.StartsWith("../"))
                        {
                            newLink = link.Replace("..", dirPath.Substring(0, dirPath.LastIndexOf("/")));
                        }
                        else if (link.ToLower().StartsWith("http"))
                        {
                            newLink = link;
                        }
                        else
                        {

                            newLink = $"{dirPath}/{link}";
                        }

                        
                        var relativeLink = newLink.ToLower().Replace(".md", "");
                        if(relativeLink.StartsWith("//"))
                        {
                            relativeLink = relativeLink.Substring(1);
                        }
                        md = md.Replace($@"""{link}""", $@"""#{relativeLink}""");
                        _links.Add(relativeLink);
                    }
                }

                if (fileInfo.Name.ToLower() != "toc.md")
                {
                    md += "<hr />";
                    md += "<div class=\"helppage-footer\">";
                    md += $"<p>Copyright Software Logistics - {DateTime.Now.Year}<br/>";
                    md += $"Documentation Build Date: {DateTime.Now.ToString()}<p";
                    
                    md += "</div>";
                }

                var newFileName = fileInfo.Name.Replace(".md", ".html");
                System.IO.File.WriteAllText($@"{outputDir}\\{newFileName}", md);
                bldr.AppendLine($@"{{""link"":""{fullFilePath.ToLower().Replace(".md", "")}"",""file"":""/help{fullFilePath.Replace(".md", ".html")}""}},");
                bldr.AppendLine($@"{{""link"":""{fullFilePath}"",""file"":""/help{fullFilePath.Replace(".md", ".html")}""}},");
                _files.Add(fullFilePath.Replace(".md", "").ToLower());
            }
            var dirs = System.IO.Directory.GetDirectories(dir);
            foreach (var childDir in dirs)
            {
                var dirInfo = new System.IO.DirectoryInfo(childDir);

                if (!dirInfo.Name.StartsWith(".") &&
                    dirInfo.Name.ToLower() != "docgen" &&
                    dirInfo.Name.ToLower() != "nuviot.webdocs" &&
                    dirInfo.Name.ToLower() != "wwwroot" &&
                    dirInfo.Name.ToLower() != "output")
                {

                    ParseDirectory(childDir, Path.Combine(outputDir, dirInfo.Name));
                }
            }
        }

        static void Main(string[] args)
        {
             var rootPath = @"D:\nuviot\do.Documentation";
            //var rootPath = @"D:\nuviot\do.Docs";

            if (args.Length == 1)
            {
                rootPath = args[0];
                if (!System.IO.File.Exists($@"{rootPath}\Index.md"))
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Invalid Directory, must point to do.Documentation directory.");
                    Console.ReadKey();
                    return;
                }
            }

            var outputDirectory = Path.Combine(rootPath, "NuvIot.WebDocs", "wwwroot", "help");
            if (System.IO.Directory.Exists(outputDirectory))
            {
                System.IO.Directory.Delete(outputDirectory, true);
            }
            RelativePath = rootPath;

            ParseDirectory(rootPath, outputDirectory);

            var json = bldr.ToString().TrimEnd(',', '\r', '\n');
            json += "];}";

            System.IO.File.WriteAllText($"{outputDirectory}\\index.js", json);
            Console.WriteLine($"Processed {fileCount} files");
            Console.WriteLine("==============");
            foreach (var status in _filesByStatus.Keys)
            {
                Console.WriteLine($"{status} {_filesByStatus[status].Count}");
            }

            if (_filesByStatus.ContainsKey("new"))
            {
                var newFiles = _filesByStatus["new"];
                Console.WriteLine("==============");
                Console.WriteLine("New Files");
                foreach (var noHeader in newFiles)
                {
                    Console.WriteLine(noHeader);
                }
                Console.Write(" ");
            }

            if (_filesByStatus.ContainsKey("readforapproval"))
            {
                var readyForApproval = _filesByStatus["readyforapproval"];
                Console.WriteLine("==============");
                Console.WriteLine("Ready for Approval");
                foreach (var noHeader in readyForApproval)
                {
                    Console.WriteLine(noHeader);
                }
                Console.Write(" ");
            }

            if (_filesByStatus.ContainsKey("noheader"))
            {
                var noHeaders = _filesByStatus["noheader"];
                Console.WriteLine("==============");
                Console.WriteLine("No Header Files");
                foreach (var noHeader in noHeaders)
                {
                    Console.WriteLine(noHeader);
                }
                Console.Write(" ");
            }

            foreach (var link in _links)
            {
                if (!_files.Where(fil => fil == link).Any())
                {
                    Console.WriteLine(link);
                }
            }

            Console.WriteLine("Press Any Key to Close");
            Console.ReadKey();
        }
    }
}