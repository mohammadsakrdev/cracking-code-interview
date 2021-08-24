const productExceptSelf = (nums) => {
  const output = Array(n.length).fill(1);

  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = output[i] * product;
    product = product * nums[i];
  }

  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * product;
    product = product * nums[i];
  }

  return output;
};

module.exports = productExceptSelf;
