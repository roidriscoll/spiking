toDoApp.controller('toDoController', function() {

  var vm = this;

  vm.toDos = [
    {task: 'ToDo1', completed: false},
    {task: 'ToDo2', completed: false},
    {task: 'ToDo3', completed: true}
  ];

  vm.addToDo = function(taskName) {
    vm.toDos.push({ task: taskName, completed: false });
  };
});
