const {isPalindrome}= require ('../js/app');

describe('isPalindrome', () => {

    it('should accept a string', () => {
      //arrange
      let input = "bob";
      //act
      //assert
      expect(typeof input).toBe("string");
    });

  it('should return true for bob', () => {

    //arrange
    let input = "bob";
    //act
    let result = isPalindrome(input);
    //assert
    expect(result).toBe(true);
  });

  it('should return false for apple', () => {

    //arrange
    let input = "apple";
    //act
    let result = isPalindrome(input);
    //assert
    expect(result).toBe(false);
  })

  it('should ignore capitalized values', () => {
    let input = "Bob";
    let result = isPalindrome(input);
    expect(result).toBe(true);
  })

    it('should ignore punctuation values', () => {
    let input = "Madam, I'm Adam";
    let result = isPalindrome(input);
    expect(result).toBe(true);
  })

  it('should return false for non-string values', () => {
    let input = 121;
    let result = isPalindrome(input);

    expect(result).toBe(false);
  })

});
