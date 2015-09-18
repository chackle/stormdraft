module app.draft {
	
	export class Team {
		
		heroes: Array<Hero>;
		
		constructor() {
			this.heroes = new Array<Hero>();
		}
		
		addHero(hero: Hero) {
			if (this.heroes.length < 5) {
			this.heroes.push(hero);
			}
		}
		
		removeHero(hero: Hero) {
			for (var i = 0; i < this.heroes.length; i++) {
				var teamHero = this.heroes[i];
				if (teamHero.name === hero.name) {
					this.heroes.splice(i, 1);
					return;
				}
			}
		}
	}
}