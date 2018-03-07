'use strict';

angular.module('losentisteApp.searchbar-directive', [])

.directive('searchbar', [function() {
  var directive = {
    link: directive_foo
  }
  return directive;
  var directive_foo = function(scope, elm, attrs) {
    consol.log("directive");
    var searchbox =  new google.maps.places.Searchbar(elm);
  };
}]);