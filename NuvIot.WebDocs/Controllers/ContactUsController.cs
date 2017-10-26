using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NuvIot.WebDocs.wwwroot.Controllers
{
    public class ContactUsController : Controller
    {
        [HttpGet("/contactus")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
