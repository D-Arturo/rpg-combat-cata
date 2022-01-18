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
    heal() {
        if (Character.health <= 0) return

        if (Character.health > 1000) return Character.health = 1000;
    }
}

module.exports = Character