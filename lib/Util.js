import uniq from 'underscore';

export default {
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  wordLikeness(word_a, word_b) {
    let likeness = 0;
    for (var i = 0; i < word_a.length; i++) {
      if(word_a[i] === word_b[i]) {
        likeness++;
      }
    };

    return likeness
  },

  uniq(array){
    let unique = [];
    for(let item of array){
      if(unique.indexOf(item) === -1){
        unique.push(item);
      }
    }
    return unique;
  },

  words(){
    const base_words = [
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
    const self = this;

    let words = base_words.map(function(base){
      const other_words = base_words.filter((word) => base != word);


      const distances = other_words.map(function(other){
        return {
          word: other,
          likeness: self.wordLikeness(base, other)
        };
      });

      return {
        text: base,
        distances: distances,
        averageLikeness: (distances.map((d) => d.likeness).reduce((a, b) => a + b ) / distances.length).toFixed(2),
        possibles: self.uniq(distances.map((d) => d.likeness)),
      };
    });
    words = words.sort((a, b) => a.averageLikeness - b.averageLikeness);

    return words;
  }
}