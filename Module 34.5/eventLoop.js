function one(){
    two()
    console.log(1);
}
function two(){
    three()
    console.log(2);
}
function three(){
    setTimeout(()=>{
        console.log('Inside tree Timeout') //event er queue
    },2000)
    four()
    console.log(3);
}
function four(){
    five()
    console.log(4);
}
function five(){
     setTimeout(()=>{
        console.log('Inside five Timeout') //event er queue
    },0)
    console.log(5);
}
one()