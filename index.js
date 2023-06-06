//Almacena puntaje de los pinos
var shoots=[]
// [ [2,3,0,4] [10,5,9,26] [5,5,9,47]]
//Funcion de tiro 
//push
function shoot(n){
    var pine=Math.round(Math.random() * n)
    return pine
}

shoot(5);
