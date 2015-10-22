/**
 * Created by Jason on 10/21/2015.
 */
(function (currentScriptPath) {
	'use strict';
	angular
		.module('itchy')
		.run(runModule);

	runModule.$inject = ['routerHelper'];

	/* @ngInject */
	function runModule (routerHelper) {
		routerHelper.configureStates(getStates());
	}

	function getStates(){
		return [
			{
				state: 'Chainsaw',
				config: {
					templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) + 'Chainsaw.html',
					url: '/Chainsaw',
					controller: 'Chainsaw',
					controllerAs: 'vm'
				}
			}
		];
	};
})(
	(function(){
		var scripts = document.getElementsByTagName("script")
		var currentScriptPath = scripts[scripts.length-1].src;
		return currentScriptPath;
	})()
);