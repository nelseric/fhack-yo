import Dispatcher from './Dispatcher';

import Constants from './Constants';
import Util from './Util';

import EventEmitter from 'events';
import assign from 'object-assign';

const ActionTypes = Constants.ActionTypes;
const CHANGE_EVENT = 'change';

let _words = [
  "spies",
  "joins",
  "tires",
  "trick",
  "tried",
  "skies",
  "terms",
  "third",
  "fries",
  "price",
  "tries",
  "trite",
  "tanks",
  "thick",
  "tribe",
];

let _constraints = [];

let WordStore = assign({}, EventEmitter.prototype, {
  getState: function(){
    return {
      words: Util.words(_words, _constraints)
    };
  },

  getFirstWord: function(){
    return _words[0];
  },

  getSizeIterator: function(){
    if(_words[0]){
      return _words[0].split("");
    } else {
      return [];
    }
  },

  getWordLength: function(){
    return _words[0] && _words[0].length;
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
      _words = _words.filter((w) => w != action.wordText);
      WordStore.emitChange();
      break;

    case ActionTypes.WORD_HINT:
      _constraints.push({
        text: action.wordText,
        likeness: action.likeness
      });
      WordStore.emitChange();
      break;

    case ActionTypes.ADD_WORD:
      _words.push(action.wordText);
      WordStore.emitChange();
      break;

    case ActionTypes.RESET:
      _constraints = [];
      WordStore.emitChange();
      break;

    case ActionTypes.CLEAR_WORDS:
      _constraints = [];
      _words = [];
      WordStore.emitChange();
      break;


    default:
      // do nothing
  }

});

module.exports = WordStore;
