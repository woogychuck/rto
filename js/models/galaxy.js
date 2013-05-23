var Galaxy = BaseObject.extend({
        init: function () {
            this._super('galaxy');
        },
        systems: [],
        systemsById: {},
        planetsById: {},
        generateGalaxy: function(){
            var systemCount = 12;
            for(var i = 0; i < systemCount; i++){
                var system = new System();
                var planets = system.generateSystem();
                this.systems.push(system);
                this.systemsById[system.id] = system;
                for(var j = 0; j < planets.length; j++){
                    this.planetsById[planets[j].id] = planets[j];
                }
            }
            return this;
        },
        endTurn: function(){
            for(var i = 0; i<this.systems.length; i++){
                this.systems[i].endTurn();
            }
        },
        getSystem: function(systemId){
            return this.systemsById[systemId];
        },
        getPlanet: function(planetId){
            return this.planetsById[planetId];
        }
    }
);