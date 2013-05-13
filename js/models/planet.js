var Planet = BaseObject.extend({
        init: function(){
            this._super('planet');
            this.moons = new Array();
            this.factors = new Array();
        },
        name: '',
        size: 0,
        type: '',
        temp: '',
        atmosphereDensity: 0,
        atmosphereType: 'none',
        water: 0,
        ice: 0,
        factors: [],
        moons: [],
        baseIndustry: 5,
        baseResearch: 5,
        baseTrade: 5,
        baseGrowth:.01,
        maxNations: 0,
        settlements: [],
        player: null,
        generatePlanet: function(systemName, distance, tempModifier){
            this.name = systemName + ' ' + romanize(distance);
            var planetSeed = Math.random();
            if(planetSeed < .8){
                this.type = 'terrestrial';
                this.size = Math.ceil(Math.random() * 10);

                var baseTemp = 8 + tempModifier;

                this.temp = baseTemp - distance;
                if(baseTemp > 10){
                    this.temp = 10;
                }else if(baseTemp < 0){
                    this.temp = 0;
                }

                //Figure out the atmosphere
                if(this.size > 3){
                    this.atmosphereDensity = this.size - 3;
                    var atmosphereTypeIndex = Math.floor(Math.random() * 6);
                    this.atmosphereType = PLANET_ATMOSPHERE_TYPES[atmosphereTypeIndex];
                }

                //Figure water and ice
                if(this.temp < 4){
                    this.ice = Math.floor(Math.random() * 10);
                }else if(this.temp < 7){
                    this.ice = Math.floor(Math.random() * 3);
                }

                if(this.temp < 8 && this.atmosphereDensity > 4){
                    this.water = Math.floor(Math.random() * 10);
                }
            }else if(planetSeed < .9){
                this.type = 'gaseous';
                this.size = 10;
                this.temp = 0;
                this.atmosphereDensity = 10;
                var atmosphereTypeIndex = Math.floor(Math.random() * 5);
                this.atmosphereType = GASEOUS_ATMOSPHERE_TYPES[atmosphereTypeIndex];
            }else{
                this.type = 'other';
            }
        },
        isHabitable: function(player, settlement){
            return true;
        },
        buildSettlement: function(player, settlement){
            //Create settlement
            this.settlements.push(settlement);

            //Add planet to player's planet list
            this.player = player;
            player.planets.push(this);
        },
        endTurn: function(){
            //Iterate over settlements to adjust properties
            for(var i = 0; i < this.settlements.length; i++){
                this.settlements[i].endTurn(this);
            }
        }
    }
);
