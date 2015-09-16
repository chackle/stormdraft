module app.draft {
	
	export class Team {
		
		characters: Array<Character>;
		
		constructor() {
			this.characters = new Array<Character>();
		}
		
		addCharacter(character: Character) {
			this.characters.push(character);
		}
		
		removeCharacter(character: Character) {
			var index = this.characters.indexOf(character, 0);
			if (index !== undefined) {
				console.log("Removing '" + character.name + "'.");
   			this.characters.splice(index, 1);
				 console.log("Removed character. New Roster: " + JSON.stringify(this.characters));
			} else {
				console.log("Character not found. Cannot remove!");
			}
		}
	}
}