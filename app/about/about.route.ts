(function() {
  'use strict';

  angular.module('app.about')
  .config(function($stateProvider: any, $urlRouterProvider: any) {
    $stateProvider
    .state('about', {
      url:'/about',
      templateUrl:'app/about/about.html',
      controller:'AboutController',
      controllerAs:'vm',
      resolve: {
        $title: function() { return 'About'; }
      }
    });
  });
})();
