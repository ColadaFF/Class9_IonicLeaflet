/**
 * Created by Barcoder on 06/06/2015.
 */
(function(){
    "use strict";
    angular.module('class9').factory('InstructionsService', function(){
        var instructionsObj = {};

        instructionsObj.instructions = {
            newLocations : {
                text : 'Para agregar una nueva ubicaci\xf3n, manten sostenido un punto en el mapa.',
                seen : false
            }
        };

        return instructionsObj;
    });
}());