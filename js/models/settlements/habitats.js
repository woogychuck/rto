var Habitat = Settlement.extend({
        init: function (player, planet) {
            this._super(player, planet);
            this.class = 'habitat';
        },
        initialPopulation: 100,
        baseGrowthRate: 0,
        basePopulationCap: 100,
        baseResearchOutput: 2,
        tempVar: 2,
        densityVar: 2
    }
);

var AdvancedHabitat = Settlement.extend({
        init: function (player, planet) {
            this._super(player, planet);
            this.class = 'habitat';
        },
        initialPopulation: 100,
        baseGrowthRate: 0,
        basePopulationCap: 100,
        baseResearchOutput: 2,
        tempVar: 4,
        densityVar: 4,
        reactiveAtmosphere: true
    }
);

var DeepSpaceHabitat = Settlement.extend({
        init: function (player, planet) {
            this._super(player, planet);
            this.class = 'habitat';
        },
        initialPopulation: 100,
        baseGrowthRate: 0,
        basePopulationCap: 100,
        baseResearchOutput: 3,
        tempVar: 10,
        densityVar: 10,
        reactiveAtmosphere:true,
        orbital:true
    }
);

var UltimateHabitat = Settlement.extend({
        init: function (player, planet) {
            this._super(player, planet);
            this.class = 'habitat';
        },
        initialPopulation: 250,
        baseGrowthRate: 0,
        basePopulationCap: 250,
        baseResearchOutput: 3,
        tempVar: 10,
        densityVar: 10,
        reactiveAtmosphere: true,
        hostileAtmosphere: true,
        water: true,
        orbital:true
    }
);

