module app.draft {
	
	export class DraftService {
		
		constructor() {
			// Construct
		}
		
		recommendHero(blueTeam: Team, redTeam: Team): Hero {
			// recommend a hero
			return new Hero(HeroName.Abathur, Role.Specialist);
		}
	}
}