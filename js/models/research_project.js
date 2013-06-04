var ResearchProject = BaseObject.extend({
    init: function () {
        this._super('research');
    },
    name:'',
    description:'',
    researchPoints: 0,
    gridX: 0,
    gridY: 0,
    category: '',
    completeProject : function(player){
    }
});

