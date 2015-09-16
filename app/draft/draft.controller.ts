module app.draft {
	
	export class DraftController {
		static $inject: Array<string> = ['$state', '$rootScope'];
		
		draftService: DraftService;
		draftManager: DraftManager;
		
		constructor(private $state: any, private $rootScope: any) {
			this.draftService = new DraftService();
			this.draftManager = new DraftManager();
			this.test();
		}
		
		test() {
			this.draftManager.buildDummyTeams();
			var recommendedCharacter = this.draftService.recommendHero(this.draftManager.blueTeam, this.draftManager.redTeam);
			this.draftManager.blueTeam.removeCharacter(recommendedCharacter);
		}
	}
}