'use strict';

angular.module('losentisteApp.earthquakes-list')
.factory("formService",[function(){
    var service = {
        currentEarthquake:null,
        questions: null,
        setEarthquake: function(earthquake){
            this.currentEarthquake = earthquake;
        },
        getQuestions: function(){
            //http request with questions
            var data = {
                "count": 11,
                "next": null,
                "previous": null,
                "results": [{
                  "id": 1,
                  "answers": [{
                    "id": 1,
                    "tag": null,
                    "text": "Sí",
                    "weight": 1,
                    "order": 1
                  }, {
                    "id": 2,
                    "tag": null,
                    "text": "No",
                    "weight": 1,
                    "order": 2
                  }],
                  "text": "¿Lo sentiste?",
                  "weight": 5,
                  "order": 1
                }, {
                  "id": 2,
                  "answers": [{
                    "id": 3,
                    "tag": {
                      "id": 1,
                      "text": "Dentro de una edificación"
                    },
                    "text": "Piso 1 o 2",
                    "weight": 1,
                    "order": 1
                  }, {
                    "id": 4,
                    "tag": null,
                    "text": "En la calle",
                    "weight": 2,
                    "order": 3
                  }, {
                    "id": 8,
                    "tag": {
                      "id": 1,
                      "text": "Dentro de una edificación"
                    },
                    "text": "Piso 3 o más",
                    "weight": 3,
                    "order": 2
                  }],
                  "text": "¿En qué lugar?",
                  "weight": 1,
                  "order": 2
                }, {
                  "id": 4,
                  "answers": [{
                    "id": 10,
                    "tag": null,
                    "text": "Estaba solo",
                    "weight": 2,
                    "order": 1
                  }, {
                    "id": 11,
                    "tag": null,
                    "text": "Nadie",
                    "weight": 3,
                    "order": 2
                  }, {
                    "id": 12,
                    "tag": null,
                    "text": "Algunos",
                    "weight": 3,
                    "order": 3
                  }, {
                    "id": 13,
                    "tag": null,
                    "text": "La mayoría",
                    "weight": 3,
                    "order": 4
                  }, {
                    "id": 14,
                    "tag": null,
                    "text": "Todos",
                    "weight": 4,
                    "order": 5
                  }],
                  "text": "¿Personas cerca tuyo lo sintieron?",
                  "weight": 3,
                  "order": 4
                }, {
                  "id": 3,
                  "answers": [{
                    "id": 5,
                    "tag": null,
                    "text": "En reposo",
                    "weight": 2,
                    "order": 1
                  }, {
                    "id": 6,
                    "tag": {
                      "id": 2,
                      "text": "En movimiento"
                    },
                    "text": "Caminando o corriendo",
                    "weight": 3,
                    "order": 2
                  }, {
                    "id": 7,
                    "tag": null,
                    "text": "Durmiendo y me despertó",
                    "weight": 4,
                    "order": 3
                  }, {
                    "id": 9,
                    "tag": {
                      "id": 2,
                      "text": "En movimiento"
                    },
                    "text": "Viajando en vehículo",
                    "weight": 1,
                    "order": 1
                  }],
                  "text": "¿Qué estabas haciendo?",
                  "weight": 3,
                  "order": 3
                }, {
                  "id": 5,
                  "answers": [{
                    "id": 16,
                    "tag": null,
                    "text": "Moderado",
                    "weight": 2,
                    "order": 2
                  }, {
                    "id": 17,
                    "tag": null,
                    "text": "Fuerte",
                    "weight": 3,
                    "order": 3
                  }, {
                    "id": 18,
                    "tag": null,
                    "text": "Violento",
                    "weight": 4,
                    "order": 4
                  }, {
                    "id": 15,
                    "tag": null,
                    "text": "Débil",
                    "weight": 1,
                    "order": 1
                  }],
                  "text": "¿Cómo describirías el movimiento?",
                  "weight": 3,
                  "order": 5
                }, {
                  "id": 6,
                  "answers": [{
                    "id": 19,
                    "tag": null,
                    "text": "No reaccioné",
                    "weight": 1,
                    "order": 1
                  }, {
                    "id": 20,
                    "tag": null,
                    "text": "Apenas reaccioné",
                    "weight": 2,
                    "order": 2
                  }, {
                    "id": 21,
                    "tag": null,
                    "text": "Me asombré",
                    "weight": 3,
                    "order": 3
                  }, {
                    "id": 22,
                    "tag": null,
                    "text": "Me asusté",
                    "weight": 4,
                    "order": 4
                  }, {
                    "id": 23,
                    "tag": null,
                    "text": "Entré en pánico",
                    "weight": 5,
                    "order": 5
                  }],
                  "text": "¿Cómo reaccionaste?",
                  "weight": 2,
                  "order": 6
                }, {
                  "id": 7,
                  "answers": [{
                    "id": 24,
                    "tag": null,
                    "text": "No",
                    "weight": 1,
                    "order": 1
                  }, {
                    "id": 25,
                    "tag": null,
                    "text": "Sí",
                    "weight": 2,
                    "order": 2
                  }],
                  "text": "¿Fue difícil caminar o mantenerse en pie?",
                  "weight": 4,
                  "order": 7
                }, {
                  "id": 8,
                  "answers": [{
                    "id": 26,
                    "tag": null,
                    "text": "No",
                    "weight": 1,
                    "order": 1
                  }, {
                    "id": 27,
                    "tag": null,
                    "text": "Pocos",
                    "weight": 2,
                    "order": 2
                  }, {
                    "id": 28,
                    "tag": null,
                    "text": "Muchos",
                    "weight": 3,
                    "order": 3
                  }, {
                    "id": 29,
                    "tag": null,
                    "text": "Casi todos",
                    "weight": 4,
                    "order": 4
                  }],
                  "text": "¿Los objetos livianos a tu alrededor se desplazaron o cayeron de los estantes?",
                  "weight": 4,
                  "order": 8
                }, {
                  "id": 9,
                  "answers": [{
                    "id": 32,
                    "tag": null,
                    "text": "No aplica",
                    "weight": 3,
                    "order": 3
                  }, {
                    "id": 30,
                    "tag": null,
                    "text": "No",
                    "weight": 1,
                    "order": 1
                  }, {
                    "id": 31,
                    "tag": null,
                    "text": "Sí",
                    "weight": 2,
                    "order": 2
                  }],
                  "text": "¿Los cuadros se torcieron o movieron?",
                  "weight": 3,
                  "order": 9
                }, {
                  "id": 10,
                  "answers": [{
                    "id": 33,
                    "tag": null,
                    "text": "No",
                    "weight": 1,
                    "order": 1
                  }, {
                    "id": 34,
                    "tag": null,
                    "text": "Sí",
                    "weight": 2,
                    "order": 2
                  }, {
                    "id": 35,
                    "tag": null,
                    "text": "No aplica",
                    "weight": 3,
                    "order": 3
                  }],
                  "text": "¿Los muebles u objetos pesados se deslizaron, cayeron o desplazaron?",
                  "weight": 3,
                  "order": 10
                }, {
                  "id": 11,
                  "answers": [{
                    "id": 36,
                    "tag": null,
                    "text": "No",
                    "weight": 1,
                    "order": 1
                  }, {
                    "id": 37,
                    "tag": null,
                    "text": "Algunas pequeñas grietas en paredes",
                    "weight": 1,
                    "order": 2
                  }, {
                    "id": 38,
                    "tag": null,
                    "text": "Grietas grandes en paredes",
                    "weight": 3,
                    "order": 3
                  }, {
                    "id": 39,
                    "tag": null,
                    "text": "Colapso de estructuras",
                    "weight": 4,
                    "order": 4
                  }],
                  "text": "¿Las edificaciones sufrieron algún daño?",
                  "weight": 5,
                  "order": 11
                }]};
            
            var raw_questions = data.results;
            return raw_questions;
            }
    }
    return service;
}]);