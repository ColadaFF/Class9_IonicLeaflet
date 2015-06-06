/**
 * Created by Barcoder on 06/06/2015.
 */
(function (){
    "use strict";
    angular.module('class9').factory('LocationsService', [ function() {

        var locationsObj = {};

        locationsObj.savedLocations = [
            {
                name : "Washington D.C., USA",
                lat : 38.8951100,
                lng : -77.0363700
            },
            {
                name : "London, England",
                lat : 51.500152,
                lng : -0.126236
            },
            {
                name : "Paris, France",
                lat : 48.864716,
                lng : 2.349014
            },
            {
                name : "Moscow, Russia",
                lat : 55.752121,
                lng : 37.617664
            },
            {
                name : "Rio de Janeiro, Brazil",
                lat : -22.970722,
                lng : -43.182365
            },
            {
                name : "Sydney, Australia",
                lat : -33.865143,
                lng : 151.209900
            }

        ];

        return locationsObj;

    }]);
}());