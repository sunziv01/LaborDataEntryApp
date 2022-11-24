using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LaborDataEntryServer.Models
{
    public class District
    {
        public int Id{ get; set; }
        [MaxLength(50)]

        public Country Country;    //District many-to-one Country
        public int CountryId { get; set; }
        [MaxLength(3)]
        public string Code { get; set; }
        public int LaborRatePerHour { get; set; }
        public bool IsActive { get; set; }
        public ICollection<Labor> Labor { get; set; }
    }
}
