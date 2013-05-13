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
            var x = Math.ceil(Math.random() * 800);
            var y = Math.ceil(Math.random() * 400);

            this.coordinates = [x,y];

            //Generate Stars
            var starSeed = Math.random();
            var starCount = 1;
            var maxSatellites = 0;
            var tempAdj = 0;
            if(starSeed > .70){
                starCount = 2;
            }else if(starSeed > .96){
                starCount = 3;
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
                if(star.tempAdj > tempAdj){
                    tempAdj = star.tempAdj;
                }
                this.stars.push(star);
            }

            //Generate Planets
            var satelliteCount = Math.floor(Math.random() * maxSatellites);
            for(var i =0; i < satelliteCount; i++){
                var planet = new Planet();
                planet.generatePlanet(this.name,i + 1,tempAdj);
                this.planets.push(planet);
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