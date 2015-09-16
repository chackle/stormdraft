module app.about {
	
	export class AboutController {
		static $inject: Array<string> = ['$state', '$rootScope'];
		
		constructor(private $state: any, private $rootScope: any) {
			//Construct
		}
	}
}