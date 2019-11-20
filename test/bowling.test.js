/* global describe, it, expect */

const { BowlingGame } = require("../src/bowling");

describe("Bowling Game", () => {
  it("newbie game", () => {
    const game = new BowlingGame();
    // first frame
    game.roll(0);
    game.roll(0);
    // second frame
    game.roll(0);
    game.roll(0);
    // third frame
    game.roll(0);
    game.roll(0);
    // fourth frame
    game.roll(0);
    game.roll(0);
    // fifth frame
    game.roll(0);
    game.roll(0);
    // sixth frame
    game.roll(0);
    game.roll(0);
    // seventh frame
    game.roll(0);
    game.roll(0);
    // eighth frame
    game.roll(0);
    game.roll(0);
    // ninth frame
    game.roll(0);
    game.roll(0);
    // tenth frame
    game.roll(0);
    game.roll(0);
    expect(game.score()).toBe(0);
  });
});
