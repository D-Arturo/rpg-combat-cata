'use strict'

const Character = {
    health: 1000,
    level: 1,
    alive: true,
    damageReceived(value) {
        const newHealth = Character.health - value;
        if (newHealth <= 0) {
            Character.health = 0;
            Character.alive = false;
            return Character.health;
        }
        return Character.health = newHealth;
    },


}

module.exports = Character