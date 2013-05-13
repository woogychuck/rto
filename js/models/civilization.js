var Civilization = BaseObject.extend({
        init: function () {
            this._super('civilization');
        },
        population: 0,
        player: null,
        settlements: [],
        improvements: [],
        currentProject: null,
        currentIndustry: 5,
        currentResearch: 5,
        currentTrade: 5,
        currentGrowth:.01
    }
);