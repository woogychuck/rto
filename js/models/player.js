var Player = BaseObject.extend({
        init: function (race, name, color) {
            this._super('player');
            this.race = race;
            this.name = name;
            this.color = color;
        },
        color: '',
        name: '',
        race: null,
        planets: [],
        fleets: [],
        researchUnlocked: {},
        currentResearchProject: null,
        improvementsUnlocked: {},
        totalResearchOutput: 0,
        totalTradeOutput: 0,
        totalPopulation: 0,
        currentCapital: 0,
        endTurn: function(){
            this.totalPopulation = 0;
            this.totalTradeOutput = 0;
            this.totalResearchOutput = 0;

            for(var i = 0; i < this.planets.length; i++){
                this.planets[i].endTurn();
                this.totalPopulation += this.planets[i].currentPopulation;
                this.totalResearchOutput += this.planets[i].currentResearchOutput;
                this.totalTradeOutput += this.planets[i].currentTradeOutput;
            }

            this.currentCapital += this.totalTradeOutput;
        }
    }
);