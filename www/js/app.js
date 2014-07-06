// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      StatusBar.show();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.d6', {
      url: "/d6",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D6'
        }
      }
    })
    .state('app.d7', {
      url: "/d7",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D7'
        }
      }
    })
    .state('app.d8', {
      url: "/d8",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D8'
        }
      }
    })
    .state('app.d9', {
      url: "/d9",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D9'
        }
      }
    })
    .state('app.d10', {
      url: "/d10",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D10'
        }
      }
    })
    .state('app.d11', {
      url: "/d11",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D11'
        }
      }
    })
    .state('app.d12', {
      url: "/d12",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D12'
        }
      }
    })
    .state('app.d13', {
      url: "/d13",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D13'
        }
      }
    })
    .state('app.d14', {
      url: "/d14",
      views: {
        'menuContent' :{
          templateUrl: "templates/days.html",
          controller: 'D14'
        }
      }
    })

    .state('app.reach', {
      url: "/reach",
      views: {
        'menuContent' :{
          templateUrl: "templates/reach.html"
        }
      }
    })

    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html"
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/d6');
});

