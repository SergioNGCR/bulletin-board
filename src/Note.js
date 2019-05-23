import React, { Component } from 'react';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.randomBetween = this.randomBetween.bind(this);
        
        // Initial creation of the dynamic styling values for the note;
        this.generateDynamicStyle();
    }

    // Simple helper function used for the dynamic styling of the Component.
    randomBetween(x, y, s) {
        return x + Math.ceil(Math.random() * (y-x)) + s;
    }

    edit() {
        //alert('editing note');
        this.setState({
            editing: true
        });
    }

    remove() {
        //alert('removing note');
        this.props.onRemove(this.props.index);
    }

    save(e) {
        //alert(this._newText.value);
        e.preventDefault();
        this.props.onChange(this._newText.value, this.props.index);
        this.setState({
            editing: false
        });
    }

    // This method will create a dynamic styling set of values so it looks like notes are randomly placed in the board.
    // Initially created using componentWillMount but found out it's considered legacy.
    // Only called by the constructor method of the class as it is an initialization method.
    generateDynamicStyle() {
        //console.log(`The Note ${this.props.children} will mount`);
        this.style = {
            right: this.randomBetween(20, window.innerWidth - 170, 'px'),
            top: this.randomBetween(20, window.innerHeight - 170, 'px'),
            transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`
        };
    }
  
    componentDidMount() {
        //console.log(`The Note ${this.props.children} has just mounted`);
    }
  
    // The idea is to capture when the re-render to Form happends to highlight the text inside the textarea element.
    componentDidUpdate() {
        //console.log(`The Note ${this.props.children} has been updated`);
        let textArea;
        if(this.state.editing){
            textArea = this._newText;
            textArea.focus();
            textArea.select();
        }
    }
  
    componentWillUnmount() {
        //console.log(`The Note ${this.props.children} will unmount`);
    }

    // This will prevent update (re-render) if the actual content or note message didn't change.
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.children !== nextProps.children || this.state !== nextState
    }

    // How the Component will look when the user wants to edit it.
    renderForm() {
        return (
            <div className="note" style={this.style}>
                <form onSubmit={this.save}>
                    <textarea ref={ input => this._newText = input } 
                    defaultValue={this.props.children} />
                    <button id="save"><FaSave /></button>
                </form>
            </div>
        );
    }

    // Default look for the Component, no editing happening.
    renderDisplay() {
        return (
            <div className="note" style={this.style}>
                <p>{this.props.children}</p>
                <span>
                    <button id="edit" onClick={this.edit} ><FaEdit /></button>
                    <button id="remove" onClick={this.remove} ><FaTrash /></button>
                </span>
            </div>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

export default Note;