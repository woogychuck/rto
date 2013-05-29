var galaxyModule = angular.module('Galaxy',[]).config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('', {templateUrl: 'partials/start.html', controller: SetupCtrl}).
        when('/planet_static', {templateUrl: 'partials/planet.html', controller: PlanetStaticCtrl}).
        when('/planet/:planetId', {templateUrl: 'partials/planet.html', controller: PlanetCtrl}).
        when('/system_static', {templateUrl: 'partials/system.html', controller: SystemStaticCtrl}).
        when('/system/:systemId', {templateUrl: 'partials/system.html', controller: SystemCtrl}).
        when('/galaxy', {templateUrl: 'partials/galaxy.html', controller: GalaxyCtrl});
}]);

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

function SystemStaticCtrl($scope,GameService,$routeParams){
    $scope.game = GameService.getGame();
    $scope.galaxy = $scope.game.galaxy;
    $scope.system = $scope.galaxy.systems[0];
}

function PlanetCtrl($scope, GameService,$routeParams){
    $scope.game = GameService.getGame();
    $scope.galaxy = $scope.game.galaxy;
    $scope.planet = $scope.galaxy.getPlanet($routeParams.planetId);
    $scope.system = $scope.galaxy.getSystem($scope.planet.systemId);
}

function PlanetStaticCtrl($scope, GameService,$routeParams){
    $scope.game = GameService.getGame();
    $scope.galaxy = $scope.game.galaxy;
    $scope.planet = $scope.galaxy.systems[0].planets[0];
    $scope.system = $scope.galaxy.getSystem($scope.planet.systemId);
}