module app.draft {
	
	export class DraftController {
		static $inject: Array<string> = ['$state', '$rootScope', '$q', 'HeroService'];
		
		draftService: DraftService;
		draftManager: DraftManager;
		heroManager: HeroManager;
		
		constructor(private $state: any, private $rootScope: any, private $q: any, private heroService: HeroService) {
			this.draftService = new DraftService();
			this.draftManager = new DraftManager();
			this.heroManager = new HeroManager(heroService, $q);
			this.getAllHeroes();
			this.test();
		}
		
		getAllHeroes() {
			this.heroManager.getAllHeroes()
			.then(
				(result: Array<Hero>) => {
					console.log("Parsed Character Data: " + JSON.stringify(result));
				},
				(error: any) => {
					console.log("error: " + JSON.stringify(error));
				}
			);
		}
		
		test() {
			this.draftManager.buildDummyTeams();
			var recommendedHero = this.draftService.recommendHero(this.draftManager.blueTeam, this.draftManager.redTeam);
			this.draftManager.blueTeam.removeHero(recommendedHero);
		}
	}
}