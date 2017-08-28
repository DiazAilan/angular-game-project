angular.module("gameApp")

.component('statBar', {
	templateUrl: 'monster-card/stat-bar/stat-bar.html',
	bindings: {
		stat: '<',
		type: '@'
	}
});