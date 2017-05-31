let fruits = ['Apple', 'Banana'];
console.log(fruits);

fruits[1] = 'Pear';
console.log(fruits[1]);

let newLength = fruits.push('Orange');
console.log(fruits);

let last = fruits.pop();
console.log(fruits);

let newNewLength = fruits.unshift('Strawberry');
console.log(fruits);

let newNewNewLength = fruits.shift();
console.log(fruits);

let mdArray;

mdArray = [[‘1a’,’2a’,’3a’,’4a’,’5a’],
            [‘1b’,’2b’,’3b’,’4b’,’5b’],
            [‘1c’,’2c’,’3c’,’4c’,’5c’]];
console.log(mdArray[x][y]); //where x is the first position, and y is the second position

let fruits;
fruits =   [['Pear', 'Green', 'Sweet'],
            ['Apple', 'Red', 'Tangy'],
            ['Lemon', 'Yellow', 'Sour']];

console.log('\n' + fruits[0][0]);
console.log(fruits[0][1]);
console.log(fruits[0][2]);
console.log('\n' + fruits[1][0]);
console.log(fruits[1][1]);
console.log(fruits[1][2]);
console.log('\n' + fruits[2][0]);
console.log(fruits[2][1]);
console.log(fruits[2][2]);

let mdArray = [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5,6,7,8,9], [0, 0, 0, 0, 0]];

for (let i = 0; i < mdArray.length; i++) {
    for (let j = 0; j < mdArray[i].length; j++) {
        console.log('position: ' + i + ', ' + j + ' is equal to: ' + mdArray[i][j]);
    }
}