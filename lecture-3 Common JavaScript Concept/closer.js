function counter(){
    let count = 0;
     function innerFunction (){
        // console.log('Some one calling me')
     }
     return innerFunction;
}

const output = counter();
// console.log(output)
output(); //karon outpur variable akta function k recieve kortese









//---------------------------//
function counter1(user){
    let count = 10;
     return function(user){
        count += 1;
        console.log('innerFunc calling',user,count)
     }
}

// const innerFunc = counter1();
// innerFunc()
// innerFunc()
// innerFunc()

const rahimCount = counter1();
rahimCount('Rahim')
rahimCount('Rahim')
rahimCount('Rahim')
rahimCount('Rahim')
rahimCount('Rahim')
console.log('---------------')
const karimCount = counter1();
karimCount('Karim')
karimCount('Karim')
karimCount('Karim')
karimCount('Karim')
karimCount('Karim')