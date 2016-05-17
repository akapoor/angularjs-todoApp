'use strict';

(function () {
	angular.module('todoApp')
		.component('todoList', {
			controller: TodoListController,
			template: `
				<h2>Your Todos</h2>
				<ul>
					<li ng-repeat="todo in $ctrl.todos track by todo.id">
						<a ui-sref="todoDetails({id: todo.id})">{{todo.name}}</a>
					</li>
				</ul>
				<p ng-if="$ctrl.todos.length === 0">No todos</p>
			`
		});


	function TodoListController (todos) {

		this.$onInit = function () {
			this.todos = todos.getTodos();
		}

	}

})();