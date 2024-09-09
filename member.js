function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'skills-member.html',
    scope: {
      member: '='
    },
    link: function(scope, element, attrs) {
      scope.skills = scope.member.skills;
    }
  }
}