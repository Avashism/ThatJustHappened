using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ThatJustHappenedAPI.Database
{
    public class Session
    {
        [Key]
        public int Id { get; set; }
        public string Sessionkey { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }
        public DateTime ExpiredDateTime { get; set; }
    }
}
