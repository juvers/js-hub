Array.prototype.diff = function(arr2) {
    var ret = [];
    for (var i in this) {
        if (arr2.indexOf(this[i]) > -1) {
            ret.push(this[i]);
        }
    }
    return ret;
};

var array1 = [1, 2, 3];
var array2 = [4, 3, 1, 1, 4];

console.log(array1.diff(array2));