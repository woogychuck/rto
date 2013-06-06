var researchModule = angular.module('ResearchModule',[]).config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/research', {templateUrl: 'partials/research.html', controller: ResearchCtrl});
}]);

researchModule.controller('ResearchCtrl', function($scope){
    $scope.section = 'research';
    $scope.game = GameService.getGame();

    var ember = new ResearchProject();
    ember.name = "Ember";
    ember.description = "The Ember is the central database provided by The Origin.";
    ember.gridX = 0;
    ember.gridY = 0;

    var ambassador = new EngineeringProject();
    ambassador.name = "The Ambassador";
    ambassador.description = "The Ambassador program is the primary interface to the ember. Studying will improve the efficiency of all Ember research";
    ambassador.direction = "NW";

    var engineer = new EngineeringProject();
    engineer.name = "The Engineer";
    engineer.description = "The Engineer is a program embedded in the Ember to assist with engineering projects. Studying will improve the efficiency of engineering projects.";
    engineer.direction = "NE";

    var general = new EngineeringProject();
    general.name = "The General";
    general.description = "The General is a program embedded in the Ember to assist with defence and military tactics. Studying will improve effectiveness of combat vessels.";
    general.direction = "SE";

    var ascetic = new EngineeringProject();
    ascetic.name = "The Ascetic";
    ascetic.description = "The Ascetic is a program that teaches about culture and philosophy.";
    ascetic.direction = "SW";

    ember.engineeringProjects.push(ambassador);
    ember.engineeringProjects.push(engineer);
    ember.engineeringProjects.push(general);
    ember.engineeringProjects.push(ascetic);




});

