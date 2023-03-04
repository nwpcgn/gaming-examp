import { writable } from 'svelte/store';

// export const enemyHealth = writable(10)
// export const output = writable('')
// export const playerHealth = writable(30)
// export const playerHealthMax = writable(30)

export const _battle = writable({
    enemyHealth: 12,
    enemyHealthMax: 12,
    playerHealth: 30,
    playerHealthMax: 30,
    output: ''
})