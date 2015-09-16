module app.draft {
	
	export class DraftService {
		
		constructor() {
			// Construct
		}
		
		recommendHero(blueTeam: Team, redTeam: Team): Character {
			// recommend a hero
			return new Character(CharacterName.Abathur, Role.Specialist);
		}
	}
}