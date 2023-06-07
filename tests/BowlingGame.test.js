import BowlingGame from "../app";

test('El método shoot debe devolver un número entre 0 y thrownBoling', () => {
    const game = new BowlingGame();
    const thrownBoling = 10;
    const result = game.shoot(thrownBoling);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(thrownBoling);
});

test('El método IsSpare debe retornar true si los tiros suman 10', () => {
    const game = new BowlingGame();
    const shoot1 = 6;
    const shoot2 = 4;
    const result = game.IsSpare(shoot1, shoot2);
    expect(result).toBe(true);
});