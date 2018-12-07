using Microsoft.AspNetCore.Mvc;
using ThatJustHappenedAPI.Database;
using System.Linq;
using CryptoHelper;

namespace ThatJustHappenedAPI.Controllers
{
    
    [Route("login")]
    public class SigninController : Controller
    {
        private readonly TJHContext _context;
        public SigninController(TJHContext context)
        {
            _context = context;
        }
        [HttpPost]
        public IActionResult Login([FromBody] Login login )
        {
            var userinDb = _context.Users.SingleOrDefault(u => 
            u.Email == login.Email && (Crypto.VerifyHashedPassword(u.Password, login.Password)));
            if (userinDb != null)
            {
                return Ok(userinDb);

            }
            return Ok(false);
        }
        [HttpGet]
        public IActionResult Check() {
            return Ok(true);
        }
    }
}