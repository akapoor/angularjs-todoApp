'use strict';

(function () {
	angular.module('todoApp')
		.factory('todos', function (localStorageService) {

			return {
				getTodos: getTodos,
				getTodo: getTodo,
				addTodo: addTodo,
				editTodo: editTodo
			};

			function getTodos () {
				return localStorageService.get('todos') || [];
			}

			function getTodo (id) {
				var todos = getTodos();
				for (var i = 0; i < todos.length; ++i) {
					if (todos[i].id === id) {
						return todos[i];
					}
				}

				return null;
			}

			function addTodo (todo) {
				var todos = getTodos();
				todos.push(todo);
				localStorageService.set('todos', todos);
			}

			function editTodo (todo) {
				var todos = getTodos();
				var todoIndex = -1;
				for (var i = 0; i < todos.length; ++i) {
					if (todos[i].id === id) {
						todoIndex = i;
						break;
					}
				}

				if (todoIndex === -1) {
					throw new Error('Can\'t find specified todo');
				}

				todos.splice(todoIndex, 1, todo);
				localStorageService.set('todos', todos);
			}
		});

})();