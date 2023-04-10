const team = [
    {member: "John",km:3},
    {member: "Jane",km:4},
    {member: "David",km:3},
    {member: "Peter",km:9},

];
let sum=0;
for(const{km} of team){
    sum+= km;
}
console.log("Tong so km: ${sum}");