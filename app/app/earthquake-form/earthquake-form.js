'use strict';

angular.module('losentisteApp.earthquake-form', ['ngRoute','angular-jquery-locationpicker'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/earthquake-form', {
    templateUrl: 'earthquake-form/earthquake-form.html',
    controller: 'EarthquakeFormCtrl'
  });
}])

.controller('EarthquakeFormCtrl', ["$scope","$log",'formService',function(sc,$log,formService) {
  sc.questions_array = [];
  sc.answers_array = [];
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
  sc.showSubanswers = function(answer){
    $log.log("showing subquestions");
    for(var i =0;i < answer.subanswers.length; ++i){
      answer.subanswers[i].visible = true;
    }

  };
  sc.isQuestionActive = function(questionNumber){
    $log.log(sc.currentQuestion);
    if(sc.currentQuestion === questionNumber){
      return true;
    }
    return false;
  };
  sc.advanceQuestion = function(answer){
    sc.currentQuestion < sc.questions_array.length?++sc.currentQuestion:(sc.showEnd=true);
    sc.answers_array[sc.currentQuestion-1] = answer.text;
    $log.info(sc.answers_array);
  };
  sc.gobackQuestion = function(){
    sc.currentQuestion > 1 ?--sc.currentQuestion:sc.currentQuestion;
  };
  
  sc.localQuestions = [];
  sc.getQuestions = function(){
    let questions = formService.getQuestions();
    $log.info(questions);
    for(var i = 0; i < questions.length; ++i){
      let question = questions[i];
      if(i == 2){
        let question = [];
        question.id =  sc.questions_array.length +1;
        question.text = '¿Donde estabas?';
        question.answers ={};
        question.type = "location";
        sc.questions_array.push(question);
      }
      sc.questions_array.push(formatQuestion(question));
    }
    sc.answers_array = new Array(sc.questions_array.length);
    $log.info(sc.questions_array);
  };
  var addTag = function(a,v){
    for(var i =0 ; i < v.length; ++i){
      let answer = v[i];
      if(answer.id === a.tag.id){
        answer.subanswers.push({id:a.id,
          text:a.text,
        weight: a.weight,
        order:a.order,
        type:"subanswer",
        visible:false});
        return v;  
      }
    }
    
    v.push({id: a.tag.id,
      text: a.tag.text,
      type:"tag",
     subanswers:[]});
     v[v.length-1].subanswers.push({id:a.id,
      text:a.text,
    weight: a.weight,
    order:a.order,
    type:"subanswer",
    visible:false});
     return v;
  };
  var formatQuestion = function(question){
    $log.info("Formatting:"+question);
    $log.info(question);
    var answers_array= [];
     for (var i = 0; i < question.answers.length; ++i){
      let answer = question.answers[i];
      if(answer.tag === null){
        answers_array.push(
          {id:sc.questions_array.length,
          text:answer.text,
          weight: answer.weight,
          order:answer.order,
          type:"answer",
          selected:false});
      }
      else{
        answers_array = addTag(answer,answers_array);
      }
    } 
    var new_question = [];
    new_question.id =  sc.questions_array.length+1;
    new_question.text =  question.text;
    new_question.answers = answers_array;
    new_question.type = "selection";
    return new_question;
  };
}]);