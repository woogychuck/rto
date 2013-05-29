var GameEngine = Class.extend({
    init: function(){
       this.setupGame();
    },
    currentTurn: 0,
    galaxy: null,
    opponents: [],
    player: {},
    setupGame: function(){
        //Setup the Galaxy
        this.galaxy = new Galaxy();
        this.galaxy.generateGalaxy();

        //Setup the player
        var race = new Race();
        race = angular.extend(race, RACE_DATA.Human);
        var player = new Player(race, 'Ian', '#FC0');
        this.player = player;

        //Setup the AI players

        this.currentTurn = 1;
    },
    endTurn: function(){
        //this.galaxy.endTurn();
        this.player.endTurn();
        for(var i = 0; i < this.opponents.length; i++){
            this.opponents[i].endTurn();
        }
    }
});

