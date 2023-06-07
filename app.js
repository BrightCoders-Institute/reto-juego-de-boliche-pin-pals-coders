export default class BowlingGame {
  constructor () {
    this.arrayPrincipal = []
  }

  shoot (thrownBoling) {
    return Math.round(Math.random() * thrownBoling)
  }

  Game () {
    for (let i = 0; i < 10; i++) {
      const arraysecunadrio = []
      for (let j = 0; j < 4; j++) {
        if (j === 0) {
          const tiro = this.shoot(10)
          arraysecunadrio.push(tiro)
        } else if (j === 1) {
          if (arraysecunadrio[0] < 10) {
            const tiro = this.shoot(10 - arraysecunadrio[0])
            arraysecunadrio.push(tiro)
          } else {
            const tiro = this.shoot(10)
            arraysecunadrio.push(tiro)
          }
        } else if (j === 2) {
          if (this.IsSpare(arraysecunadrio[0], arraysecunadrio[1]) || arraysecunadrio[0] === 10) {
            const tiro = this.shoot(10)
            arraysecunadrio.push(tiro)
          } else {
            arraysecunadrio.push(0)
          }
        } else if (j === 3) {
          let total
          if (i === 0) {
            const totalTiros = this.sumaTiros(arraysecunadrio[0], arraysecunadrio[1], arraysecunadrio[2])
            arraysecunadrio.push(totalTiros)
          } else {
            const totalTiros = this.sumaTiros(arraysecunadrio[0], arraysecunadrio[1], arraysecunadrio[2])
            total = this.sumaTirosAnteriores(totalTiros, this.arrayPrincipal[i - 1][3])
            arraysecunadrio.push(total)
          }
        }
      }
      this.arrayPrincipal.push(arraysecunadrio)
    }
    return this.arrayPrincipal
  }

  IsSpare (shoot1, shoot2) {
    if ((shoot1 + shoot2) === 10) {
      return true
    }
  }

  sumaTiros (tiro1, tiro2, tiro3) {
    const suma = tiro1 + tiro2 + tiro3
    return suma
  }

  sumaTirosAnteriores (sumaAnterior, SumaActual) {
    const total = sumaAnterior + SumaActual
    return total
  }
}
