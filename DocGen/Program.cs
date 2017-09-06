using Markdig;
using System;
using System.IO;

namespace DocGen
{
    class Program
    {
        static void ParseDirectory(string dir, string outputDir)
        {
            System.IO.Directory.CreateDirectory(outputDir);

            var files = System.IO.Directory.GetFiles(dir, "*.md");
            foreach(var file in files)
            {
                var fileInfo = new System.IO.FileInfo(file);
                var markdown = System.IO.File.ReadAllText(file);
                var md = Markdown.ToHtml(markdown);
                Console.WriteLine(md);
                var newFileName = fileInfo.Name.Replace("md", "html");
                System.IO.File.WriteAllText($@"{outputDir}\\{newFileName}", md);
            }
            var dirs = System.IO.Directory.GetDirectories(dir);
            foreach (var childDir in dirs)
            {
                var dirInfo = new System.IO.DirectoryInfo(childDir);

                if (!dirInfo.Name.StartsWith(".") && 
                    dirInfo.Name.ToLower() != "docgen" && 
                    dirInfo.Name.ToLower() != "output")
                {
                 
                    ParseDirectory(childDir, Path.Combine(outputDir, dirInfo.Name));
                }
            }
        }

        static void Main(string[] args)
        {
            var rootPath = @"D:\nuviot\do.Documentation";
            
            if (args.Length == 1)
            {
                rootPath = args[0];
                if(!System.IO.File.Exists($@"{rootPath}\Index.md"))
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Invalid Directory, must point to do.Documentation directory.");
                    Console.ReadKey();
                    return;
                }           
            }

            var outputDirectory = Path.Combine(rootPath, "Output");
            if(System.IO.Directory.Exists(outputDirectory))
            {
                System.IO.Directory.Delete(outputDirectory, true);
            }            

            ParseDirectory(rootPath, outputDirectory);

            Console.ReadKey();
        }
    }
}