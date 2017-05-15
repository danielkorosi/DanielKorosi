var sumObject = {
  sum: function(l) {
    var result = 0;
    for (var i = 0; i < l.length; i++) {
      if (typeof l[i] === 'number') {
          result += l[i];
    }
  }
  return result;
}
}
//var sumObject = new Summing ();
//var numberList = [1,2,3,4,5]
//console.log(sumObject.sum(numberList));

module.exports = sumObject;
//module.exports = numberList;
