import { Component } from 'react';

interface props{

}

interface Istate {
    todoList: string[],
    inputval: string,
    completed: number
}

export default class TodoList extends Component<props, Istate> {
    constructor(props: any){
        super(props);
        this.state = {
            todoList: [],
            inputval: "",
            completed: 0
        }
    }

    handleClick = (e: any, ) => {
        e.preventDefault()
        let arr = this.state.todoList;
        if(this.state.inputval !== ""){
            arr.push(this.state.inputval);
            let count = this.state.completed + 1;
            this.setState({completed: count,inputval: "", todoList: arr});
        }
        
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        this.setState({...this.state, inputval: e.target.value});
    }

    strike = (value: string) =>{
        let element = document.getElementById(value);
        if(element?.classList.contains("is-done")){
            let count = this.state.completed + 1;
            element?.classList.toggle("is-done");
            this.setState({...this.state, completed: count})
        }else{
            let count = this.state.completed - 1;
            element?.classList.toggle("is-done");
            this.setState({...this.state, completed: count});
        }
        
    }
    
    render() {
        return (
            <>
                <div>
                    <h2>
                        Todo List
                    </h2>
                    <div className="container">
                        <input className="txt" type="text" value={this.state.inputval} onChange={this.handleChange} />
                        &nbsp;&nbsp;&nbsp;
                        <button className="btn" onClick={this.handleClick} type="button">Add</button>
                    </div>
                    <p>{`${this.state.completed} remaining out of ${this.state.todoList.length} tasks`}</p>
                    <ul>
                        {this.state.todoList.map((item: string, index: number) => (
                            <a href="/TodoList" key={index} onClick={() => this.strike(item)}>
                                <li id={item}>
                                {item}
                                </li>
                            </a>
                        ))}        
                    </ul>
                    
                </div>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                    .btn{
                        border: 1px solid #000
                    }
                    .txt {
                        border: 1px solid #000
                    }
                    .container{
                        display: flex
                    }
                `}</style>
            </>
        );
    }
}
