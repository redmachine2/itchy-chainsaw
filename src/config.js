/**
 * Created by Jason on 10/21/2015.
 */
(function () {
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
                    template: '<h1>{{vm.title}}s are itchy</h1>',
                    url: '/Chainsaw',
                    controller: 'Chainsaw',
                    controllerAs: 'vm'
                }
            }
        ];
    };
})();