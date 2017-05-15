var sumObject = {
  sum: function(l) {
    var result = 0;
    for (var i = 0; i < l.length; i++) {
      if (typeof l[i] === 'number') {
          result += l[i];
      } else if (l[i] === null) {
        result = 'the list contains null';
      } else {
        result = 'not a number';
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
