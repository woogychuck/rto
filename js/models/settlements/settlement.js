var Settlement = BaseObject.extend({
        init: function (player, planet) {
            this._super('settlement');
            this.player = player;
            this.planet = planet;
            this.setup();
        },
        class: '',
        initialPopulation: 0,
        basePopulationCap: 0,
        baseIndustrialRate: 5,
        baseResearchRate: 5,
        baseTradeRate: 5,
        baseIndustrialOutput: 0,
        baseResearchOutput: 0,
        baseTradeOutput: 0,
        baseGrowthRate: 1,
        currentPopulation: 0,
        currentPopulationCap: 0,
        currentIndustrialRate: 0,
        currentResearchRate: 0,
        currentTradeRate: 0,
        currentIndustrialOutput: 0,
        currentResearchOutput: 0,
        currentTradeOutput: 0,
        currentGrowthRate: 0,
        currentGrowthAmount: 0,
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
        updateStats: function(updatePopulation){
            //Set Baseline
            this.currentGrowthRate = this.baseGrowthRate;
            this.currentPopulationCap = this.basePopulationCap;

            this.currentIndustrialRate = this.baseIndustrialRate;
            this.currentResearchRate = this.baseResearchRate;
            this.currentTradeRate = this.baseTradeRate;

            this.currentIndustrialOutput = 0;
            this.currentResearchOutput = 0;
            this.currentTradeOutput = 0;

            //Apply improvements
            for(var i = 0; i < this.improvements.length; i++){

            }

            //Update population
            this.currentGrowthRate = this.player.race.growthRate * this.planet.currentGrowthRate * this.currentGrowthRate;
            this.currentGrowthAmount = this.currentPopulation * this.currentGrowthRate;
            if(this.currentPopulation + this.currentPopulationGrowthAmount > this.currentPopulationCap){
                this.currentGrowthAmount = this.currentPopulationCap - this.currentPopulation;
            }

            this.currentGrowthAmount = Math.ceil(this.currentGrowthAmount);

            if(updatePopulation){
                this.currentPopulation += this.currentGrowthAmount;
            }

            //Update Research
            this.currentResearchOutput += (this.currentResearchRate + this.planet.currentResearchRate) * this.currentPopulation;

            //Update Industry
            this.currentIndustrialOutput += (this.currentIndustrialRate + this.planet.currentResearchRate) * this.currentPopulation;

            //Update Trade
            this.currentTradeOutput += (this.currentTradeRate + this.planet.currentTradeRate) * this.currentPopulation;

        },
        setup: function(){
            this.currentPopulation = this.initialPopulation;
            this.updateStats(false);
        },
        endTurn: function(){
            this.updateStats(false);
            this.updateProjects();
            this.updateStats(true);
        },
        queueProject: function(improvement){

        },
        updateProjects: function(){

        }
    }
);