using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VueDemo.Models;

namespace VueDemo.Controllers
{
    [Produces("application/json")]
    [Route("api/Borrower")]
    public class BorrowerController : Controller
    {
        // GET: api/Borrower
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Borrower/5
        [HttpGet("{id}", Name = "Get")]
        public Borrower Get(int id)
        {
            return new Borrower()
            {
                Id = 1,
                Email = "derp@DerpsMcGee.com"
            };
        }
        
        // POST: api/Borrower
        [HttpPost]
        public void Post([FromBody]Borrower borrower)
        {
            Console.WriteLine($"Id: {borrower?.Id}, Phone Number: {borrower?.HomePhone}, Email: {borrower?.Email}");
        }
        
        // PUT: api/Borrower/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
