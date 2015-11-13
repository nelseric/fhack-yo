/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

import WordList from '../components/WordList'
import NewWordForm from '../components/NewWordForm';
import ResetConstraintsButton from '../components/ResetConstraintsButton';

import Util from '../lib/Util'

export default class extends Component {

  render() {
    return (
      <div>
        <h1>Solver</h1>
        <NewWordForm />
        <WordList />
        <ResetConstraintsButton />
      </div>
    );
  }

}
