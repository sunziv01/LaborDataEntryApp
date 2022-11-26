using LaborDataEntryServer.Models;
using LaborDataEntryServer.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LaborDataEntryServer.Controllers
{
    [EnableCors("AllowOrigin")]
    /*[Authorize]*/
    [Route("api/[controller]")]
    [ApiController]
    public class CountryWebAPIController : ControllerBase
    {
        LaborDb db;
        public CountryWebAPIController(LaborDb db)
        {
            this.db = db;
        }

            // GET: api/<CountryWebAPIController>
        [HttpGet]
        public IActionResult Get()
        {
            var country = db.Country.ToList();
            return Ok(country);
        }

        // GET api/<CountryWebAPIController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CountryWebAPIController>
        [HttpPost]
        public IActionResult Post([FromBody] Country CountryObj)
        {
            db.Country.Add(CountryObj);
            db.SaveChanges();
            return Ok();
        }

        // PUT api/<CountryWebAPIController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Country CountryObj)
        {
            var select = db.Country.Where(x => x.Id == id)
                                                        .FirstOrDefault<Country>();
            if (select != null)
            {
                select.Id = id;
                select.Name = CountryObj.Name;
                select.Code = CountryObj.Code;
                select.IsActive = CountryObj.IsActive;
                db.SaveChanges();
            }
        }

        // DELETE api/<CountryWebAPIController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

            var select = db.Country.Where(x => x.Id == id).FirstOrDefault<Country>();
            db.Country.Remove(select);
            db.SaveChanges();
        }
    }
}
