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
        baseGrowth:1,
        currentPopulation: 0,
        currentIndustry: 0,
        currentResearch: 0,
        currentTrade: 0,
        currentGrowth: 0,
        maxNations: 0,
        settlements: [],
        player: null,
        systemId: '',
        generatePlanet: function(systemName, zone, systemId){
            this.name = systemName;
            this.systemId = systemId;
            generatePlanetByZone(this, zone);
        },
        isColonizable: function(player, settlement){
            return this.terrestrial && this.player == null;
        },
        isColonized: function(){
            return this.player != null;
        },
        buildSettlement: function(settlementType, player){
            var settlement = null;
            switch(settlementType){
                case 'habitat':
                    settlement = new Habitat(player, this);
                    break;
                case 'outpost':
                    settlement = new Outpost(player, this);
                    break;
                case 'colony':
                    //settlement = new Colony();
                    return;
                    break;
            }

            //Create settlement
            this.settlements.push(settlement);

            //Add planet to player's planet list
            this.player = player;
            player.planets.push(this);
        },
        updateStats: function(){
            console.log('Updating Planet Stats')
            this.currentGrowth = this.baseGrowth;
        },
        clearStats: function(){
            console.log('Clearing Stats');
            this.currentPopulation = 0;
        },
        endTurn: function(){
            console.log('Ending turn for planet ' + this.name);
            this.clearStats();
            this.updateStats();

            //Iterate over settlements to adjust properties
            for(var i = 0; i < this.settlements.length; i++){
                this.settlements[i].endTurn();
            }

            console.log('Turn Ended');
        }
    }
);
