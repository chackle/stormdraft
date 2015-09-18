module app.draft {
	
	export class Hero {
		
		withStatistics: Array<HeroStatistic>;
		againstStatistics: Array<HeroStatistic>;
		
		constructor(public name: string) {
			// Construct
			this.withStatistics = new Array<HeroStatistic>();
			this.againstStatistics = new Array<HeroStatistic>();
		}
	}
}