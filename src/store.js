import { writable } from 'svelte/store';

let oggetto = { ciao: 'ciao', ci: 'ccc' };

let emailDatas;
export async function getOggetto() {
	const response = await fetch('https://randomuser.me/api/');
	const obj = await response.json();
	let key = Object.keys(sessionStorage).length;
	let arrayDaPassare = [key, obj.results[0]];
	sessionStorage.setItem(`${key}`, `${JSON.stringify(arrayDaPassare)}`);

	emailDatas = JSON.parse(sessionStorage.getItem(`${key}`));

	return emailDatas;
}

let emali;
export function getOggettoSeSessPieno() {
	let keys = Object.keys(sessionStorage);
	keys.forEach((key) => {
		key.includes('saltaLogin') ? console.log('saltaLOGIN') : (emali = JSON.parse(sessionStorage.getItem(`${key}`)));
	});
}

export const invisibile = (email, valore) => {
	email === `${valore}` ? false : true;
};
export const get = (key) => {
	sessionStorage.getItem(`${key}`);
};

export let select = writable(false);
export let selezionata = writable(false);
