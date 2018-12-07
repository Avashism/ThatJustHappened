using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ThatJustHappenedAPI.Database
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Story> Stories {get; set;}
       
    }
}
