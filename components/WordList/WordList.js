/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './WordList.scss';
import Link from '../Link';

export default class extends Component {

  handleClick(word, match_value){
    if(match_value === 'dud'){
      return function(evt){
        console.log(`${word.text} is a dud.`);
      }
    } else {
      return function(evt){
        console.log(`${word.text} has ${match_value} matches`);
      }
    }
  }


  render() {
    const self = this;
    return (
      <table className='WordList'>
        <thead>
          <tr>
            <th>Word</th>
            <th>Avg</th>
            <th>Dud</th>
            {
              this.props.words[0].text.split("").map(function(_ch, ix){
                return(
                  <th>{ix}</th>
                );
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            this.props.words.map(function(word) {
              return(
                <tr className="word" key={word.text} >
                  <td>
                    {word.text}
                  </td>
                  <td>
                    {word.averageLikeness}
                  </td>
                  <td>
                    <a onClick={self.handleClick(word,'dud')} href="#">Dud</a>
                  </td>
                  {
                    word.text.split("").map(function(_ch, ix){
                      return(
                        <td>
                          {(word.possibles.indexOf(ix) != 0) ? (<a onClick={self.handleClick(word,ix)} href="#">{ix}</a>) : null}
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
