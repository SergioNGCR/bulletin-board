import React, { Component } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

class Note extends Component {
    constructor (props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
    }

    edit() {
        alert('editing note');
    };

    remove() {
        alert('removing note');
    };

    render() {
        return (
            <div className="note">
                <p>Learn React</p>
                <span>
                    <button id="edit" onClick={this.edit} ><FaEdit /></button>
                    <button id="remove" onClick={this.remove} ><FaTrash /></button>
                </span>
            </div>
        );
    };
};

export default Note;