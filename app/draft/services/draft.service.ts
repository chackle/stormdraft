module app.draft {
	
	export class DraftService {
		
		blueTeam: Team;
		redTeam: Team;
		roster: Array<Hero>;
		
		constructor() {
			this.blueTeam = new Team();
			this.redTeam = new Team();
			this.roster = new Array<Hero>();
		}
		
		clearTeams() {
			this.blueTeam = new Team();
			this.redTeam = new Team();
		}
		
		isHeroPicked(hero: Hero): boolean {
			for (var i = 0; i < this.blueTeam.heroes.length; i++) {
				var blueHero = this.blueTeam.heroes[i];
				if (blueHero.name === hero.name) {
					return true;
				}
			}
			for (var x = 0; x < this.redTeam.heroes.length; x++) {
				var redHero = this.redTeam.heroes[x];
				if (redHero.name === hero.name) {
					return true;
				}
			}
			return false;
		}
		
		unselectHero(hero: Hero) {
			this.blueTeam.removeHero(hero);
			this.redTeam.removeHero(hero);
		}
		
		recommendHeroes(): Array<HeroStatistic> {
			var heroWithRatesMap = {};
			for (var i = 0; i < this.blueTeam.heroes.length; i++) {
				var blueHeroStatistics = this.blueTeam.heroes[i].withStatistics;
				for (var y = 0; y < blueHeroStatistics.length; y++) {
					var blueHeroStatistic = blueHeroStatistics[y];
					if (heroWithRatesMap[blueHeroStatistic.name] == null) {
						heroWithRatesMap[blueHeroStatistic.name] = blueHeroStatistic.winRate;
					} else {
						heroWithRatesMap[blueHeroStatistic.name] += blueHeroStatistic.winRate;
					}
				}
			}
			
			console.log(heroWithRatesMap);
			
			var bestWithHeroes = Array<HeroStatistic>();
			for (var property in heroWithRatesMap) {
				if (heroWithRatesMap.hasOwnProperty(property)) {
					var firstHero = bestWithHeroes[0];
					var newHero = new HeroStatistic(property, heroWithRatesMap[property]);
					if (bestWithHeroes.length === 0) {
						bestWithHeroes.push(newHero);
					} else {
						if (newHero.winRate > firstHero.winRate) {
							while (bestWithHeroes.length > 0) {
								bestWithHeroes.pop();
							}
							bestWithHeroes.push(newHero);
						} else if (newHero.winRate === firstHero.winRate) {
							bestWithHeroes.push(newHero);
						}
					}
				}
			}
			
			if (bestWithHeroes.length > 0) {
				for (var i = 0; i < bestWithHeroes.length; i++) {
					var hero = bestWithHeroes[i];
					var averageWithWinPercent = heroWithRatesMap[hero.name] / this.blueTeam.heroes.length-1;
					console.log("(" + hero.name + ") Average Win Percent: " + averageWithWinPercent);
				}
				return bestWithHeroes;
			}
		}
	}
	
	angular
	.module('app.draft')
	.service('DraftService', DraftService);
}