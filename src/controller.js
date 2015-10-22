/**
 * Created by Jason on 10/21/2015.
 */
(function () {
    'use strict';

    angular
        .module('itchy')
        .controller('Chainsaw', Chainsaw);

    Chainsaw.$inject = [];

    /* @ngInject */
    function Chainsaw() {
        var vm = this;
        vm.title = 'Chainsaw';

        activate();

        ////////////////

        function activate() {
            console.log('activated')
        }
    }

})();

