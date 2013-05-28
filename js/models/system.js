var System = BaseObject.extend({
        init: function () {
            this._super('system');
            this.stars = new Array();
            this.planets = new Array();
            this.factors = new Array();
        },
        name: '',
        stars: [],
        planets: [],
        factors: [],
        coordinates: [0,0],
        generateSystem: function (){

            var systemName = SYSTEM_NAMES[0];
            SYSTEM_NAMES.splice(0,1);
            this.name = systemName;

            //Locate System
            var x = Math.ceil(Math.random() * 1000);
            var y = Math.ceil(Math.random() * 600);

            this.coordinates = [x,y];

            //Generate Stars
            var starSeed = Math.random();
            var starCount = 1;
            var maxSatellites = 0;
            var tempAdj = 0;
            if(starSeed > .96){
                starCount = 3;
            }else if(starSeed > .70){
                starCount = 2;
            }
            for(var i = 1; i <= starCount; i++){
                var starName = systemName;
                var starLetter = 'ABC'.charAt(i-1);
                if(starCount > 1){
                    starName = starName + ' ' + starLetter;
                }
                var star = new Star();
                star.generateStar(starName);
                if(star.maxSatelliteCount > maxSatellites){
                    maxSatellites  = star.maxSatelliteCount;
                }
                tempAdj += star.tempAdj;
                this.stars.push(star);
            }

            //Calculate planet zones based on temperature of system
            var zones = ['inner', 'gold', 'middle', 'outer'];
            var zoneSatellites = [];

            if(tempAdj >= 40){
                //Huge hot systems are likely low metal and have eaten all of their delicious planets
                zoneSatellites = [0,0,0,0];
            }else if(tempAdj >=15 ){
                //Hot systems have likely absorbed inner planets and destroyed goldilocks planets
                zoneSatellites = [0,0,5,10];
            }else if(tempAdj >= 8){
                //Things are cooling off, but goldilocks planets are still fairly rare
                zoneSatellites = [4,2,5,9];
            }else if(tempAdj >= 4){
                //These systems are just right
                zoneSatellites = [3,5,4,3];
            }else{
                //Small systems with little heat
                zoneSatellites = [1,1,2,4];
            }

            //Generate Planets
            var planetCount = 0;
            for(var i = 0; i < zoneSatellites.length; i++){
                if(zoneSatellites[i] > 0){
                    for(var j = 0; j < zoneSatellites[i]; j++){
                        var planetSeed = Math.random();
                        if(planetSeed > .5){
                            planetCount++;
                            var planet = new Planet();
                            planet.generatePlanet(systemName + ' ' + planetCount, zones[i], this.id);
                            this.planets.push(planet);
                        }
                    }
                }
            }

            //Generate Factors

            return this.planets;
        },
        endTurn: function(){
            for(var i = 0; i < this.stars.length; i++){
                this.stars[i].endTurn();
            }

            for(var i = 0; i < this.planets.length; i++){
                this.planets[i].endTurn();
            }
        }
    }
);