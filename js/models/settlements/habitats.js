var Habitat = Settlement.extend({
        init: function (player) {
            this._super(player);
            this.class = 'habitat';
        },
        initialPopulation: 100,
        currentPopulation: 100,
        basePopulationCap: 100,
        baseResearchOutput: 2,
        currentResearchOutput: 200,
        tempVar: 2,
        densityVar: 2
    }
);

var AdvancedHabitat = Settlement.extend({
        init: function (player) {
            this._super(player);
            this.class = 'habitat';
        },
        initialPopulation: 100,
        currentPopulation: 100,
        basePopulationCap: 100,
        baseResearchOutput: 2,
        currentResearchOutput: 200,
        tempVar: 4,
        densityVar: 4,
        reactiveAtmosphere: true
    }
);

var DeepSpaceHabitat = Settlement.extend({
        init: function (player) {
            this._super(player);
            this.class = 'habitat';
        },
        initialPopulation: 100,
        currentPopulation: 100,
        basePopulationCap: 100,
        baseResearchOutput: 3,
        currentResearchOutput: 300,
        tempVar: 10,
        densityVar: 10,
        reactiveAtmosphere:true,
        orbital:true
    }
);

var UltimateHabitat = Settlement.extend({
        init: function (player) {
            this._super(player);
            this.class = 'habitat';
        },
        initialPopulation: 250,
        currentPopulation: 250,
        basePopulationCap: 250,
        baseResearchOutput: 3,
        currentResearchOutput: 750,
        tempVar: 10,
        densityVar: 10,
        reactiveAtmosphere: true,
        hostileAtmosphere: true,
        water: true,
        orbital:true
    }
);

