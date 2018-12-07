using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ThatJustHappenedAPI.Database;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ThatJustHappenedAPI.Controllers
{
    [Route("story")]
    public class StoryController : Controller
    {
        private readonly TJHContext _context;
        public StoryController(TJHContext context)
        {
            _context = context;
        }

        [HttpPost("StoryRegistration")]
        public IActionResult StoryRegistration([FromBody] Story story)
        {
            _context.Add(story);
            User userinDb = _context.Users.SingleOrDefault(u =>
            u.Id == story.UserId);
            story.Username = userinDb.Username;
            _context.SaveChanges();
            return Ok(true);
        }
        [HttpPost("ReactRegistration")]
        public IActionResult ReactRegistration([FromBody] React react) {
            React ReactinDb = _context.Reacts.SingleOrDefault(r =>
           (r.UserId == react.UserId) && (r.StoryId == react.StoryId));
            if (ReactinDb == null)
            {
                _context.Reacts.Add(react);
                _context.SaveChanges();
                return Ok(true);
            }
            return Ok(false);
        }
        [HttpPost("ReactCheck")]
        public IActionResult ReactCheck([FromBody] React react)
        {
            React ReactinDb = _context.Reacts.SingleOrDefault(r =>
           (r.UserId == react.UserId) && (r.StoryId == react.StoryId));
            if (ReactinDb == null)
            {         
                return Ok(true);
            }
            return Ok(false);
        }
        [HttpPost("ReactDelete")]
        public IActionResult ReactDelete([FromBody] React react)
        {
            React ReactinDb = _context.Reacts.SingleOrDefault(r =>
           (r.UserId == react.UserId) && (r.StoryId == react.StoryId));
            if (ReactinDb != null)
            {
                _context.Reacts.Remove(ReactinDb);
                _context.SaveChanges();

            }
            return Ok(false);
        }
        [HttpPost("ContactRegistration")]
        public IActionResult ContactRegistration([FromBody] Contact contact)
        {
            _context.Contacts.Add(contact);
            _context.SaveChanges();
            return Ok(true);
        }


    }
}
