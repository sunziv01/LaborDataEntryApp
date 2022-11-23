using LaborDataEntryServer.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

//For Database
builder.Services.AddDbContext<LaborDb>(
            options => options.UseSqlServer("name=ConnectionStrings:DefaultConnection"));

//JWT Token
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = "Shiv",
        ValidAudience = "Shiv",
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("shivkoirala@123.com"))
    };
});

//CORS Policy
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowOrigin",
        builder =>
        {
            builder.AllowAnyOrigin() //cross platform frontend and backend
                                .AllowAnyHeader()
                                .AllowAnyMethod();
        });
});




// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseAuthentication();
app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
