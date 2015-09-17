var app;!function(t){var r;!function(t){var r=function(){function t(t,r){this.$state=t,this.$rootScope=r}return t.$inject=["$state","$rootScope"],t}();t.AboutController=r}(r=t.about||(t.about={}))}(app||(app={}));var app;!function(t){var r;!function(t){"use strict";angular.module("app.about",["ui.router"]).controller("AboutController",t.AboutController)}(r=t.about||(t.about={}))}(app||(app={})),function(){"use strict";angular.module("app.about").config(["$stateProvider","$urlRouterProvider",function(t,r){t.state("about",{url:"/about",templateUrl:"app/about/about.html",controller:"AboutController",controllerAs:"vm",resolve:{$title:function(){return"About"}}})}])}();var app;!function(t){var r;!function(t){var r=function(){function t(t,r){this.$state=t,this.$rootScope=r}return t.$inject=["$state","$rootScope"],t}();t.ChangelogController=r}(r=t.changelog||(t.changelog={}))}(app||(app={}));var app;!function(t){var r;!function(t){"use strict";angular.module("app.changelog",["ui.router"]).controller("ChangelogController",t.ChangelogController)}(r=t.changelog||(t.changelog={}))}(app||(app={})),function(){"use strict";angular.module("app.changelog").config(["$stateProvider","$urlRouterProvider",function(t,r){t.state("changelog",{url:"/changelog",templateUrl:"app/changelog/changelog.html",controller:"ChangelogController",controllerAs:"vm",resolve:{$title:function(){return"Changelog"}}})}])}();var app;!function(t){var r;!function(t){var r=function(){function r(r,e,o){this.$state=r,this.$rootScope=e,this.heroService=o,this.draftService=new t.DraftService,this.draftManager=new t.DraftManager,this.test()}return r.prototype.test=function(){this.draftManager.buildDummyTeams();var t=this.draftService.recommendHero(this.draftManager.blueTeam,this.draftManager.redTeam);this.draftManager.blueTeam.removeHero(t),this.heroService.getAllHeroes().then(function(t){console.log(t)},function(t){console.log("error: "+JSON.stringify(t))})},r.$inject=["$state","$rootScope","HeroService"],r}();t.DraftController=r}(r=t.draft||(t.draft={}))}(app||(app={}));var app;!function(t){var r;!function(t){"use strict";angular.module("app.draft",["ui.router"]).controller("DraftController",t.DraftController)}(r=t.draft||(t.draft={}))}(app||(app={})),function(){"use strict";angular.module("app.draft").config(["$stateProvider","$urlRouterProvider",function(t,r){r.otherwise("/"),t.state("draft",{url:"/",templateUrl:"app/draft/draft.html",controller:"DraftController",controllerAs:"vm",resolve:{$title:function(){return"Draft"}}})}])}();var app;!function(t){var r;!function(t){var r=function(){function t(){}return t.Abathur="Abathur",t.Anubarak="Anub'arak",t.Arthas="Arthas",t}();t.HeroName=r}(r=t.draft||(t.draft={}))}(app||(app={}));var app;!function(t){var r;!function(t){var r=function(){function t(){}return t.Warrior="Warrior",t.Assassin="Assassin",t.Specialist="Specialist",t.Support="Support",t.AllRoles=[t.Warrior,t.Assassin,t.Specialist,t.Support],t}();t.Role=r}(r=t.draft||(t.draft={}))}(app||(app={}));var app;!function(t){var r;!function(t){var r=function(){function r(){this.blueTeam=new t.Team,this.redTeam=new t.Team}return r.prototype.clearTeams=function(){this.blueTeam=new t.Team,this.redTeam=new t.Team},r.prototype.buildDummyTeams=function(){this.blueTeam.addHero(new t.Hero(t.HeroName.Abathur,t.Role.Specialist)),console.log("Blue Team: "+JSON.stringify(this.blueTeam))},r}();t.DraftManager=r}(r=t.draft||(t.draft={}))}(app||(app={}));var app;!function(t){var r;!function(t){var r=function(){function t(t,r){this.name=t,this.role=r}return t}();t.Hero=r}(r=t.draft||(t.draft={}))}(app||(app={}));var app;!function(t){var r;!function(t){var r=function(){function t(){this.heroes=new Array}return t.prototype.addHero=function(t){this.heroes.push(t)},t.prototype.removeHero=function(t){var r=this.heroes.indexOf(t,0);void 0!==r?(console.log("Removing '"+t.name+"'."),this.heroes.splice(r,1),console.log("Removed hero. New Roster: "+JSON.stringify(this.heroes))):console.log("Character not found. Cannot remove!")},t}();t.Team=r}(r=t.draft||(t.draft={}))}(app||(app={}));var app;!function(t){var r;!function(t){var r=function(){function r(){}return r.prototype.recommendHero=function(r,e){return new t.Hero(t.HeroName.Abathur,t.Role.Specialist)},r}();t.DraftService=r}(r=t.draft||(t.draft={}))}(app||(app={}));var app;!function(t){var r;!function(t){var r=function(){function t(t,r){this.$http=t,this.$q=r}return t.prototype.getAllHeroes=function(){var t=this.$q.defer();return this.$http.get("http://robert-docherty.com/fknabout/json.json").success(function(r){return t.resolve(r)}).error(function(r){return t.reject(r)}),t.promise},t.$inject=["$http","$q"],t}();t.HeroService=r,angular.module("app.draft").service("HeroService",r)}(r=t.draft||(t.draft={}))}(app||(app={}));var app;!function(t){"use strict";angular.module("app",["app.draft","app.changelog","app.about","ui.router"])}(app||(app={}));