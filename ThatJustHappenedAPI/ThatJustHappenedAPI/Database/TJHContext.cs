using System;
using Microsoft.EntityFrameworkCore;

namespace ThatJustHappenedAPI.Database
{
	public class TJHContext : DbContext
    {
        public TJHContext()
        {
        }

        public TJHContext(DbContextOptions<TJHContext> options) : base(options) { }

		public DbSet<User> Users { get; set; }
        public DbSet<Story> Stories { get; set; }
        public DbSet<React> Reacts { get; set; }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Contact> Contacts { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //check here if DB doesn't work
            optionsBuilder.UseSqlServer("Server=tcp:tjh.database.windows.net,1433;Initial Catalog=TjhDb;Persist Security Info=False;User ID=Avash;Password=tjhd100%;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        }
    }
}
