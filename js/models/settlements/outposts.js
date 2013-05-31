var Outpost = Settlement.extend({
        init: function (player, planet) {
            this._super(player, planet);
            this.class = 'outpost';
        },
        initialPopulation: 200,
        basePopulationCap: 10000,
        baseGrowthRate: 1,
        baseResearchOutput: 2,
        baseIndustrialOutput: 3,
        baseTradeOutput: 1,
        tempVar: 2,
        densityVar: 2
    }
);

var AdvancedOutpost = Settlement.extend({
        init: function (player, planet) {
            this._super(player, planet);
            this.class = 'outpost';
        },
        initialPopulation: 200,
        basePopulationCap: 10000,
        baseGrowthRate: 1,
        baseResearchOutput: 2,
        baseIndustrialOutput: 3,
        baseTradeOutput: 1,
        tempVar: 4,
        densityVar: 4,
        reactiveAtmosphere: true
    }
);

var DeepSpaceOutpost = Settlement.extend({
        init: function (player, planet) {
            this._super(player, planet);
            this.class = 'outpost';
        },
        initialPopulation: 200,
        basePopulationCap: 10000,
        baseGrowthRate: 1,
        baseResearchOutput: 2,
        baseIndustrialOutput: 3,
        baseTradeOutput: 1,
        tempVar: 10,
        densityVar: 10,
        reactiveAtmosphere:true,
        orbital:true
    }
);

var UltimateOutpost = Settlement.extend({
        init: function (player, planet) {
            this._super(player, planet);
            this.class = 'outpost';
        },
        initialPopulation: 300,
        basePopulationCap: 20000,
        baseGrowthRate: 1,
        baseResearchOutput: 2,
        baseIndustrialOutput: 5,
        baseTradeOutput: 2,
        tempVar: 10,
        densityVar: 10,
        reactiveAtmosphere: true,
        hostileAtmosphere: true,
        water: true,
        orbital:true
    }
);

