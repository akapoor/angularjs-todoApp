'use strict';

(function () {
	angular.module('todoApp')
		.component('todoCreate', {
			controller: TodoCreateController,
			template: `
				<h3>Create New Todo</h3>
				<form>
					Name: <input ng-model="name">

					<br />
					<button ng-click="$ctrl.addTodo()" ng-disabled='name == ""'>Create todo</button>
					<button ng-click="$ctrl.cancel()">Cancel</button>
				</form>
			`
		});


	function TodoCreateController ($scope, $state, todos) {
		$scope.name = "";

		this.addTodo = function () {
			if($scope.name != ""){
				todos.addTodo($scope.name);
				$state.go('todos');
			}
		}

		this.cancel = function () {
			$state.go('todos');
		}

	}

})();