var BaseObject = Class.extend({
    init: function(basename){
        this.id = generateId(basename);
    }
})