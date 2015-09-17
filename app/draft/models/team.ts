module app.draft {
	
	export class Team {
		
		heroes: Array<Hero>;
		
		constructor() {
			this.heroes = new Array<Hero>();
		}
		
		addHero(hero: Hero) {
			this.heroes.push(hero);
		}
		
		removeHero(hero: Hero) {
			var index = this.heroes.indexOf(hero, 0);
			if (index !== undefined) {
				console.log("Removing '" + hero.name + "'.");
   			this.heroes.splice(index, 1);
				 console.log("Removed hero. New Roster: " + JSON.stringify(this.heroes));
			} else {
				console.log("Character not found. Cannot remove!");
			}
		}
	}
}