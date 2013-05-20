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
        generatePlanet: function(systemName, zone){
            //
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
