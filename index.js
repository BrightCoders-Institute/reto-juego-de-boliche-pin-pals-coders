//Almacena puntaje de los pinos
var shoots=[]
// [ [2,3,0,4] [10,5,9,26] [5,5,9,47]]
//Funcion de tiro 
//push
function shoot(n){
    var pine=Math.round(Math.random() * n)
    return pine
}
var arrayPrincipal = []
function implementacion(){
    for(var i = 0; i<10; i++){
        var arraysecunadrio =[]
        for(var j =0; j<4 ; j++){
            if(j == 0){
                tiro = shoot()//5 
                arraysecunadrio.push(tiro)
            }else if(j == 1){
                if(arraysecunadrio[0]<10){
                    tiro = shoot(10-arraysecunadrio[0])   
                    arraysecunadrio.push(tiro)
                   }
            }
            else if ( j == 2){
                if(IsSpare(arraysecunadrio[0],arraysecunadrio[1])){
                    tiro = shoot(10)
                }
                else{
                    arraysecunadrio.push(0)
                }
            }else if(j == 3 ){
                totalTiros = sumaTiros(arraysecunadrio[0],arraysecunadrio[1],arraysecunadrio[2])
                arraysecunadrio.push(totalTiros)
            }
        }
        arrayPrincipal.push(arraysecunadrio)
    }
    console.log(arrayPrincipal)
}

shoot(5);
