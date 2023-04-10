const birds = [
    {'id':"DV8",'name':"Eurasian",'Type':"Dove"},
    {'id':"HK12",'name':"Ball",'Type':"Hawk"},
    {'id':"HK6",'name':"Cooper's",'Type':"Sparrow"},
    {'id':"SP11",'name':"Bell's",'Type':"hawk"},
    {'id':"DV2",'name':"Mourning",'Type':"Dove"},
];
const name1 = birds.map( pp=>({
    name: pp.name,
    // id: pp.id
}))
console.log(name1)
