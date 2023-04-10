const DS_HV = [
    {id: 1, name: "A", status: 1, age: 17},
    {id: 2, name: "B", status: 0, age: 20},
    {id: 3, name: "T", status: 0, age: 16},
    {id: 4, name: "Y", status: 1, age: 22},
    {id: 5, name: "R", status: 1, age: 18},
    {id: 6, name: "K", status: 0, age: 15},
];

const DS_HV_New = DS_HV
.filter(pp => pp.status==0)
.map(pp =>({
    // id: pp.id,
    name:pp.name + " da nghi"
}));
const DS_HV_old = 
DS_HV.filter(qq =>qq.status ==1)
.map(qq=> ({
    name:qq.name+" con hoc"
}));
console.log(DS_HV_old)
console.log(DS_HV_New)