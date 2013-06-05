var galaxyModule = angular.module('Galaxy',[]).config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/planet_static', {templateUrl: 'partials/planet.html', controller: PlanetStaticCtrl}).
        when('/planet/:planetId', {templateUrl: 'partials/planet.html', controller: PlanetCtrl}).
        when('/system_static', {templateUrl: 'partials/system.html', controller: SystemStaticCtrl}).
        when('/system/:systemId', {templateUrl: 'partials/system.html', controller: SystemCtrl}).
        when('/galaxy', {templateUrl: 'partials/galaxy.html', controller: GalaxyCtrl});
}]);

galaxyModule.controller('GalaxyCtrl', function($scope, GameService){
    $scope.section = 'galaxy';
    $scope.game = GameService.getGame();
    $scope.galaxy = $scope.game.galaxy;
});

galaxyModule.controller('SystemCtrl', function($scope,GameService,$routeParams){
    $scope.section = 'galaxy';
    $scope.game = GameService.getGame();
    $scope.galaxy = $scope.game.galaxy;
    $scope.system = $scope.galaxy.getSystem($routeParams.systemId);
});

galaxyModule.controller('SystemStaticCtrl', function($scope,GameService,$routeParams){
    $scope.section = 'galaxy';
    $scope.game = GameService.getGame();
    $scope.galaxy = $scope.game.galaxy;
    $scope.system = $scope.galaxy.systems[0];
});

galaxyModule.controller('PlanetCtrl', function($scope, GameService,$routeParams){
    $scope.section = 'galaxy';
    $scope.game = GameService.getGame();
    $scope.galaxy = $scope.game.galaxy;
    $scope.planet = $scope.galaxy.getPlanet($routeParams.planetId);
    $scope.system = $scope.galaxy.getSystem($scope.planet.systemId);
});

galaxyModule.controller('PlanetStaticCtrl', function($scope, GameService,$routeParams){
    $scope.section = 'galaxy';
    $scope.game = GameService.getGame();
    $scope.galaxy = $scope.game.galaxy;
    $scope.planet = $scope.galaxy.systems[0].planets[0];
    $scope.system = $scope.galaxy.getSystem($scope.planet.systemId);
});