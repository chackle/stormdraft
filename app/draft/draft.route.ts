(function() {
  'use strict';

  angular.module('app.draft')
  .config(function($stateProvider: any, $urlRouterProvider: any) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('draft', {
      url:'/',
      templateUrl:'app/draft/draft.html',
      controller:'DraftController',
      controllerAs:'vm',
      resolve: {
        $title: function() { return 'Draft'; }
      }
    });
  });
})();
