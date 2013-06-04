var Improvement = BaseObject.extend({
        init: function () {
            this._super('improvement');
            this.dependencies = [];
        },
        name:'',
        description:'',
        constructionPoints: 0,
        minimumSettlementClass: 'habitat',
        maintenanceCost: 0,
        category:'general',
        dependencies: [],
        updateStats: function(){
        }
    }
);