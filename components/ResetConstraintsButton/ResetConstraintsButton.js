import React, { Component } from 'react';
import Actions from '../../lib/Actions';

class ResetConstraintsButton extends Component {
  _handleClickReset(){
    Actions.resetConstraints();
  }
  _handleClickClear(){
    Actions.clearWords();
  }

  render(){
    return(
      <div>
        <button onClick={this._handleClickReset}>Reset Guesses</button>
        <button onClick={this._handleClickClear}>Clear Words</button>
      </div>
    );
  }
}

export default ResetConstraintsButton;
