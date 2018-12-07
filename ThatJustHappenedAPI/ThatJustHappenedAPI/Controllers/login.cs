
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ThatJustHappenedAPI.Database;

namespace ThatJustHappenedAPI.Controllers
{//begin namespace

	[Produces("application/json")]
	[Route("api/login")]
	public class LoginController : Controller
	{//begin class

		public TJHContext Context;

		public LoginController(TJHContext newContext)
		{//begin constructor
			Context = newContext;
		}//end constructor

		[HttpGet]
		[Route("testuser")]
		public JsonResult TestUser()
		{//begin method
			var user = new User
			{
				Username = "test",
				Firstname = "test",
				Lastname = "test",
				Email = "test",
				Password = "test"
			};
			Context.Users.Add(user);
			Context.SaveChanges();
			return Json(new { Success = true, data = user });
		}//end method

		[HttpGet]
		[Route("testget")]
		public JsonResult TestGetUsers()
		{//begin method
			var users = Context.Users.Where(user => user != null).ToList();
			return Json(new { Success = true, data = users });
		}//end method

	}//end class

}//end namespace
