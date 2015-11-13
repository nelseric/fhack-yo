
var Dispatcher = require('./Dispatcher');
var Constants = require('./Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {

  addWord(wordText) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_WORD,
      wordText: wordText
    });
  },

  deleteWord(wordText) {
    Dispatcher.dispatch({
      type: ActionTypes.DELETE_WORD,
      wordText: wordText
    });
  },

  wordHint(wordText, likeness) {
    Dispatcher.dispatch({
      type: ActionTypes.WORD_HINT,
      wordText: wordText,
      likeness: likeness
    });
  }


};

