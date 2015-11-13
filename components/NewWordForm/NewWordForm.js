import React, { Component } from 'react';
import Actions from '../../lib/Actions';
import WordStore from '../../lib/WordStore';

class NewWordForm extends Component {
  constructor(){
    super();
    this.state = {newWord: ""};
    this._handleNewWordChange = this._handleNewWordChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(evt){
    evt.preventDefault();
    Actions.addWord(this.state.newWord);
    this.setState({newWord: ""});
  }

  _handleNewWordChange(evt){
    this.setState({newWord: evt.target.value});
  }

  render(){
    return(
      <form onSubmit={this._handleFormSubmit}>
        <input value={this.state.newWord} onChange={this._handleNewWordChange} />
        <button type="submit">Add Word</button>
      </form>
    );
  }
}

export default NewWordForm;
