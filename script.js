const isPowerOfTwo = (n) => {
  //your code here
	return (n&(n-1)) === 0
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
