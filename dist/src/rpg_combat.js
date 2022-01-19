'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
exports.Character = void 0;

class Character {
    constructor() {
        this._health = 1000;
        this._level = 1;
        this._alive = true;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }

    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
    }

    get alive() {
        return this._alive;
    }

    set alive(value) {
        this._alive = value;
    }

    damageReceived(value) {
        const newHealth = this._health - value;
        if (newHealth <= 0) {
            this._health = 0;
            this._alive = false;
            return;
        }
        this._health = newHealth;

    }

    heal() {
        if (this._health <= 0)
            return;
        if (this._health > 1000)
            return this._health = 1000;
    }
}

exports.Character = Character;
module.exports = Character;
//# sourceMappingURL=rpg_combat.js.map