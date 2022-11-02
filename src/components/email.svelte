<script>
	import { createEventDispatcher } from 'svelte';
	import EmailContent from './emailContent.svelte';
	import EmailHeader from './emailHeader.svelte';

	export let allungamento;
	export let valore;

	const timesToBeRendered = Object.keys(sessionStorage).length < 49 ? 50 : 1;
	const change = (e) => {
		let tutto = e.detail.tutto;
		let cambiare = e.detail.cambiare;
		let name = e.detail.name;
		let surname = e.detail.surname;
		let title = e.detail.title;
		let city = e.detail.city;
		let state = e.detail.state;
		let phoneNumber = e.detail.phoneNumber;
		let loginUUID = e.detail.loginUUID;
		let picture = e.detail.picture;
		let username = e.detail.username;
		let email = e.detail.email;
		let ore = e.detail.ore;
		let minuti = e.detail.minuti;
		let person = {
			name,
			surname,
			title,
			city,
			state,
			phoneNumber,
			loginUUID,
			picture,
			username,
			email,
			ore,
			minuti,
			cambiare,
			tutto,
		};
		dispatch('cambio', person);
	};

	const dispatch = createEventDispatcher();
</script>

<div class="email">
	<EmailHeader {allungamento} />
	<div class="emailscroll">
		{#each new Array(timesToBeRendered).fill(0) as _}
			<EmailContent on:change={change} {valore} {allungamento} />
		{/each}
	</div>
</div>

<style>
	.email {
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

	.emailscroll {
		overflow-y: scroll;
		scroll-behavior: smooth;

		max-height: 700px;
	}

	@media screen and (max-width: 780px) {
		.email {
			width: 460px;
		}
	}
</style>
