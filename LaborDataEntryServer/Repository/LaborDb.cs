using LaborDataEntryServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LaborDataEntryServer.Repository
{
    public class LaborDb : DbContext
    {
        public LaborDb(DbContextOptions<LaborDb> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Country>().ToTable("Country");
            modelBuilder.Entity<District>().ToTable("District");
            modelBuilder.Entity<Labor>().ToTable("Labor");

            modelBuilder.Entity<Country>().HasKey(t => t.Id);
            modelBuilder.Entity<District>().HasKey(t => t.Id);
            modelBuilder.Entity<Labor>().HasKey(t => t.Id);

            modelBuilder.Entity<District>()
           .HasOne(t => t.Country)
           .WithMany(t => t.District).HasForeignKey(t => t.CountryId);

            modelBuilder.Entity<Labor>()
           .HasOne(t => t.Country)
           .WithMany(t => t.Labor).HasForeignKey(t => t.CountryId).OnDelete(DeleteBehavior.ClientSetNull);

            modelBuilder.Entity<Labor>()
           .HasOne(t => t.District)
           .WithMany(t => t.Labor).HasForeignKey(t => t.DistrictId).OnDelete(DeleteBehavior.ClientSetNull);

        }
        public DbSet<Country> Country { get; set; }
        public DbSet<District> District { get; set; }
        public DbSet<Labor> Labor { get; set; }
    }
}
