gameFlowModule.directive('turnControl', function(){
    return {
        templateUrl: 'templates/gameflow/turn_control.html',
        replace:true,
        link: function(scope,iElement,iAttrs){

        },
        controller: function($scope, GameService){
            $scope.game = GameService.getGame();
        }
    };
});