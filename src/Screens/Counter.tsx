import { Component } from 'react';

interface props{

}

interface Istate {
    counter: number
}


export default class Counter extends Component<props, Istate> {
    constructor(props: any){
        super(props);
        this.state = {
            counter: 42
        }
    };

    increment = () => {
        let newVal = this.state.counter + 1
        this.setState({counter: newVal})
    }
    
    render() {
        return (
            <>
                <div>
                    <h2 className="counter">
                        {this.state.counter}
                    </h2>
                    <button className="counter-button"
                     type="button" onClick={this.increment}>
                        Click
                    </button>
                </div>
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
            </>
        );
    }
}