// import { writable } from 'svelte/store';
import { localStore } from '../utils/localStore';

export const _settings = localStore('nwp_settings', {
    op1: false,
    op2: false,
    op3: false,
    op4: false,
    op5: false,
    op6: false,
    op7: false,
    op8: false
});

