import { writable } from 'svelte/store'

export const money = writable(20)
export const proofs = writable(0)

// first level buildings
export const firstNum = writable(0)
export const firstBoughtNum = writable(0)
export const combinatoricsNum = writable(0)
export const combinatoricsBoughtNum = writable(0)

// second level buildings
export const secondNum = writable(0)
export const secondBoughtNum = writable(0)
export const probabilityNum = writable(0)
export const probabilityBoughtNum = writable(0)

// upgrades
export const firstRowUpgradeBoughtNum = writable(0)
export const secondRowUpgradeBoughtNum = writable(0)
