var GameService = angular.module('GameService', []);

GameService.factory('GameService', function () {
    var gameEngine = new GameEngine();
    return {
        gameEngine: gameEngine,
        getGame: function(){
            if(this.gameEngine.currentTurn == 0){
                this.gameEngine.setupGame();
            }
            return this.gameEngine;
        }
    };
});

