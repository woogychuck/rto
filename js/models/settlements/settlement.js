var Settlement = BaseObject.extend({
        init: function (player, planet) {
            this._super('settlement');
            this.player = player;
            this.planet = planet;
            this.setup();
        },
        class: '',
        initialPopulation: 0,
        currentPopulation: 0,
        basePopulationCap: 0,
        currentPopulationCap: 0,
        baseResearchOutput: 0,
        currentResearchOutput: 0,
        baseTradeOutput: 0,
        currentTradeOutput: 0,
        baseIndustrialOutput: 0,
        currentIndustrialOutput: 0,
        basePopulationGrowth: 0,
        currentPopulationGrowth: 0,
        currentPopulationGrowthAmount: 0,
        tempVar: 0,
        densityVar: 0,
        reactiveAtmosphere: false,
        hostileAtmosphere: false,
        water: false,
        orbital: false,
        player: null,
        planet: null,
        improvements: [],
        projectQueue: [],
        updateStats: function(){
            //Set Baseline
            this.currentPopulationGrowth = this.basePopulationGrowth;
            this.currentPopulationCap = this.basePopulationCap;
            this.currentIndustrialOutput = this.baseIndustrialOutput;
            this.currentResearchOutput = this.baseResearchOutput;
            this.currentTradeOutput = this.baseTradeOutput;

            //Apply improvements
            for(var i = 0; i < this.improvements.length; i++){

            }

            //Update population
            var growthFactor = this.player.race.growthRate * this.planet.currentGrowth * this.currentPopulationGrowth;
            var growthAmount = this.currentPopulation * growthFactor;
            if(this.currentPopulation + growthAmount > this.currentPopulationCap){
                growthAmount = this.currentPopulationCap - this.currentPopulation;
            }
            this.currentPopulationGrowthAmount = growthAmount;

            //Update Research
            this.currentResearchOutput = this.currentResearchOutput * this.currentPopulation;

            //Update Industry
            this.currentIndustrialOutput = this.currentIndustrialOutput * this.currentPopulation;

            //Update Trade
            this.currentTradeOutput = this.currentTradeOutput * this.currentPopulation;

        },
        setup: function(){
            this.currentPopulation = this.initialPopulation;
            this.updateStats();
        },
        endTurn: function(){
            this.updateStats();
        },
        queueProject: function(improvement){

        }
    }
);