using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using LaborDataEntryServer.Models;
using LaborDataEntryServer.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace LaborDataEntryServer.Controllers
{
    public class SecurityController : Controller
    {
        /*ITax t = null;*/
        LaborDb db;
        public SecurityController(LaborDb db)
        {
            this.db = db;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult CheckUser([FromBody] User obj)
        {
           
            User select = (from temp in db.User
                           where temp.Username == obj.Username && temp.Password == obj.Password
                           select temp).ToList<User>()[0];
            if(select == null)
            {
                return StatusCode(StatusCodes.Status401Unauthorized, "not allowed");
            }
            else
            {
                string token = GenerateJSONWebToken(select.Username);
                Token t = new Token();
                t.Value = token;
                return Ok(t);
            }
        }
        private string GenerateJSONWebToken(string userName)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("sunziv01@hotmail.com"));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, userName),
                new Claim(JwtRegisteredClaimNames.Email, ""),
                new Claim("Location", ""),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };
            var token = new JwtSecurityToken("Sanjeev",
              "Sanjeev",
              claims,
              expires: DateTime.Now.AddMinutes(30),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
