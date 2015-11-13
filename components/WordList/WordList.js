import React, { Component } from 'react';
import './WordList.scss';
import Actions from '../../lib/Actions';
import WordStore from '../../lib/WordStore';

class WordList extends Component {

  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
    this._onChange = this._onChange.bind(this);

    this.state = WordStore.getState();
  }

  componentDidMount() {
    WordStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    WordStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.state = WordStore.getState();
  }

  _handleClick(word, match_value){
    if(match_value === 'dud'){
      return function(evt){
        Actions.deleteWord(word.text);
      }
    } else {
      return function(evt){
        Actions.wordHint(word, match_value);
      }
    }
  }

  render() {
    const self = this;
    return (
      <table className='WordList'>
        <thead>
          <tr>
            <th>{this.state.foo} Word</th>
            <th>Avg</th>
            <th>Dud</th>
            {
              this.state.words[0].text.split("").map(function(_ch, ix){
                return(
                  <th key={ix}>{ix}</th>
                );
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            this.state.words.map(function(word) {
              return(
                <tr className="word" key={word.text} >
                  <td>
                    {word.text}
                  </td>
                  <td>
                    {word.averageLikeness}
                  </td>
                  <td>
                    <a onClick={self._handleClick(word,'dud')} href="#">Dud</a>
                  </td>
                  {
                    word.text.split("").map(function(_ch, ix){
                      return(
                        <td key={ix}>
                          {(word.possibles.indexOf(ix) != -1) ? (<a onClick={self._handleClick(word,ix)} href="#">{ix}</a>) : null}
                        </td>
                      );
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    );
  }
}


export default WordList;