var TextFilters = angular.module('TextFilters',[]);

TextFilters.filter('ucwords', function(){
   return function(input){
       return ucwords(input);
   } ;
});

TextFilters.filter('scoreWords', function(){
    return function(input){
        return scoreWord(input);
    } ;
});