 const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];
 let count = {};

letters.forEach(item => {
    if(count[item]) {
        count[item]++;
    }
    else {
        count[item] = 1;
    }
});

console.log(count);