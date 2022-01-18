const Character = require("../src/rpg_combat");


describe('Given a character', () => {

    test('when has been created, then it health must start at 1000, level must start at 1, and alive must start at true', () => {
        // let character = new Character();
        expect(Character.health).toBe(1000);
        expect(Character.level).toBe(1);
        expect(Character.alive).toBe(true)
    });

    test('When damage received exceeds current Health, Health becomes 0 and the character dies', () => {
        // let character = new Character();
        expect(Character.health).toBe(1000);
        expect(Character.alive).toBe(true);
        Character.damageReceived(1001);
        expect(Character.health).toEqual(0);
        expect(Character.alive).toEqual(false);
    })

    test('when healing, then Dead characters cannot be healed', () => {
        Character.damageReceived(1001);
        Character.heal();
        expect(Character.alive).toEqual(false);
    })
})