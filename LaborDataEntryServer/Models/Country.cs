using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LaborDataEntryServer.Models
{
    public class Country
    {
        public int Id { get; set; }
        public string  Name{ get; set; }
        public string Code { get; set; }
        public bool IsActive{ get; set; }

        public ICollection<District> District; //Country one-to-many District
        
        public ICollection<Labor> Labor;
    }
}
