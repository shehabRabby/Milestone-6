function pakhiBhai (callMe,pattro, pattri){
    // console.log('callMe parameter',callMe)
    console.log('Pattro parameter',pattro)
    // console.log('Pattri parameter',pattri)
    if(pattri){
        // console.log(callMe)
        callMe(pattro)
    }else{
        console.log('tor kopalke biye nai')
    }
}

pakhiBhai(callSomeOne,'jodu','modu')

function callSomeOne (person){
    console.log('calling', person);
}
