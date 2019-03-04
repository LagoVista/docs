//# define SSL

using Microsoft.AspNetCore.Hosting;
using System.IO;

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
               .UseStartup<Startup>();

            hostBuilder.UseKestrel();
            var host = hostBuilder.Build();

            host.Run();
        }
    }
}
