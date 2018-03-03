'use strict';

angular.module('losentisteApp.earthquake-form', ['ngRoute','angular-jquery-locationpicker'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/earthquake-form', {
    templateUrl: 'earthquake-form/earthquake-form.html',
    controller: 'EarthquakeFormCtrl'
  });
}])

.controller('EarthquakeFormCtrl', ["$scope","$log",function(sc,$log) {
  sc.currentQuestion = 1;
  sc.totalQuestion = 3;
  sc.subquestion = false;
  sc.showEnd = false;
  sc.locationpickerOptions = {
    location: {
        latitude:10.113453,
        longitude:-84.065472
    },
    inputBinding: {
        locationNameInput: $('#search-bar')
    },
    enableAutocomplete: true
  }
  sc.showSubquestions = function(){
    $log.log("showing subquestions");
    sc.subquestion=true;
  };
  sc.isQuestionActive = function(questionNumber){
    $log.log(sc.currentQuestion);
    if(sc.currentQuestion === questionNumber){
      return true;
    }
    return false;
  };
  sc.advanceQuestion = function(){
    sc.currentQuestion < sc.totalQuestion?++sc.currentQuestion:(sc.showEnd=true);
  };
  sc.gobackQuestion = function(){
    sc.currentQuestion > 1 ?--sc.currentQuestion:sc.currentQuestion;
  };
  
  sc.getQuestions = function(){};

  var format_question = function(question){
    let answers_array = {};
    for (answer in  question.answers){
      
    }
  };
}]);