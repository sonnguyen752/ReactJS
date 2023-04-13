
// function CheckEmail(str){
    pattern=/^[A-Za-z0-9]+@[A-Za-z0-9]+(\.[A-Za-z0-9]+$)/;
    if(pattern.test("abc@gmail.com")){
        console.log('day la email dung')
    }else{
        console.log("day la email khong hop le")
    }
// }