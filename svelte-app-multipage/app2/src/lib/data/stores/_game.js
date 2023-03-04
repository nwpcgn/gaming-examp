// import { writable } from 'svelte/store';
import { localStore } from '../utils/localStore';

export const _game = localStore('nwp_game', {
    name: null,
    points:0,
    won: 0,
    lost:0,
    money: 0,
    moneyup: 1,
    msec: 0,
    upcost: 15,
    catcost: 25,
    workercost: 250,
    upown: 0,
    catown: 0,
    workerown: 0,
    catadd: 1,
    workadd: 15,
    cboost: 1,
    wboost: 1,
    catmax: 0,
    workmax: 0
});

