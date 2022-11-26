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
        public IActionResult Get(int id)
        {
            var select = db.District.Where(x => x.CountryId == id).ToList();
            return Ok(select);
        }

        // POST api/<DistrictWebAPIController>
        [HttpPost]
        public IActionResult Post([FromBody] District DistrictObj)
        {
            db.District.Add(DistrictObj);
            db.SaveChanges();
            return Ok();
        }

        // PUT api/<DistrictWebAPIController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] District DistrictObj)
        {
            var select = db.District.Where(x => x.Id == id)
                                                        .FirstOrDefault<District>();
            if (select != null)
            {
                select.Id = id;
                select.CountryId = DistrictObj.CountryId;
                select.Code = DistrictObj.Code;
                select.LaborRatePerHour = DistrictObj.LaborRatePerHour;
                select.IsActive = DistrictObj.IsActive;
                db.SaveChanges();
            }
        }

        // DELETE api/<DistrictWebAPIController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

            var select = db.District.Where(x => x.Id == id).FirstOrDefault<District>();
            db.District.Remove(select);
            db.SaveChanges();
        }
    }
}
