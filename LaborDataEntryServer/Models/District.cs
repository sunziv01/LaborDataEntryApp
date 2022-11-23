using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LaborDataEntryServer.Models
{
    public class District
    {
        public int Id{ get; set; }
        
        public Country Country;    //District many-to-one Country
        public int CountryId { get; set; }
        public char Code { get; set; }
        public int LaborRatePerHour { get; set; }
        public bool IsActive { get; set; }
        public ICollection<Labor> Labor { get; set; }
    }
}
