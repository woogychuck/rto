var Planet = BaseObject.extend({
        init: function(){
            this._super('planet');
            this.moons = [];
            this.factors = [];
            this.settlements = [];
            this.updateStats();
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
        baseIndustrialRate: 5,
        baseResearchRate: 5,
        baseTradeRate: 5,
        baseIndustrialOutput: 0,
        baseResearchOutput: 0,
        baseTradeOutput: 0,
        baseGrowthRate: 1,
        currentPopulation: 0,
        currentIndustrialRate: 0,
        currentResearchRate: 0,
        currentTradeRate: 0,
        currentIndustrialOutput: 0,
        currentResearchOutput: 0,
        currentTradeOutput: 0,
        currentGrowthRate: 0,
        currentGrowthAmount: 0,
        maxSettlements: 1,
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
            this.updateStats(false);
        },
        updateStats: function(endTurn){
            //Clear Stats
            this.currentGrowthRate = this.baseGrowthRate;
            this.currentPopulation = 0;
            this.currentGrowthAmount = 0;

            this.currentIndustrialRate = this.baseIndustrialRate;
            this.currentResearchRate = this.baseResearchRate;
            this.currentTradeRate = this.baseTradeRate;

            this.currentIndustrialOutput = 0;
            this.currentResearchOutput = 0;
            this.currentTradeOutput = 0;

            //Update Planet Stats

            //Iterate over settlements
            for(var i = 0; i < this.settlements.length; i++){
                if(endTurn){
                    this.settlements[i].endTurn();
                }else{
                    this.settlements[i].updateStats();
                }
                this.currentPopulation += this.settlements[i].currentPopulation;
                this.currentGrowthAmount += this.settlements[i].currentGrowthAmount;
                this.currentIndustrialOutput += this.settlements[i].currentIndustrialOutput;
                this.currentResearchOutput += this.settlements[i].currentResearchOutput;
                this.currentTradeOutput += this.settlements[i].currentTradeOutput;
            }
        },
        endTurn: function(){
            this.updateStats(true);
        }
    }
);
