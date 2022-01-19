import {Character} from "../src/rpg_combat";


describe('Given a character', () => {

    test('when has been created, then it health must start at 1000, level must start at 1, and alive must start at true', () => {
        let character = new Character();
        expect(character.health).toBe(1000);
        expect(character.level).toBe(1);
        expect(character.alive).toBe(true)
    });

    test('When damage received exceeds current Health, Health becomes 0 and the character dies', () => {
        let character = new Character();
        expect(character.health).toBe(1000);
        expect(character.alive).toBe(true);
        character.damageReceived(1001);
        expect(character.health).toEqual(0);
        expect(character.alive).toEqual(false);
    })

    test('when healing, then Dead characters cannot be healed', () => {
        let character = new Character();
        character.damageReceived(1001);
        character.healMyself(100);
        expect(character.alive).toEqual(false);
    })

    test('when attacking, the Character cannot Deal Damage to itself', () => {
        let character = new Character();
        character.attack(character);
        expect(character.health).toBe(1000);
    })
})