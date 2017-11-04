//# define SSL

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace NuvIot.WebDocs
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var hostBuilder = new WebHostBuilder()
               .UseKestrel(options =>
               {
               })
               .UseContentRoot(Directory.GetCurrentDirectory())
               .UseIISIntegration()
               .UseStartup<Startup>()
               .UseApplicationInsights();

            if (Environment.GetEnvironmentVariable("USESSL") == "true")
            {
                var sslkey = Environment.GetEnvironmentVariable("SSLKEY");

                var urls = new List<string>()
                {
                    "https://support.nuviot.com:443", "http://support.nuviot.com:80",
                };

                hostBuilder.UseKestrel(options =>
                {
                    options.UseHttps("nuviot.pfx", sslkey);
                });

                hostBuilder.UseUrls(urls.ToArray());
            }
            else
            {
                hostBuilder.UseKestrel();
            }

            var host = hostBuilder.Build();

            host.Run();
        }
    }
}
