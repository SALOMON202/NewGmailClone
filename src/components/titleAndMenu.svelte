<script>
	import { menu } from '../iconservice';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	const riduciLeftBar = () => {
		riduci = !riduci;
		dispatch('riduci', riduci);
	};

	let tornaAdHome = () => {
		let apriGrande = true;
		let cambiaInvioArrivo = false;
		let preferiti = false;
		let preferitiGrande = false;

		dispatch('tornaadhome', { apriGrande, cambiaInvioArrivo, preferiti, preferitiGrande });
	};
	let riduci = false;
</script>

<div class="title-menu">
	<div class="menu" on:click={riduciLeftBar}>
		{@html menu}
		<div class="black-box">
			<nobr> Menu Principale </nobr>
		</div>
	</div>
	<div class="title" on:click={tornaAdHome}>
		<div class="black-box">
			<nobr> GMAIL </nobr>
		</div>
	</div>
</div>

<style>
	.title {
		height: 35px;
		width: 100px;
		background-image: url('/images/gmail-logo-5-1.png');
		background-size: contain;
		background-repeat: no-repeat;
		position: relative;
		top: 4px;
		right: 20px;
		cursor: pointer;
	}

	.title-menu {
		display: flex;
		height: 48px;
		min-width: 206px;
		align-items: center;
		gap: 20px;
		padding-right: 30px;
		padding-left: 20px;
		z-index: 21;
	}
	.menu {
		height: 44px;
		width: 44px;
		border-radius: 100%;
		cursor: pointer;
		position: relative;
		right: 10px;
		z-index: 21;
	}
	.menu:hover {
		background-color: #d7d9dc;
	}

	.title:hover .black-box {
		visibility: visible;
		opacity: 1;
		position: relative;
		top: 20px;
		left: 85px;
	}
	.menu:hover .black-box {
		visibility: visible;
		opacity: 1;
		position: relative;
	}
</style>
