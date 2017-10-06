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
            var sslkey = Environment.GetEnvironmentVariable("SSLKEY");

            var host = new WebHostBuilder()
                .UseKestrel(options =>
                {
                    options.UseHttps("nuviot.pfx", sslkey);
                })
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseUrls("https://support.nuviot.com:443", "http://support.nuviot.com:80")
                .UseStartup<Startup>()
                .UseApplicationInsights()
                .Build();

            host.Run();
        }
    }
}
