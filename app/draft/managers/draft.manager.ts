module app.draft {
	
	export class DraftManager {
		
		blueTeam: Team;
		redTeam: Team;
		
		constructor() {
			this.blueTeam = new Team();
			this.redTeam = new Team();
		}
		
		clearTeams() {
			this.blueTeam = new Team();
			this.redTeam = new Team();
		}
		
		buildDummyTeams() {
			this.blueTeam.addHero(new Hero("abathur"));
			console.log("Blue Team: " + JSON.stringify(this.blueTeam));
		}
	}
}