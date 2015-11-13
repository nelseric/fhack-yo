import React, { Component } from 'react';
import Actions from '../../lib/Actions';
import WordStore from '../../lib/WordStore';

class NewWordForm extends Component {

  render(){
    return(
      <form>
        <input type="text" />
        <button type="submit">Add Word</button>
      </form>
    );
  }
}

export default NewWordForm;
