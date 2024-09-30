function sillmember(){
    return {
        restrict: 'E',
        templateUrl: 'app/member/member.html',
        controller: 'SkillMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }

    }
}