import Dispatcher from './Dispatcher';

import Constants from './Constants';
import Util from './Util';

import EventEmitter from 'events';
import assign from 'object-assign';

const ActionTypes = Constants.ActionTypes;
const CHANGE_EVENT = 'change';

let _base_words = [];

let WordStore = assign({}, EventEmitter.prototype, {
  getState: function(){
    return {
      words: Util.words()
    };
  },

  getWordLength: function(){
    return _base_words[0].length;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

});

WordStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {
    case ActionTypes.DELETE_WORD:
      console.log("DELETE_WORD");
      WordStore.emitChange();
      break;

    case ActionTypes.WORD_HINT:
      console.log("WORD_HINT");
      WordStore.emitChange();
      break;

    case ActionTypes.ADD_WORD:
      console.log("ADD_WORD");
      WordStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = WordStore;
