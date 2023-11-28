/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

let s = "   fly me   to   the moon       ";
let b = s.trim();
console.log(b);
let c = "";
let e;
lastword(e);

//console.log(e.length);
function lastword(e) {
    for (let i = 0; i <= s.length - 1; i++) {
        c = b.split(" ");
        const d = c;
        e = d[d.length - 1];
        //console.log(e);
        //return e;
    }

    console.log(e)
    console.log(e.length);
    return e;
    //console.log(c);
}


const str1 = 'listen';
const str2 = 'silent';

let output = "";
let f = isAnagram(str1, str2);
function isAnagram(str1 , str2){

    let c = str1.split("").sort().join("") === str2.split("").sort().join("");

    if (c==true)
    {
        console.log("the word is Anagram")
    }
    else {
        console.log ("the word is not an Anagram")
    }

}