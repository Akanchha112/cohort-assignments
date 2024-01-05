/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let len;
    let len2;
    if(str1.length>=str2.length){
      len=str1.toUpperCase()
      len2=str2.toUpperCase()
    }
    else{
      len=str2.toUpperCase()
      len2=str1.toUpperCase()
    }
      for(let i=0;i<len.length;i++){
        let a=true
        for(let j=0;j<len2.length;j++){
          if(len2[j]!=len[i]){
            a=false
          }
          else{
            a=true
            break;
          }
          if(j==len2.length-1 && a==false){
            return false
          }
        }
      }
      return true;
}
// a=isAnagram('abc!', '!bac')
// console.log(a);
module.exports = isAnagram;
