var Planet = BaseObject.extend({
        init: function(){
            this._super('planet');
            this.moons = new Array();
            this.factors = new Array();
        },
        name: '',
        size: 0,
        terrestrial: true,
        type: '',
        zone: '',
        temp: 0,
        atmosphereDensity: 0,
        atmosphereType: 'none',
        water: 0,
        ice: 0,
        factors: [],
        satelliteCount: 0,
        //Only satellites useful for game mechanics are added to the moons array
        moons: [],
        baseIndustry: 5,
        baseResearch: 5,
        baseTrade: 5,
        baseGrowth:.01,
        maxNations: 0,
        settlements: [],
        player: null,
        systemId: '',
        generatePlanet: function(systemName, zone, systemId){
            this.name = systemName;
            this.systemId = systemId;
            generatePlanetByZone(this, zone);
        },
        isHabitable: function(player, settlement){
            return this.terrestrial;
        },
        isColonized: function(){
            return this.player != null;
        },
        buildSettlement: function(settlement){
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
