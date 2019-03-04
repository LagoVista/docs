using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NuvIot.WebDocs.Controllers
{
    public class ServicesController : Controller
    {

        [HttpGet("/services/assetracking")]
        public IActionResult AssetTracking()
        {
            return View();
        }

        [HttpGet("/services/smallbusiness")]
        public IActionResult SmallBusiness()
        {
            return View();
        }

        [HttpGet("/services/trainingsimulation")]
        public IActionResult TrainingAndSimulation()
        {
            return View();
        }

        [HttpGet("/services/midsizedbusiness")]
        public IActionResult MidsizedBusiness()
        {
            return View();
        }

        [HttpGet("/services/messaging")]
        public IActionResult Messaging()
        {
            return View();
        }

        [HttpGet("/services/integrations")]
        public IActionResult Integrations()
        {
            return View();
        }

        [HttpGet("/services/manufacturing")]
        public IActionResult Manufacturing()
        {
            return View();
        }

        [HttpGet("/services/dronetech")]
        public IActionResult DroneTech()
        {
            return View();
        }


        [HttpGet("/services/machinelearning")]
        public IActionResult MachineLearning()
        {
            return View();
        }


        [HttpGet("/services/smartcities")]
        public IActionResult SmartCities()
        {
            return View();
        }

        [HttpGet("/services/hospitality")]
        public IActionResult Hospitality()
        {
            return View();
        }

        [HttpGet("/services")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("/services/smartpools")]
        public IActionResult SmartPools()
        {
            return View();
        }

        [HttpGet("/services/temperaturemonitoring")]
        public IActionResult TemperatureMonitoring()
        {
            return View();
        }

        [HttpGet("/services/devicemanagement")]
        public IActionResult DeviceManagement()
        {
            return View();
        }

        [HttpGet("/services/hightechnology")]
        public IActionResult HighTechnology()
        {
            return View();
        }
    }
}
