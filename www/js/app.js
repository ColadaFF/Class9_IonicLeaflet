(function () {
    "use strict";
    angular.module('class9', ['ionic', 'leaflet-directive', 'ngCordova', 'igTruncate'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('app', {
                    url: "/app",
                    abstract: true,
                    templateUrl: "templates/menu.html",
                    controller: 'MapController'
                })

                .state('app.map', {
                    url: "/map",
                    views: {
                        'menuContent': {
                            templateUrl: "templates/map.html"
                        }
                    }
                })

            $urlRouterProvider.otherwise('/app/map');
        });
}());