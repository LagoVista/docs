using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text;
using NuvIot.WebDocs.wwwroot.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NuvIot.WebDocs.wwwroot.Controllers
{
    [Route("api/chat")]
    public class ChatController : Controller
    {

        // GET api/values/5
        [HttpGet()]
        public async Task<string> PostAsync(Activity activity)
        {
            var query = "hi";
            string responseString = string.Empty;

            var knowledgebaseId = "aa501a46-fc7c-4940-a433-7b4be4786f51";
            var qnamakerSubscriptionKey = "45020f433a4a4f2c8df42d7cad059257";

            //Build the URI
            Uri qnamakerUriBase = new Uri("https://westus.api.cognitive.microsoft.com/qnamaker/v1.0");
            var builder = new UriBuilder($"{qnamakerUriBase}/knowledgebases/{knowledgebaseId}/generateAnswer");


            //Send the POST request
            using (var client = new HttpClient())
            {
                //Set the encoding to UTF8
                //Add the subscription key header
                client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", qnamakerSubscriptionKey);
                var stringContent = new StringContent($"{{\"question\": \"{query}\"}}", Encoding.UTF8, "application/json");

                var response = await client.PostAsync(builder.Uri, stringContent);
                if (response.IsSuccessStatusCode)
                {
                    return await response.Content.ReadAsStringAsync();
                }
                else
                {
                    return response.ReasonPhrase;
                }
            }
        }
    }
}
