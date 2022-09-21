class Todo {
    id: string
    text:string
    constructor(TodoText: string){
        this.text = TodoText
        this.id = new Date().toISOString()
    };

}
export default Todo