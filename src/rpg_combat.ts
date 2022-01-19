'use strict'


export class Character {

    constructor() {
        this._health = 1000;
        this._level = 1;
        this._alive = true;

    }

    private _health: number;

    get health(): number {
        return this._health;
    }

    set health(value: number) {
        this._health = value;
    }

    private _level: number;

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }

    private _alive: boolean;

    get alive(): boolean {
        return this._alive;
    }

    set alive(value: boolean) {
        this._alive = value;
    }

    damageReceived(value: number) {
        const newHealth = this._health - value;
        if (newHealth <= 0) {
            this._health = 0;
            this._alive = false;
            return
        }
        this._health = newHealth;
        return
    }

    healMyself() {
        if (this._health <= 0) return

        if (this._health > 1000) return this._health = 1000;
    }
}


