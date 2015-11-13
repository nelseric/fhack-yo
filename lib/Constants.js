var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    ADD_WORD: null,
    DELETE_WORD: null,
    WORD_HINT: null,
    RESET: null,
    CLEAR_WORDS: null,
  })
};