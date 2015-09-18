module app.draft {
	'use strict';
	
	angular.module('app.draft', [
		'ui.router'
	])
	.controller('DraftController', DraftController)
	.directive('rosterPortrait', function() {
		return {
			restrict: 'AE',
			templateUrl: 'app/draft/directives/roster.portrait.directive.html',
			scope: {
				hero: '=',
				vm: '='
			}
		};
	})
	.directive('teamPortrait', function() {
		return {
			restrict: 'AE',
			templateUrl: 'app/draft/directives/team.portrait.directive.html',
			scope: {
				hero: '=',
				vm: '='
			}
		};
	});
}