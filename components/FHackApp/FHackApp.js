import React, { Component } from 'react';

import WordList from '../WordList'
import NewWordForm from '../NewWordForm';
import ResetConstraintsButton from '../ResetConstraintsButton';


class FHackApp extends Component {
  render(){
    return(
      <div className="FHackApp">
        <h1>Solver</h1>
        <NewWordForm />
        <WordList />
        <ResetConstraintsButton />
      </div>
    );
  }
}

export default FHackApp;
