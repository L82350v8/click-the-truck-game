/*var arr = [];
var columnDefs = function(key, sortable, resizeable){
    this.key = key;
    this.sortable = sortable;
    this.resizeable = resizeable;
    };

for (var i = 0; i < len; i++) {
    arr.push((new columnDefs(oFullResponse.results[i].label,true,true)));
}


var arr = oFullResponse.results.map(obj => ({
    key: obj.label,
    sortable: true,
    resizeable: true
}))
*/









// found this algorithm that shuffles an array into a random order. 
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Used like so
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
arr = shuffle(arr);
console.log(arr);