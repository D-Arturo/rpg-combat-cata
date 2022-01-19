'use strict'

export class BattlefieldActions {
    public _minimumHealth: number = 0;

    constructor() {
        this._health = 1000;
        this._alive = true;
    }

    public _health: number;

    get health(): number {
        return this._health;
    }

    set health(value: number) {
        this._health = value;
    }

    public _alive: boolean;

    get alive(): boolean {
        return this._alive;
    }

    set alive(value: boolean) {
        this._alive = value;
    }

    public damageReceived(value: number) {
        const newHealth = this._health - value;
        if (newHealth <= 0) {
            this._health = 0;
            this._alive = false;
            return
        }
        this._health = newHealth;
        return
    }

    public isDead(): boolean {
        if (this._health <= 0) return true
        return false
    }

    public healMyself(healing: number) {
        if (!this.isDead()) return
        this._health += healing;
        if (this._health > 1000) return this._health = 1000;
        return
    }
}

export class Character extends BattlefieldActions {

    constructor() {
        super();
        this._level = 1;
    }

    private _level: number;

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }


}


