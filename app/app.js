"use strict";
(() => {
	angular.module("gameApp", [])

	.controller("mainCtrl", mainCtrl);
	mainCtrl.$inject = ['$scope'];

	function mainCtrl($scope) {

		const monsterBook = {
			plant: {
				name: 'plant',
				life: 5,
				pow: 1,
				int: 4,
				ski: 3,
				spe: 2,
				def: 1,
				skills: [
					{
						name: "Zap",
						dmg: 1,
						acc: 3,

					},{

					},{

					},{

					},{

					}
				]
			},
			golem: {

			},
			tiger: {

			}
		}

		$scope.monsterBook = monsterBook;
		
	}
})();