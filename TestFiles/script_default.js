'use strict';

class normalizeName {
  
  constructor() { this.correctedNamesArray = []; };
  
  fixName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  };

  correctNames(nameArray) {
    this.correctedNamesArray = nameArray.map(function (name) {
      this.fixName(name);
    }.bind(this));
  };
  
};
    
const newNames1 = new normalizeName;

newNames1.correctNames(["anDRew", "NancY", "SteVe", "DAVE", "laura"]);
console.log(newNames1.correctedNamesArray);



// newNames1.correctNames(["anDRew", "NancY", "SteVe", "DAVE", "laura"]);
// console.log(newNames1.correctedNamesArray);


// correctNames(nameArray) {
//   nameArray.forEach((name) => {
//     this.correctedNamesArray.push(this.fixName(name));
//   });
// };
   
  // correctNames(nameArray) {
  //   nameArray.forEach(function (name) {
  //     this.correctedNamesArray.push(this.fixName(name));
  //   }.bind(this));
  // };
  


// const likesCount = document.querySelector(".likes-count");
// const voteButton = document.querySelector(".vote-btn");

// class LikesCount {

//   constructor(count = 0) {
//     this.count = count;
//     likesCount.textContent = this.count;
//     voteButton.addEventListener("click", this.increaseLike.bind(this));
//   };
  
//   increaseLike() {
    
//     this.count++;
//     likesCount.textContent = this.count;
//   };
  
// };

// const like1 = new LikesCount(0);










// voteButton.addEventListener("click", this.increaseLike);


// increaseLike = () => {
//     this.count++;
//     likesCount.textContent = this.count;
//   };
  





// const vote = { likes: 0 };

// const increaseLike = function () {
//   return ++vote.likes;
// };

// voteButton.addEventListener("click", function () {
//   const voteCount = increaseLike();
//   console.log(voteCount);
//   likesCount.textContent = voteCount;
// });






