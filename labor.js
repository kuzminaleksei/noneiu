const params = {
    sizeRatio: 10
};

const keepWithinCircle = true;

const result = keepWithinCircle ? params.sizeRatio : params.sizeRatio / Math.SQRT2;
console.log(result);  // Output: 10
