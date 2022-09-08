import { Component } from "react";
import imageThree from './starfish.jpg';
import imageTwo from './fish.jpg';

export class ToDoList extends Component {
    state= {
        userInput: "",
        toDoList: []
    }

    onChangeEvent(e) {
        // console.log(e.target.value);
        this.setState({userInput: e});
    }

    addItem(input) {
        if (input === "") {
            alert("Please enter an item")
        }

        else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            //console.log(listArray)

            this.setState({toDoList: listArray, 
                userInput: ''})
        }
    }

    deletItem() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray})
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit= {this.onFormSubmit}>
                    <div className="container">
                        <input type="text" placeholder="What are your plans for today?" onChange= {(e) => {this.onChangeEvent(e.target.value)}} value= {this.state.userInputs} />
                    </div>
                    <div className="container">
                        <button onClick= {() => 
                        this.addItem(this.state.userInput)}
                        className="add">ADD</button>
                    </div>
                    <ul>
                        {this.state.toDoList.map((item, index) => (
                            <li onClick= {this.crossedWord}
                            key={index}>
                                <img className="done" src={imageThree} width="40px" alt="starfish" />
                                {item}
                            </li>
                        ))}
                    </ul> 
                    <div className="container">
                        <button onClick = {() => 
                            this.deletItem()}
                            className="delete">DELETE
                            <img className="fish" src={imageTwo} width="200px" alt="skat" />
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}