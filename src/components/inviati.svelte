<script>
	import { createEventDispatcher } from 'svelte';
	import SentContent from './sentContent.svelte';
	import SentHeader from './sentHeader.svelte';

	export let valore;
	export let allungamento;

	const aggiungiElementi = (e) => {
		messaggio = e.detail.messaggio;
		destinatario = e.detail.destinatario;
		oggetto = e.detail.oggetto;
		dates = e.detail.dates;
		id = e.detail.id;
		kiave = 'normale';

		dispatch('aggiungiElementi', { messaggio, oggetto, destinatario, dates, id, kiave });
	};
	const changeInviati = (e) => {
		cambiaInviati = e.detail;
		dispatch('cambiaInviati', cambiaInviati);
	};

	const aggiungiElementis = (e) => {
		destinatarioo = e.detail.oggettii[0];
		oggettii = e.detail.oggettii;
		datess = e.detail.oggettii[3];
		idd = e.detail.oggettii[2];
		emaill = e.detail.oggettii[4];
		messaggioo = e.detail.oggettii[1];
		loginUUIDs = e.detail.oggettii[5];
		kiave = `risposta`;
		dispatch('aggiungiElementis', { oggettii, destinatarioo, datess, idd, messaggioo, loginUUIDs, emaill, kiave });
	};

	const dispatch = createEventDispatcher();
	let chiavi = Object.keys(localStorage);
	let cambiaInviati;
	let kiave;
	let id;
	let messaggio;
	let destinatario;
	let oggetto;
	let dates;
	let destinatarioo;
	let oggettii;
	let datess;
	let idd;
	let emaill;
	let messaggioo;
	let loginUUIDs;

	// console.log(tuttoo)
</script>

<div class="sent">
	<SentHeader {allungamento} />

	<SentContent
		on:cambiaInviati={changeInviati}
		on:elementi={aggiungiElementi}
		on:elementis={aggiungiElementis}
		{valore}
		{allungamento}
	/>
</div>

<!-- on:elementis={aggiungiElementis} -->
<style>
	.sent {
		display: flex;
		flex-direction: column;
		background-color: white;

		width: 100vw;
		margin-top: 6px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		overflow: hidden;
		z-index: 2;
	}
	@media screen and (max-width: 780px) {
		.sent {
			width: 460px;
		}
	}
</style>
