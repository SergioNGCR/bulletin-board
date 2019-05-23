import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import ReactLoading from 'react-loading';
import Note from './Note';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            showLoading: true
        }
        this.eachNote = this.eachNote.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
        
        // Initial request to fetch messages.
        this.fetchMessageFromAPI();
    }

    // Add a new Note.
    add(text) {
        this.setState(prevState => ({
            notes: [
                ...prevState.notes, 
                { 
                    id: this.nextId(),
                    note: text 
                }
            ]
        }));
    }

    // Helper function to keep track of the ID used for Note creation.
    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    // Update the state when a Note was edited.
    update(newText, i) {
        console.log('updating item at index', i, newText);
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
            )
        }));
    }

    // Update the state when a Note was deleted.
    remove(id) {
        console.log('removing item at', id);
        this.setState(prevState => ({
            notes: prevState.notes.filter( note => note.id !== id )
        }));
    }

    // Method to generate all the Notes that will be displayed on the board.
    eachNote(note) {
        //console.log(note.note, "has an id of", note.id);
        return (
            <Note key={note.id} index={note.id} 
                onChange={this.update}
                onRemove={this.remove}>
                {note.note}
            </Note>
        );
    }

    // This method will call an API to fetch some message to use as default Notes.
    // Initially created using componentWillMount but found out it's considered legacy.
    // Only called by the constructor method of the class as it is an initialization method.
    fetchMessageFromAPI() {
        console.log('The Board will mount');
        const self = this;
        //console.log(self);
        if(this.props.count) {
            fetch(`https://baconipsum.com/api/?type=meat-and=filler&sentences=${this.props.count}`)
                .then(response => response.json())
                .then(json => {
                    console.log('Finished pulling fetch data, now adding to state');
                    json[0].split('. ')
                            .forEach(sentence => self.add(sentence.substring(0, 25)));
                    this.setState({ showLoading: false });
                });
        }
    }
  
    componentDidMount() {
        console.log('The Board has just mounted');
    }
  
    componentWillUnmount() {
        console.log('The Board will unmount');
    }

    render() {
        return (
            <div className="board" >
                {this.state.notes.map(this.eachNote)}
                <button onClick={this.add.bind(null, "New Note")} id="add">
                    <FaPlus size={25}/>
                </button>
                { this.state.showLoading ? <ReactLoading id="loadingComp" type="spin" color="#1a6fb9" height={100} width={100}/> : null }
            </div>
        );
    }
}

export default Board;