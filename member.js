function skillsMember()
{
    var member = new Object();
    member.name = "Member";
    member.age = 25;
    member.skills = ['JavaScript', 'React', 'Node', 'HTML', 'CSS'];
    member.address = {
        city: 'New York',
        pincode: 10001
    };
    member.getFullName = function() {
        return this.name + " " + this.age;
    };
    return member;
}