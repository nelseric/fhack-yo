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
    }

    return likeness;
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

  words(base_words, constraints){
    const self = this;

    let filtered_words = base_words.filter(word => ! constraints.map(c=>c.text).includes(word));
    
    for(let constraint of constraints){
      filtered_words = filtered_words.filter(function(word){
        return self.wordLikeness(constraint.text, word) === constraint.likeness;
      });
    }

    let words = filtered_words.map(function(base){
      const other_words = filtered_words.filter((word) => base != word);


      const distances = other_words.map(function(other){
        return {
          word: other,
          likeness: self.wordLikeness(base, other)
        };
      });

      let averageLikeness = 0;
      if(distances.length > 1){
        averageLikeness = (distances.map((d) => d.likeness).reduce((a, b) => a + b ) / distances.length).toFixed(2);
      } else if(distances.length === 1){
        averageLikeness = distances[0].likeness;
      }

      return {
        text: base,
        distances: distances,
        averageLikeness: averageLikeness,
        possibles: self.uniq(distances.map((d) => d.likeness)),
      };
    });
    words = words.sort((a, b) => b.averageLikeness - a.averageLikeness);
    return words;
  }
};