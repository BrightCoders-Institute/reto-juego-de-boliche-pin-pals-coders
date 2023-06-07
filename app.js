export class BowlingGame{
    constructor(){
        this.arrayPrincipal = []
    }
    shoot(thrownBoling){
        return Math.round(Math.random() * thrownBoling)
    }
    Game(){
        for(let i = 0; i < 10; i++){
            let arraysecunadrio = []
            
            for(let j = 0; j<4; j++){
                if(j == 0){ //Se  hace el primer tiro 
                   const tiro = this.shoot(10) //Como es el primer tiro todos lo pinos estan arriba
                    arraysecunadrio.push(tiro)  //Se agregar el valor al array
                }else if(j == 1){ //Se hace el segundo tiro
                    if(arraysecunadrio[0]<10){//si no se hace un strike se hace el siguiente tiro
                        const tiro = this.shoot(10-arraysecunadrio[0])   //1
                        arraysecunadrio.push(tiro)
                    }
                    else{//Si se hace strike se reinician los bolos
                        const tiro = this.shoot(10)
                        arraysecunadrio.push(tiro)
                    }
                }
                else if ( j == 2){//Cuando esta en la terscer tirada
                    if(this.IsSpare(arraysecunadrio[0],arraysecunadrio[1]) || arraysecunadrio[0]==10){ //si se hace un spare entonces se hace el bonus 
                        const tiro = this.shoot(10)
                        arraysecunadrio.push(tiro)
                    }
                    else{//en el caso de que no sea chusa o ni strike se tiene que agregar un 0
                        arraysecunadrio.push(0)
                    }
                }else if(j == 3 ){
                    let total; // Declarar la variable total
                    if(i == 0){
                        const totalTiros = this.sumaTiros(arraysecunadrio[0],arraysecunadrio[1],arraysecunadrio[2])
                        arraysecunadrio.push(totalTiros)
                    }else{
                        const totalTiros = this.sumaTiros(arraysecunadrio[0],arraysecunadrio[1],arraysecunadrio[2])
                         total = this.sumaTirosAnteriores(totalTiros , this.arrayPrincipal[i-1][3])
                        arraysecunadrio.push(total)
    
                    }
                }
            }
            this.arrayPrincipal.push(arraysecunadrio)
        }
        return this.arrayPrincipal
    }

    IsSpare(shoot1,shoot2){
        if((shoot1+shoot2)==10){
            return true
        }
    
    }
    
    sumaTiros(tiro1,tiro2,tiro3){
        var suma = tiro1+tiro2+tiro3;
        return suma
    }
    
    sumaTirosAnteriores(sumaAnterior, SumaActual){
        let total = sumaAnterior + SumaActual
        return total
    }
}

modules.exports = BowlingGame;

import {BowlingGame} from "./app";

const bowlingGame = new BowlingGame();
console.log(bowlingGame.app());