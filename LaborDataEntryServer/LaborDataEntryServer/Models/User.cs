namespace LaborDataEntryServer.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
    public class Token
    {
        public string Value { get; set; }
    }
}
