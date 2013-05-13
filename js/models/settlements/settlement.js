var Settlement = BaseObject.extend({
        init: function (player) {
            this._super('settlement');
            this.player = player;
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
        improvements: [],
        projectQueue: [],
        endTurn: function(){
            //Loop through improvements to adjust modifiers

            //Calculate turn output
            var newPopulation = Math.ceil(this.currentPopulation * (1 + this.currentPopulationGrowth));
            if(newPopulation > this.currentPopulationCap){
                newPopulation = this.currentPopulationCap;
            }
            this.currentPopulation = newPopulation;

            var turnTradeOutput = Math.ceil(this.currentPopulation * this.currentTradeOutput);
            var turnResearchOutput = Math.ceil(this.currentPopulation * this.currentResearchOutput);
            var turnIndustrialOutput = Math.ceil(this.currentPopulation * this.currentIndustrialOutput);

            //Update current project

            //Update Player
            this.player.totalPopulation += newPopulation;
            this.player.researchOutput += turnResearchOutput;
            this.player.tradeOutput += turnTradeOutput;
        },
        queueProject: function(improvement){

        }
    }
);