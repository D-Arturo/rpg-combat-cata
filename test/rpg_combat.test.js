const Character = require("../src/rpg_combat");

describe('Given a character', () => {

    test('when has been created, then it health must start at 1000, level must start at 1, and alive must start at true', () => {
        let character = new Character();
        expect(character.health).toBe(1000);
        expect(character.level).toBe(1);
        expect(character.alive).toBe(true)
    });


})