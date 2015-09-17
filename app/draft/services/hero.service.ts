module app.draft {
	
	export class HeroService {
    static $inject: Array<string> = ['$http', '$q'];
		
		constructor(private $http: any, private $q: any) {
			// Construct
		}
		
		getAllHeroes(): any {
			var d = this.$q.defer();

      this.$http.get('http://robert-docherty.com/fknabout/json.json')
            .success(response => d.resolve(response))
            .error(err => d.reject(err));

			return d.promise;
		}
	}
	
	angular
	.module('app.draft')
	.service('HeroService', HeroService);
}