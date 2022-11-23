using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LaborDataEntryServer.Models
{
    public class Labor
    {
        public int Id { get; set; }
        public string LaborName{ get; set; }
        
        public Country Country;   
        public int CountryId { get; set; }  //Dropdown that will show all countries

        public District District;  
        public int DistrictId { get; set; } //Dropdown that will show all districts
        public string TaskDetail{ get; set; }
        public int WorkHours { get; set; }
    }
}
