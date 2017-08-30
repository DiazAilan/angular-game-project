"use strict";
(() => {
	angular.module("gameApp", [])

	.controller("mainCtrl", mainCtrl)

	mainCtrl.$inject = ['$scope', 'monsterBook'];

	function mainCtrl($scope, monsterBook) {

		$scope.monsterBook = monsterBook;

		$scope.monsterSelectorMain = "plant";
		$scope.monsterSelectorSub = "plant";

		$scope.fuseSignatureSkill = (mainSkill, subSkill) => {

			function generateSignatureName(main, sub) {
				main = main.split(" ")[0];
				sub = sub.split(" ")[1];
				return main + " " + sub;
			}

			function generateSpecialProperty(main, sub) {
				if (main === sub) {
					return main
				} else if(main) {
					return 'lesser ' + main
				} else if(sub) {
					return 'minor ' + sub
				} else {
					return ''
				}
			}

			const skill = {
				name: generateSignatureName(mainSkill.name, subSkill.name),
				type: mainSkill.type,
				cost: Math.round((mainSkill.cost*3 + subSkill.cost*2) / 5),
				dmg: Math.round((mainSkill.dmg*3 + subSkill.dmg*2)) / 5,
				hit: Math.round((mainSkill.hit*3 + subSkill.hit*2)) / 5,
				wit: Math.round((mainSkill.wit*3 + subSkill.wit*2)) / 5,
				crt: Math.round((mainSkill.crt*3 + subSkill.crt*2)) / 5,
				special: generateSpecialProperty(mainSkill.special, subSkill.special)
			}

			return skill;
		}

		$scope.generateMonster = () => {
			const main = monsterBook[$scope.monsterSelectorMain];
			const sub = monsterBook[$scope.monsterSelectorSub]
			const monster = {
				name: `${main.name} // ${sub.name}`,
				life: (main.life*3 + sub.life*2) / 5,
				pow: (main.pow*3 + sub.pow*2) / 5,
				int: (main.int*3 + sub.int*2) / 5,
				ski: (main.ski*3 + sub.ski*2) / 5,
				spe: (main.spe*3 + sub.spe*2) / 5,
				def: (main.def*3 + sub.def*2) / 5,
				skills: [
					main.skills[0],
					main.skills[1],
					main.skills[2],
					main.skills[3],
					$scope.fuseSignatureSkill(main.skills[4], sub.skills[4])
				]
			}

			$scope.monster = monster;
			return monster;
		}

		$scope.generateMonster();

	}

})();