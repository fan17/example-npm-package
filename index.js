// export const giveMeAJoke = () => {
//   return "This is a joke";
// };

var jokes = [
    "Did you hear about the crook who stole a calendar? He got twelve months.",
    "Q. Why is an island like the letter T? A. They're both in the middle of water!",
    "I didn't do it on porpoise."
];

exports.giveMeAJoke = function() {
    return jokes[Math.floor(Math.random() * jokes.length)];
};

exports.giveMeARandomInteger = function() {
    return Math.round(Math.random() * 100);
};
