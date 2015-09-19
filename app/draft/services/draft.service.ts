module app.draft {
	
	export class DraftService {
		
		blueTeam: Team;
		redTeam: Team;
		roster: Array<Hero>;
		recommendedHeroes: Array<HeroStatistic>;
		
		constructor() {
			this.blueTeam = new Team();
			this.redTeam = new Team();
			this.roster = new Array<Hero>();
			this.recommendedHeroes = new Array<HeroStatistic>();
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
			if (this.blueTeam.heroes.length === 5 || 
					(this.blueTeam.heroes.length === 0 && 
					 this.redTeam.heroes.length === 0)) {
				while (this.recommendedHeroes.length > 0) {
					this.recommendedHeroes.pop();
				}
				return;
			}
			var heroRatesMap = {};
			
			// Appending 'with' rates to map
			for (var i = 0; i < this.blueTeam.heroes.length; i++) {
				var blueHeroStatistics = this.blueTeam.heroes[i].withStatistics;
				for (var y = 0; y < blueHeroStatistics.length; y++) {
					var blueHeroStatistic = blueHeroStatistics[y];
					if (heroRatesMap[blueHeroStatistic.name] == null) {
						heroRatesMap[blueHeroStatistic.name] = blueHeroStatistic.winRate;
					} else {
						heroRatesMap[blueHeroStatistic.name] += blueHeroStatistic.winRate;
					}
				}
			}
			
			// Appending 'against' rates to map
			for (var i = 0; i < this.redTeam.heroes.length; i++) {
				var redHeroStatistics = this.redTeam.heroes[i].againstStatistics;
				for (var y = 0; y < redHeroStatistics.length; y++) {
					var redHeroStatistic = redHeroStatistics[y];
					if (heroRatesMap[redHeroStatistic.name] == null) {
						heroRatesMap[redHeroStatistic.name] = redHeroStatistic.winRate;
					} else {
						heroRatesMap[redHeroStatistic.name] += redHeroStatistic.winRate;
					}
				}
			}
			
			console.log(heroRatesMap);
			
			var bestHeroes = Array<HeroStatistic>();
			for (var property in heroRatesMap) {
				if (heroRatesMap.hasOwnProperty(property)) {
					var firstHero = bestHeroes[0];
					var newHero = new HeroStatistic(property, heroRatesMap[property]);
					if (bestHeroes.length === 0) {
						bestHeroes.push(newHero);
					} else {
						if (newHero.winRate > firstHero.winRate) {
							while (bestHeroes.length > 0) {
								bestHeroes.pop();
							}
							bestHeroes.push(newHero);
						} else if (newHero.winRate === firstHero.winRate) {
							bestHeroes.push(newHero);
						}
					}
				}
			}
			
			var recommendedHeroes = new Array<HeroStatistic>();
			if (bestHeroes.length > 0) {
				for (var i = 0; i < bestHeroes.length; i++) {
					var hero = bestHeroes[i];
					var divideAmount = this.blueTeam.heroes.length + this.redTeam.heroes.length;
					var averageWithWinPercent = heroRatesMap[hero.name] / divideAmount;
					console.log("(" + hero.name + ") Average Win Percent: " + averageWithWinPercent);
					recommendedHeroes.push(new HeroStatistic(hero.name, +averageWithWinPercent.toFixed(2)));
				}
				this.recommendedHeroes = recommendedHeroes;
			}
		}
	}
	
	angular
	.module('app.draft')
	.service('DraftService', DraftService);
}