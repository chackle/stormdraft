module app.draft {
	
	export class HeroService {
    static $inject: Array<string> = ['$http', '$q'];
		
		constructor(private $http: any, private $q: any) {
			// Construct
		}
		
		getAllHeroes(): any {
			var d = this.$q.defer();

      this.$http.get('http://robert-docherty.com/fknabout/json.json')
      .then(
				(result: any) => {
					var heroes = new Array<Hero>();
					for (var i = 0; i < result.data.length; i++) {
						var heroData = result.data[i];
						var hero = new Hero(heroData.name);
						for (var x = 0; x < heroData.whenOnEnemyTeam.length; x++) {
							var againstData = heroData.whenOnEnemyTeam[x];
							var againstStatistic = new HeroStatistic(againstData.name, +againstData.winPercent);
							hero.againstStatistics.push(againstStatistic);
						}
						for (var y = 0; y < heroData.whenOnYourTeam.length; y++) {
							var withData = heroData.whenOnYourTeam[y];
							var withStatistic = new HeroStatistic(withData.name, +withData.winPercent);
							hero.withStatistics.push(withStatistic);
						}
						// TODO: Remove this once data is fixed on server side
						if (hero.name !== "the") {
						heroes.push(hero);
						}
					}
					d.resolve(heroes);
				},
				(error: any) => {
					d.reject(error);
				}
			);
			
			return d.promise;
		}
	}
	
	angular
	.module('app.draft')
	.service('HeroService', HeroService);
}