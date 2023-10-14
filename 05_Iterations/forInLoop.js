// forin loop
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} -- ${myObject[key]}`);        
}

const map = new Map()
map.set('In', "India")
map.set('Usa', "America")
map.set('Can', "Canada")

for (const [key] in map) {
    console.log(key); // keys are not iteratable in case of forin loop
}

const coding = ["js","rb","py"]

for (const key in coding) {
    // console.log(coding[key]);
}