/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  a=str.toUpperCase();
  str='';
  for(let i=0;i<a.length;i++){
    if(a[i].charCodeAt(0)>=65 && a[i].charCodeAt(0)<=90){
      str+=a[i]
    }
  }
  n=str.length;
  j=n-1;
  for(let i=0;i<n/2;i++){
    if(str[i]!=str[j-i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
