gameFlowModule.directive('playerInfo', function(){
    return {
        replace: true,
        templateUrl: 'templates/gameflow/player_info.html',
        link: function(scope, iElement, iAttr){

        },
        controller: function($scope, GameService){
            $scope.game = GameService.getGame();
            $scope.player = $scope.game.player;
        }
    }
})
