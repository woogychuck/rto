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
        currentResearch: null,
        improvementsUnlocked: {},
        researchOutput: 0,
        tradeOutput: 0,
        totalPopulation: 0,
        endTurn: function(){
            for(var i = 0; i < this.planets.length; i++){
                this.planets[i].endTurn();
            }
        }
    }
);