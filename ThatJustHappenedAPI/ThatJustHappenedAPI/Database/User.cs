using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ThatJustHappenedAPI.Database
{
    public class User
    {
     [Key]   
     public int Id{ get; set; }

     public string Username { get; set; }
     public string Firstname { get; set; }
     public string Lastname { get; set; }
     public string Email { get; set; }
     public string Password { get; set; }
     public ICollection<Story> Stories { get; set; }
        
    }
}
