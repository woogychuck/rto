var Outpost = Settlement.extend({
        init: function (player) {
            this._super(player);
            this.class = 'outpost';
        },
        initialPopulation: 200,
        currentPopulation: 200,
        basePopulationCap: 10000,
        baseResearchOutput: 2,
        currentResearchOutput: 400,
        baseIndustrialOutput: 3,
        currentIndustrialOutput: 600,
        baseTradeOutput: 1,
        currentTradeOutput: 200,
        tempVar: 2,
        densityVar: 2
    }
);

var AdvancedOutpost = Settlement.extend({
        init: function (player) {
            this._super(player);
            this.class = 'outpost';
        },
        initialPopulation: 200,
        currentPopulation: 200,
        basePopulationCap: 10000,
        baseResearchOutput: 2,
        currentResearchOutput: 400,
        baseIndustrialOutput: 3,
        currentIndustrialOutput: 600,
        baseTradeOutput: 1,
        currentTradeOutput: 200,
        tempVar: 4,
        densityVar: 4,
        reactiveAtmosphere: true
    }
);

var DeepSpaceOutpost = Settlement.extend({
        init: function (player) {
            this._super(player);
            this.class = 'outpost';
        },
        initialPopulation: 200,
        currentPopulation: 200,
        basePopulationCap: 10000,
        baseResearchOutput: 2,
        currentResearchOutput: 400,
        baseIndustrialOutput: 3,
        currentIndustrialOutput: 600,
        baseTradeOutput: 1,
        currentTradeOutput: 200,
        tempVar: 10,
        densityVar: 10,
        reactiveAtmosphere:true,
        orbital:true
    }
);

var UltimateOutpost = Settlement.extend({
        init: function (player) {
            this._super(player);
            this.class = 'outpost';
        },
        initialPopulation: 300,
        currentPopulation: 300,
        basePopulationCap: 20000,
        baseResearchOutput: 2,
        currentResearchOutput: 600,
        baseIndustrialOutput: 5,
        currentIndustrialOutput: 1500,
        baseTradeOutput: 2,
        currentTradeOutput: 600,
        tempVar: 10,
        densityVar: 10,
        reactiveAtmosphere: true,
        hostileAtmosphere: true,
        water: true,
        orbital:true
    }
);

