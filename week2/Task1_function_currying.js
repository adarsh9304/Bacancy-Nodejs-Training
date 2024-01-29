// function currying using closure and bind method
// closure

function multiplyFun(x) {
  return function insideTheMupltiplyFun(y) {
    return x * y;
  };
}

const multiplyFunByTwo = multiplyFun(2);
multiplyFunByTwo(5);

// bind

const multiplyFun2 = function forBind(x, y) {
  return x * y;
};

const multiplyFunByTwoBind = multiplyFun2.bind(this, 2);
multiplyFunByTwoBind(5);
