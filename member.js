function skillsMember(){
    return {
        restrict : 'E',
        templateurl : 'module/skills/views/member.html',
        controller : 'SkillsMemberController',
        controllerAs : 'vm',
        bindToController : true,
        scope : {
            member : 'm'
        }

    }
}