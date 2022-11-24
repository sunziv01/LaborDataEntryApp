using LaborDataEntryServer.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LaborDataEntryServer.Controllers
{
    /*[EnableCors("AllowOrigin")]*/
    /*[Authorize]*/
    [Route("api/[controller]")]
    [ApiController]
    public class LaborWebAPIController : ControllerBase
    {
        LaborDb db;
        public LaborWebAPIController(LaborDb db)
        {
            this.db = db;
        }
        // GET: api/<LaborWebAPIController>
        /*[Route("LaborList")]*/
        [HttpGet]
        public IActionResult Get()
        {
            /*var labor = db.Labor.ToList();*/
            var labor = db.Country.Include(x => x.District).Include(x => x.Labor).ToList();
            return Ok(labor);
        }

        // GET api/<LaborWebAPIController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<LaborWebAPIController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<LaborWebAPIController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LaborWebAPIController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
