<script>
	import TitleAndMenu from './titleAndMenu.svelte';
	import Search from './search.svelte';
	import RightSide from './rightSide.svelte';
	import { createEventDispatcher } from 'svelte';

	export let allungamento;

	const cambia = (e) => {
		let apriGrande = e.detail.apriGrande;
		let cambiaInvioArrivo = e.detail.cambiaInvioArrivo;
		let preferiti = e.detail.preferiti;
		let preferitiGrande = e.detail.preferitiGrande;
		dispatch('torna', { apriGrande, cambiaInvioArrivo, preferiti, preferitiGrande });
	};

	const prova = (e) => {
		valore = e.detail;
		dispatch('inputvalue', valore);
	};

	const dispatch = createEventDispatcher();
	let riduci;
	let valore;
	let riduciLeftBar = (e) => {
		riduci = e.detail;
		dispatch('riduci', riduci);
	};
</script>

<div class="header">
	<div class="titleandmenu">
		<TitleAndMenu on:tornaadhome={cambia} on:riduci={riduciLeftBar} />
	</div>
	<Search on:inputValue={prova} />
	<div class="rightside">
		<RightSide {allungamento} />
	</div>
</div>

<style>
	.header {
		display: flex;
	}
</style>
