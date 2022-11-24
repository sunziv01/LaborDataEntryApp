using LaborDataEntryServer.Models;
using LaborDataEntryServer.Repository;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LaborDataEntryServer.Controllers
{
    /*[EnableCors("AllowOrigin")]*/
    /*[Authorize]*/
    [Route("api/[controller]")]
    [ApiController]
    public class DistrictWebAPIController : ControllerBase
    {
        LaborDb db;
        public DistrictWebAPIController(LaborDb db)
        {
            this.db = db;
        }
        // GET: api/<DistrictWebAPIController>
        [HttpGet]
        public IActionResult Get()
        {
            var district = db.District.ToList();
            return Ok(district);
        }

        // GET api/<DistrictWebAPIController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DistrictWebAPIController>
        [HttpPost]
        public IActionResult Post([FromBody] District DistrictObj)
        {
            db.District.Add(DistrictObj); // in memory
            db.SaveChanges();
            return Ok();
        }

        // PUT api/<DistrictWebAPIController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DistrictWebAPIController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
