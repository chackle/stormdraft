module app.draft {
	
	export class DraftController {
		static $inject: Array<string> = ['$state', '$rootScope', 'HeroService'];
		
		draftService: DraftService;
		draftManager: DraftManager;
		
		constructor(private $state: any, private $rootScope: any, private heroService: HeroService) {
			this.draftService = new DraftService();
			this.draftManager = new DraftManager();
			this.test();
		}
		
		test() {
			this.draftManager.buildDummyTeams();
			var recommendedHero = this.draftService.recommendHero(this.draftManager.blueTeam, this.draftManager.redTeam);
			this.draftManager.blueTeam.removeHero(recommendedHero);
			
			// Testing service
			this.heroService.getAllHeroes()
			.then(
				(result: Array<any>) => {
					console.log(result);
				},
				(error: any) => {
					console.log("error: " + JSON.stringify(error));
				}
			);
		}
	}
}