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

    componentDidMount() {
        console.log(`The Note ${this.props.children} did mount`);
    }
  
    componentWillUnmount() {
        console.log(`The Note ${this.props.children} will unmount`);
    }

    renderForm() {
        return (
            <div className="note">
                <form onSubmit={this.save}>
                    <textarea ref={ input => this._newText = input } />
                    <button id="save"><FaSave /></button>
                </form>
            </div>
        );
    }

    renderDisplay() {
        return (
            <div className="note">
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