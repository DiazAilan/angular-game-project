angular.module("gameApp")

.component('monsterCard', {
	templateUrl: 'monster-card/monster-card.html',
	bindings: {
		monster: '<'
	}
});