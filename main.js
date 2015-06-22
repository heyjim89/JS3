// alert('Hello Boulder!');

var word = prompt("Enter any word");

console.log("You entered " + word);
console.log("There are " + word.length + " characters in the word.");
console.log("The third character is " + word.charAt(2));
console.log("Lowercase " + word.toLowerCase());
console.log("Uppercase " + word.toUpperCase());

console.log("Example: " + "Sometimes people like to " + word);
console.log("Subword: " + word.substring(1,4));


// The word they entered, verbatim
// How many characters are in it (length property)

// If you have gotten this far, what should you do? Commit!
// Run git init to initialize the folder as a git repository.
// Run git add -A and git commit -m "[ENTER MESSAGE]" to commit your changes to your local repo.
// Create a repo on github using the instructions in How to Git. Push your changes to the remote github repo.
// What the third character is (charAt)
// The word in lowercase (toLowerCase)
// The word in uppercase (toUpperCase)
// The word in a sentence
// The subword from the 2nd to the 4th character, inclusive (substring)
//
// The alert's output might look like this: 
// You entered: Mango 
// There are 5 characters in the word. 
// The third character is 'n' 
// Lowercase: mango 
// Uppercase: MANGO 
// Example: I have wanted a Mango since I was a little boy. 
// Subword: ang