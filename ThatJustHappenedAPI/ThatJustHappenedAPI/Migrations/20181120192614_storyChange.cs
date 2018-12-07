using Microsoft.EntityFrameworkCore.Migrations;

namespace ThatJustHappenedAPI.Migrations
{
    public partial class storyChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "Stories",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Username",
                table: "Stories");
        }
    }
}
