
const isPalindrome = (input) => {

  if(typeof input !== "string"){return false};

  let anyInput = input.toLowerCase();
  anyInput = anyInput.replace(
    /[^a-z0-9]/g,"");
  let left = 0
  let right = anyInput.length -1;

  while(left<right){
  if(anyInput[left] === anyInput[right]){
    left++;
    right--;
  } else if(anyInput[left] !== anyInput[right]){
    return false;

  }
  }

  return true;

  console.log(isPalindrome(input));




}

module.exports = {isPalindrome};
