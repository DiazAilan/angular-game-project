"use strict";
(() => {
	angular.module("gameApp", [])

	.controller("mainCtrl", mainCtrl);
	mainCtrl.$injector = [$scope];

	function mainCtrl($scope) {
		
	}
})();