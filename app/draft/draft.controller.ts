module app.draft {
	
	export class DraftController {
		static $inject: Array<string> = ['$state', '$rootScope', '$q', 'HeroService', 'DraftService'];
		
		constructor(private $state: any, private $rootScope: any, private $q: any, private heroService: HeroService, private draftService: DraftService) {
			this.getAllHeroes();
		}
		
		getAllHeroes() {
			this.heroService.getAllHeroes()
			.then(
				(result: Array<Hero>) => {
					this.draftService.roster = result;
				},
				(error: any) => {
					console.log("error: " + JSON.stringify(error));
				}
			);
		}
		
		addHeroToBlueTeam(hero: Hero) {
			this.draftService.blueTeam.addHero(hero);
			console.log(this.draftService.recommendHeroes());
		}
		
		addHeroToRedTeam(hero: Hero) {
			this.draftService.redTeam.addHero(hero);
			console.log(this.draftService.recommendHeroes());
		}
		
		unselectHero(hero: Hero) {
			this.draftService.unselectHero(hero);
			console.log(this.draftService.recommendHeroes());
		}
		
		heroIsPicked(hero: Hero): boolean {
			return this.draftService.isHeroPicked(hero);
		}
	}
}