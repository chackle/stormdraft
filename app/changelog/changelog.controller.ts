module app.changelog {
	
	export class ChangelogController {
		static $inject: Array<string> = ['$state', '$rootScope'];
		
		constructor(private $state: any, private $rootScope: any) {
			//Construct
		}
	}
}