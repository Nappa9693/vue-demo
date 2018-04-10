using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VueDemo.Models
{
    public class Borrower
    {
        public int Id { get; set; }
        public string HomePhone { get; set; }
        public string Email { get; set; }
        public int YearsOfSchool { get; set; }
        public int NumberOfDependents { get; set; }
        public string DependentAges { get; set; }
    }
}
