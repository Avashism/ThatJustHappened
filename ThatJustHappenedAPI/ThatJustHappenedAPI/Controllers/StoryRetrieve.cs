using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ThatJustHappenedAPI.Database;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ThatJustHappenedAPI.Controllers
{
    [Route("Retrive")]
    public class StoryRetrieve : Controller
    {
        private readonly TJHContext context;
        public StoryRetrieve(TJHContext Context)
        {
            context = Context;
        }
        // GET api/<controller>/5
        [HttpGet("GetStoriesByCategory/{id}")]
        public IActionResult GetStoriesByCategory(int id)
        {
            var stories = this.GetAllStoriesByCategories(id);
            foreach(var story in stories)
            {
                story.Reacts = this.GetReactsById(story.Id);
            }
            return Ok(stories);
        }
        [HttpGet("GetStoriesByReact/{id}")]
        public IActionResult GetStoriesByReact(int id)
        {
            var stories = this.GetAllStoriesByCategories(id);
            foreach (var story in stories)
            {
                story.Reacts = this.GetReactsById(story.Id);
            }
            stories = stories.OrderBy(s => s.Reacts);
            return Ok(stories);
        }
        [HttpGet("GetTopStoriesByReact/{id}")]
        public IActionResult GetTopStoriesByReact(int id)
        {
            var stories = this.GetAllStoriesByCategories(id);
            foreach (var story in stories)
            {
                story.Reacts = this.GetReactsById(story.Id);
            }
            stories = stories.OrderByDescending(s => s.Reacts).Take(1);
            return Ok(stories);
        }

        [HttpGet("GetStoriesByUser/{id}")]
        public IActionResult GetStoriesByUser(int id)
        {
            return Ok(this.GetAllStoriesByUser(id));
        }
        [HttpGet("GetUsernameById/{id}")]
        public IActionResult GetUsernameById(int id)
        {
            User userinDb = context.Users.SingleOrDefault(u =>
            u.Id == id );
            return Ok(userinDb);
        }
        
        public int GetReactsById(int id) => context.Reacts.Count(r => r.StoryId == id);



        public IEnumerable<Story> GetAllStoriesByCategories(int id) => context.Stories.Where(s => s.CategoryId == id);
        public IEnumerable<Story> GetAllStoriesByUser(int id) => context.Stories.Where(s => s.UserId == id);


        // POST api/<controller>
    }
}
