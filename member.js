function skillMember() {
  var member = {
    name: 'John Doe',
    age: 32,
    skills: ['JS', 'CSS', 'HTML'],
    salary: 1000,
    getSalary: function () {
      return this.salary;
    }
  };
  return member;
}