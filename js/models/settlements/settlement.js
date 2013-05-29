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
            //Apply modifiers/improvements
            this.currentPopulationGrowth = this.basePopulationGrowth;
            this.currentPopulationCap = this.basePopulationCap;

            //Update population
            var growthFactor = this.player.race.growthRate * this.planet.currentGrowth * this.currentPopulationGrowth;
            var growthAmount = this.currentPopulation * growthFactor;
            if(this.currentPopulation + growthAmount > this.currentPopulationCap){
                this.currentPopulation = this.currentPopulationCap;
            }else{
                this.currentPopulation += growthAmount;
            }

            //Update Research

        },
        setup: function(){
            this.updateStats();
            this.planet.currentPopulation += this.currentPopulation;
        },
        endTurn: function(){
            this.updateStats();

            //Update current project

            //Update Planet
            this.planet.currentPopulation += this.currentPopulation;
        },
        queueProject: function(improvement){

        }
    }
);