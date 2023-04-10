let kids = [
    {id: 1, name: "A", age: 3},
    {id: 2, name: "B", age: 7},
    {id: 3, name: "T", age: 5},
    {id: 4, name: "Y", age: 9},
    {id: 5, name: "R", age: 2},
    {id: 6, name: "K", age: 4},
];

const mau_giao = [];
kids.forEach(kid=>{
    if(kid.age<6){
        mau_giao.push({
            id:kid.id,
            name:kid.name
        })
    }
});
console.log(mau_giao)

const tieu_hoc = kids
.filter(pp => pp.age < 11 && pp.age >5)
.map(pp =>({
    id: pp.id,
    name:pp.name
}));
console.log(tieu_hoc)