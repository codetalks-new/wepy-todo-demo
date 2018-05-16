import wepy from "wepy";
import Todo from "../models/todo";

export default class Index extends wepy.page {
  public config = {
    navigationBarTitleText: "待办事项",
  };
  public data = {
    todos: [{ content: "学习 TypeScript", done: false }],
    newTodoContent: "",
    newTodoError: "",
  };

  public onLoad() {
    console.log("onLoad");
  }

  public onEditTodoContent(e) {
    this.newTodoError = "";
    this.newTodoContent = e.detail.value;
  }

  public onNewTodoFormSubmit(e) {
    const content = this.newTodoContent.trim();
    if (content.length < 1) {
      this.newTodoError = "待办事项内容不能为空";
      return;
    }
    this.addNewTodo(content);
  }

  public addNewTodo(content: string) {
    //  如果采用 new Todo(content) ,则不会有响应。
    const todo: Todo =  {content, done: false};
    this.todos.push(todo);
    this.newTodoContent = "";
  }

  public onNewTodo(e) {
    this.addNewTodo(e.detail.value);
  }

  public markTodo(event) {
    const index = event.currentTarget.dataset.index;
    this.todos[index].done = false;
  }

  public markDone(event) {
    console.log("current event: ", event);
    const index = event.currentTarget.dataset.index;
    console.log("current index :", index);
    this.todos[index].done = true;
    console.log("current todo done?:", this.todos[index].done);
  }

}
