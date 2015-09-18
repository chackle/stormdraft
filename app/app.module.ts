/// <reference path="../tools/typings/tsd.d.ts" />
/// <reference path="../tools/typings/app.d.ts" />

module app {
  'use strict';

  angular.module('app', [
    'app.draft',
    'app.changelog',
    'app.about',
    'ui.router',
    'ngDragDrop'
  ]);
}