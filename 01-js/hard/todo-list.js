/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(){
      this.todoL=[]
    }
    add(todo){
      this.todoL.push(todo);
    }
    remove(indexoftodo){
      if(indexoftodo>this.todoL.length){
        return;
      }
      this.todoL.splice(indexoftodo,1);   //remove 1 elements from index indexoftodo
    }
    update(index,updatedTodo){
      if(index+1>this.todoL.length){
        return;
      }
      this.todoL[index]=updatedTodo;
    }
    getAll(){
      return this.todoL
    }
    get(indexOfTodo){
      if(indexOfTodo+1>this.todoL.length){
        return null;
      }
      return this.todoL[indexOfTodo];
    }
    clear(){
      this.todoL=[]
    }
}
todoList = new Todo();
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');

todoList.update(1, 'Updated Task 2');
todoList.update(3, 'Invalid Task');
console.log(todoList.getAll())
todoList.clear()
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');
console.log(todoList.get(0));
console.log(todoList.get(4));

todoList.clear()
todoList.add('Task 1');
todoList.add('Task 2');
todoList.remove(5);
console.log(todoList.getAll())
module.exports = Todo;
