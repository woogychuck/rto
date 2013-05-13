var planetService = angular.module('PlanetService',[]);

planetService.factory('PlanetService', function(){
	return {
		generatePlanet: function(){

			var planetVals = {
                name : 'Earth',
                atmosphereDensity : 6,
                atmosphereType : 'blue',
                ice : 1,
                temp : 5,
                type : 'terrestrial',
                water : 7
            };
            var planet = new Planet();
            angular.extend(planet, planetVals);
			return planet;
		}
	};
});