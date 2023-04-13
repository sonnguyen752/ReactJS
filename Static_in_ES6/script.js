animals = ["cat","dog","muose"]
// kiem tra da co trong DS hay chua
console.log(animals.some(animal => animal === 'cat'))
// Them vao danh sach
animals.push('Big')
console.log(animals)
// xoa khoi danh sach
const newAnimals = animals.filter(item=>item !== 'cat')
console.log(newAnimals)
