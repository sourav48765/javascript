//  forof loop

const arr = [1,2,3]

for (const num of arr) {
    // console.log(num);
}

//  Maps

const map = new Map()
map.set('In', "India")
map.set('Usa', "America")
map.set('CAn', "Canada")
// map.set('In', "India")

// console.log(map);

for (const [key,value] of map) {
    console.log(key, " ", value);
}


const myObject = {
    'game1': "NFS",
    'game2': "spiderman"
}

