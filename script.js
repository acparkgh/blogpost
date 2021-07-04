'use strict';

const likesCount = document.querySelector(".likes-count");
const inputLikesCount = document.querySelector(".enter-likes-count");
const voteButton = document.querySelector(".vote-btn");

class LikesCount {

  constructor(count = 0) {
    this.count = count;
    likesCount.textContent = this.count;
    voteButton.addEventListener("click", this.increaseLike.bind(this));
  };
  
  increaseLike() {
    
    const inputValue = Number(inputLikesCount.value);

    if (Number.isInteger(inputValue) && inputValue > 0) {
      this.count += inputValue;
      likesCount.textContent = this.count;
    };
  };
  
};

const like1 = new LikesCount(0);










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






