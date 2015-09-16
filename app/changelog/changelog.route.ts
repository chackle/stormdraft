(function() {
  'use strict';

  angular.module('app.changelog')
  .config(function($stateProvider: any, $urlRouterProvider: any) {
    $stateProvider
    .state('changelog', {
      url:'/changelog',
      templateUrl:'app/changelog/changelog.html',
      controller:'ChangelogController',
      controllerAs:'vm',
      resolve: {
        $title: function() { return 'Changelog'; }
      }
    });
  });
})();
