const loadData = async () => {
    console.log(1)
    console.log(2)
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json();
        console.log('got data ', data.length)
    }catch(error){
        console.log('error happen')
    }
    console.log(4)
    console.log(5)
}
loadData();