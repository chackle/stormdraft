module app.draft {
	
	export class HeroManager {
		allHeroes: Array<Hero>;
		
		constructor(private heroService: HeroService, private $q) {
			this.allHeroes = new Array<Hero>();
		}
		
		getAllHeroes(): any {
			var d = this.$q.defer();
			this.heroService.getAllHeroes()
			.then(
				(result: Array<any>) => {
					console.log(result);
					for (var i = 0; i < result.length; i++) {
						var heroData = result[i];
						var hero = new Hero(heroData.name);
						for (var x = 0; x < heroData.whenOnEnemyTeam.length; x++) {
							var againstData = heroData.whenOnEnemyTeam[x];
							var againstStatistic = new HeroStatistic(againstData.name, againstData.winPercent);
							hero.againstStatistics.push(againstStatistic);
						}
						for (var y = 0; y < heroData.whenOnYourTeam.length; y++) {
							var withData = heroData.whenOnYourTeam[y];
							var withStatistic = new HeroStatistic(withData.name, withData.winPercent);
							hero.withStatistics.push(withStatistic);
						}
						this.allHeroes.push(hero);
					}
					d.resolve(this.allHeroes);
				},
				(error: any) => {
					d.reject(error);
					console.log("error: " + JSON.stringify(error));
				}
			);
			return d.promise;
		}
	}
}