//Co-authored-by: J3fte <santillanabdiel0@gmail.com>
// Co-authored-by: FebernalGober <alexis.ferber18@gmail.com>
// Co-authored-by: Axw3ll <axelomar.a.v@gmail.com>

/*
a function was implemented to fill a 
list containing the 10 frames and the spare conditions
*/ 
/*function shoot(){
    var pine=Math.round(Math.random() * 10)
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

function IsSpare(shoot1,shoot2){
    if((shoot1+shoot2)==10){
        return true
    }
    
}

function sumaTiros(tiro1,tiro2,tiro3){
    var suma = tiro1+tiro2+tiro3;
    return suma;
}

console.log(implementacion())*/
/*
var rolls = [];

const pines = [1,2,3,4,5,6,7,8,9,10]
var pines2=[]


function shoot() {
    var indexPines= Math.floor(Math.random()*pines.length);

    var randomPines = pines[indexPines]

    for(i=0; i<=10-randomPines;i++){
        pines2.push(i)
    }
    var indexPines2 = Math.floor(Math.random()*pines2.length);
    var randomPines2 = pines2[indexPines2]  

    return randomPines,randomPines2
    
}

function Points(tiro1,tiro2){
    var result = tiro1+tiro2
    return result
}

shoot()
Points(randomPines,randomPines2)
*/
    function shoot(n){
        var pine=Math.round(Math.random() * n)
        return pine
    }

  var arrayPrincipal = []
  
  function implementacion(){
    for(var i = 0; i<10; i++){
        var arraysecunadrio =[]
        for(var j =0; j<4 ; j++){
            if(j == 0){ //Se  hace el primer tiro 
                tiro = shoot(10) //Como es el primer tiro todos lo pinos estan arriba
                arraysecunadrio.push(tiro)  //Se agregar el valor al array
            }else if(j == 1){ //Se hace el segundo tiro
                if(arraysecunadrio[0]<10){//si no se hace un strike se hace el siguiente tiro
                    tiro = shoot(10-arraysecunadrio[0])   //1
                    arraysecunadrio.push(tiro)
                   }
                else{//Si se hace strike se reinician los bolos
                    tiro = shoot(10)
                    arraysecunadrio.push(tiro)
                }
            }
            else if ( j == 2){//Cuando esta en la terscer tirada
                if(IsSpare(arraysecunadrio[0],arraysecunadrio[1]) || arraysecunadrio[0]==10){ //si se hace un spare entonces se hace el bonus 
                    tiro = shoot(10)
                    arraysecunadrio.push(tiro)
                }
                else{//en el caso de que no sea chusa o ni strike se tiene que agregar un 0
                    arraysecunadrio.push(0)
                }
            }else if(j == 3 ){
                if(i == 0){
                    totalTiros = sumaTiros(arraysecunadrio[0],arraysecunadrio[1],arraysecunadrio[2])
                    arraysecunadrio.push(totalTiros)
                }else{
                    totalTiros = sumaTiros(arraysecunadrio[0],arraysecunadrio[1],arraysecunadrio[2])
                    total = sumaTirosAnteriores(totalTiros , arrayPrincipal[i-1][3])
                    arraysecunadrio.push(total)
  
                }
            }
        }
        arrayPrincipal.push(arraysecunadrio)
    }
    console.log(arrayPrincipal)
  }
  
  
  function IsSpare(shoot1,shoot2){
    if((shoot1+shoot2)==10){
        return true
    }
  
  }
  
  function sumaTiros(tiro1,tiro2,tiro3){
    var suma = tiro1+tiro2+tiro3;
    return suma
  }
  
  function sumaTirosAnteriores(sumaAnterior, SumaActual){
    total = sumaAnterior + SumaActual
    return total
  }
  
implementacion()