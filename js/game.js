var main = angular.module('Game',['Game.Services','UIFilters']).
	config(['$routeProvider', function($routeProvider){
		$routeProvider.
            when('', {templateUrl: 'partials/start.html', controller: SetupCtrl}).
			when('/planet/:planetId', {templateUrl: 'partials/planet.html', controller: PlanetCtrl}).
            when('/system/:systemId', {templateUrl: 'partials/system.html', controller: SystemCtrl}).
            when('/galaxy', {templateUrl: 'partials/galaxy.html', controller: GalaxyCtrl}).
			otherwise({redirectTo: ''});
	}]);

function SetupCtrl($scope, GameService){

}

function GalaxyCtrl($scope, GameService){
    $scope.section = 'galaxy';
    $scope.game = GameService.getGame();
    $scope.galaxy = $scope.game.galaxy;
}

function SystemCtrl($scope,GameService,$routeParams){
    $scope.game = GameService.getGame();
    $scope.galaxy = $scope.game.galaxy;
    $scope.system = $scope.galaxy.getSystem($routeParams.systemId);
}

function PlanetCtrl($scope, GameService,$routeParams){
    $scope.game = GameService.getGame();
    $scope.galaxy = $scope.game.galaxy;
    $scope.planet = $scope.galaxy.getPlanet($routeParams.planetId);
    $scope.system = $scope.galaxy.getSystem($scope.planet.systemId);
}