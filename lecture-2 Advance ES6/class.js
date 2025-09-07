//class -> properties, method(),constructor()
//Object

class Player {
    position(){
        console.log('Forward Stricker');
    }
    club(){
        console.log('Bercelona')
    }
   
    constructor(name, location,age){
        this.name = name;
        this.age = age;
        this.location = location;
        console.log(name,' is a forward stricker come form',location,' age is ',age)
    }
}

const player1 = new Player(); //construct without parameter
// player1.club();
// player1.position();
const player2 = new Player('Xavi','Spain',33);//construct with parameter

