<script>
	import { createEventDispatcher } from 'svelte';
	import { getOggetto, getOggettoSeSessPieno } from '../store';
	export let allungamento;
	export let valore;

	const favourites = () => {
		select = !select;
	};

	let keys = Object.keys(sessionStorage);
	let dispatch = createEventDispatcher();
	let hour = new Date().getHours();
	let minutes = new Date().getMinutes();
	let select = false;
	let toggleEmail = false;
	let value;

	function emailSelected() {
		toggleEmail = !toggleEmail;
	}

	valore = '@';

	$: getOggettoSeSessPieno();
	$: promise = getOggetto();
</script>

{#if Object.keys(sessionStorage).length < 50}
	{#await promise then emailDatas}
		<nobr>
			<div
				id="email--container"
				class:visible={emailDatas[1].email.includes(valore) ? true : false}
				class:invisible={emailDatas[1].email.includes(valore) ? false : true}
				on:mouseenter={emailSelected}
				on:mouseleave={emailSelected}
				on:click|self={() => {
					let cambiare = true;
					let name = emailDatas[1].name.first;
					let surname = emailDatas[1].name.last;
					let title = emailDatas[1].name.title;
					let city = emailDatas[1].location.city;
					let state = emailDatas[1].location.country;
					let phoneNumber = emailDatas[1].phone;
					let loginUUID = emailDatas[1].login.uuid;
					let picture = emailDatas[1].picture.thumbnail;
					let username = emailDatas[1].login.username;
					let email = emailDatas[1].email;
					let tutto = emailDatas;
					let ore = hour;
					let minuti = minutes;

					let person = {
						name,
						surname,
						title,
						city,
						state,
						phoneNumber,
						loginUUID,
						username,
						email,
						picture,
						ore,
						minuti,
						cambiare,
						tutto,
					};

					dispatch('change', person);
				}}
				class:toggled={toggleEmail}
			>
				<div class="preferiti-div"><div class="preferiti" /></div>
				<div
					class="star"
					class:selected={select}
					on:click={favourites}
					on:click={localStorage.setItem(`speciale${emailDatas[0]}`, JSON.stringify(emailDatas))}
				/>
				<div class="prima-pt">
					<span class="received-email frst">{emailDatas[1].login.username}</span>
					<span class="received-email scnd"> Utente {emailDatas[1].login.uuid}</span>

					<div class="email-text">
						<p>
							Salve, sono {emailDatas[1].name.title}
							{emailDatas[1].name.first}
							{emailDatas[1].name.last} e vorrei collaborare con voi. Vivo a {emailDatas[1].location.city}, in {emailDatas[1]
								.location.country} ma sono disponibile anche a lavoro da remoto. Chiamate pure al numero {emailDatas[1]
								.phone}
						</p>
					</div>
				</div>
				<div
					class="whitespace"
					class:white-toggle={toggleEmail}
					class:allungaWhitespace={allungamento}
					class:WhitespaceNormale={!allungamento}
				>
					<span class="dotss" class:dotss-toggled={toggleEmail}>...</span><span class="dob" class:showin={toggleEmail}
						>{hour}:{minutes}</span
					>
					<div class="toggled-content">
						<div class="first oo" class:showing={toggleEmail}>
							<div class="first-img" />
							<div class="black-box">
								<nobr>Archivia</nobr>
							</div>
						</div>
						<div class="second oo" class:showing={toggleEmail}>
							<div class="second-img">
								<div class="black-box">
									<nobr>Elimina</nobr>
								</div>
							</div>
						</div>
						<div class="third oo" class:showing={toggleEmail}>
							<div class="third-img">
								<div class="black-box">
									<nobr>Segna come da leggere</nobr>
								</div>
							</div>
						</div>
						<div class="fourth oo" class:showing={toggleEmail}>
							<div class="fourth-img">
								<div class="black-box">
									<nobr>Posticipa</nobr>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="right-Space-shrunk"><span class="dobo">{hour}:{minutes}</span></div>
			</div>
		</nobr>
	{:catch}
		Errore
	{/await}
{:else}
	<!-- class:invisible={JSON.parse(sessionStorage.getItem(`${key}`))[1].Email.includes(valore) ? true : false} -->

	{#each keys as key}
		<nobr>
			<div
				id="email--container"
				class:visible={JSON.stringify(JSON.parse(sessionStorage.getItem(`${key}`))[1].email).includes(valore)
					? true
					: false}
				class:invisible={JSON.stringify(JSON.parse(sessionStorage.getItem(`${key}`))[1].email).includes(valore)
					? false
					: true}
				on:mouseenter={() => {
					value = JSON.parse(sessionStorage.getItem(`${key}`))[0];

					if (key == value) {
						toggleEmail = true;
					} else {
						console.log('ciao');
					}
				}}
				on:mouseleave={() => {
					if (key == value) {
						value = '';

						toggleEmail = false;
					} else {
						console.log('no');
					}
				}}
				class:toggled={key == value ? toggleEmail : console.log('nono')}
				on:click|self={() => {
					let cambiare = true;
					let name = JSON.parse(sessionStorage.getItem(`${key}`))[1].name.first;
					let surname = JSON.parse(sessionStorage.getItem(`${key}`))[1].name.last;
					let title = JSON.parse(sessionStorage.getItem(`${key}`))[1].name.title;
					let city = JSON.parse(sessionStorage.getItem(`${key}`))[1].location.city;
					let state = JSON.parse(sessionStorage.getItem(`${key}`))[1].location.country;
					let phoneNumber = JSON.parse(sessionStorage.getItem(`${key}`))[1].phone;
					let loginUUID = JSON.parse(sessionStorage.getItem(`${key}`))[1].login.uuid;
					let picture = JSON.parse(sessionStorage.getItem(`${key}`))[1].picture.thumbnail;
					let username = JSON.parse(sessionStorage.getItem(`${key}`))[1].login.username;
					let email = JSON.parse(sessionStorage.getItem(`${key}`))[1].email;
					let ore = hour;
					let minuti = minutes;
					let tutto = JSON.parse(sessionStorage.getItem(`${key}`));
					let person = {
						name,
						surname,
						title,
						city,
						state,
						phoneNumber,
						loginUUID,
						username,
						email,
						picture,
						ore,
						minuti,
						cambiare,
						tutto,
					};

					dispatch('change', person);
				}}
			>
				<div class="preferiti-div"><div class="preferiti" /></div>

				<div
					class="star"
					class:selected={select}
					on:click={value == key
						? (localStorage.setItem(`speciale${key}`, sessionStorage.getItem(`${key}`)), favourites)
						: console.log('ciao')}
				/>
				<div class="prima-pt">
					<span class="received-email frst">{JSON.parse(sessionStorage.getItem(`${key}`))[1].login.username}</span>
					<span class="received-email scnd"> Utente {JSON.parse(sessionStorage.getItem(`${key}`))[1].login.uuid}</span>

					<div class="email-text">
						<p>
							Salvee, sono {JSON.parse(sessionStorage.getItem(`${key}`))[1].name.title}
							{JSON.parse(sessionStorage.getItem(`${key}`))[1].name.first}
							{JSON.parse(sessionStorage.getItem(`${key}`))[1].name.last} e vorrei collaborare con voi. Vivo a {JSON.parse(
								sessionStorage.getItem(`${key}`)
							)[1].location.city}, in {JSON.parse(sessionStorage.getItem(`${key}`))[1].location.country} ma sono disponibile
							anche a lavoro da remoto. Chiamate pure al numero {JSON.parse(sessionStorage.getItem(`${key}`))[1].phone}
						</p>
					</div>
				</div>
				<div
					class="whitespace"
					class:white-toggle={key == value ? toggleEmail : console.log('nono')}
					class:allungaWhitespace={allungamento}
					class:WhitespaceNormale={!allungamento}
				>
					<span class="dob" class:showin={key == value ? toggleEmail : console.log('nono')}>{hour}:{minutes}</span>
					<div class="toggled-content">
						<div class="first oo" class:showing={key == value ? toggleEmail : console.log('nono')}>
							<div class="first-img" />
							<div class="black-box">
								<nobr>Archivia</nobr>
							</div>
						</div>
						<div class="second oo" class:showing={key == value ? toggleEmail : console.log('nono')}>
							<div class="second-img">
								<div class="black-box">
									<nobr>Elimina</nobr>
								</div>
							</div>
						</div>
						<div class="third oo" class:showing={key == value ? toggleEmail : console.log('nono')}>
							<div class="third-img">
								<div class="black-box">
									<nobr>Segna come da leggere</nobr>
								</div>
							</div>
						</div>
						<div class="fourth oo" class:showing={key == value ? toggleEmail : console.log('nono')}>
							<div class="fourth-img">
								<div class="black-box">
									<nobr>Posticipa</nobr>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="right-Space-shrunk"><span class="dobo">{hour}:{minutes}</span></div>
			</div>
		</nobr>
	{/each}
{/if}

<style>
	.invisible {
		height: 0;
		border: 0;
	}
	.visible {
		height: 38px;
		border: 1px solid #f6f8fc;
	}
	.dob {
		padding-left: 30px;
		position: relative;
		left: 60px;

		font-size: small;
	}
	#email--container {
		display: flex;
		flex-direction: row;
		row-gap: 10px;

		max-width: 100%;
		position: relative;

		overflow: hidden;
		align-items: center;
	}

	.whitespace {
		text-align: right;
		height: 24px;

		position: absolute;

		/* background-color: white; */
		/* overflow: hidden; */
		z-index: 9;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.allungaWhitespace {
		width: 230px;
		right: 220px;
	}
	.WhitespaceNormale {
		width: 180px;
		right: 290px;
	}

	.right-Space-shrunk {
		min-width: 40px;
		height: 80px;
		background-color: white;
		justify-self: flex-end;
		position: absolute;
		right: 0;
		display: none;
	}
	.scnd {
		display: none;
	}

	.star {
		background-image: url('/images/star_baseline_nv700_20dp.png');
		background-repeat: no-repeat;
		background-size: contain;
		height: 20px;
		min-width: 20px;
		position: relative;
		z-index: 12;
		opacity: 0.4;
	}
	.selected {
		background-image: url('/images/stella-gialla.png');
		opacity: 1;
	}
	.preferiti {
		position: relative;
		left: 10px;
		width: 20px;
		height: 20px;
		background-image: url('/images/check_box_outline_blank_baseline_nv700_20dp.png');
		background-size: cover;
		background-repeat: no-repeat;
		opacity: 0.4;
	}
	.star {
		position: relative;
		left: 20px;
		bottom: 2px;
	}
	.received-email {
		position: relative;
		left: 35px;
		min-width: 150px;
		overflow-x: hidden;
		top: 20px;
		font-weight: 700;
	}
	.email-text {
		padding-bottom: 10px;
		margin-left: 235px;

		width: 40vw;
		overflow-x: hidden;
	}

	.frst {
		position: relative;
		top: 28px;
	}
	.toggled {
		border: 1px solid #f6f8fc;
		border-bottom: 2px solid #f6f8fc;
		box-shadow: 0px 2px 9px -2px rgba(0, 0, 0, 0.75);
		-webkit-box-shadow: 0px 2px 9px -2px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 0px 2px 9px -2px rgba(0, 0, 0, 0.75);
		z-index: 2;
	}
	.white-toggle {
		border-right: 1px solid #f6f8fc;
		width: 210px;
	}
	.dotss {
		position: relative;
		left: 38px;
	}

	.dotss-toggled {
		right: 65px;
	}
	.showin {
		visibility: hidden;
	}
	.showing {
		visibility: visible;
	}
	.toggled-content {
		display: flex;
		flex-direction: row;
		visibility: hidden;
		position: relative;
		right: 30px;
	}
	.first {
		width: 30px;
		height: 30px;
		position: relative;
		left: 5px;
	}
	.second {
		width: 30px;
		height: 30px;
		position: relative;
		left: 10px;
		z-index: 14;
	}
	.third {
		width: 30px;
		height: 30px;
		position: relative;
		left: 15px;
	}
	.fourth {
		width: 30px;
		height: 30px;
		position: relative;
		left: 20px;
	}
	.oo {
		border-radius: 100%;
	}
	.first-img {
		background-image: url('/images/email-content-first.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 20px;
		width: 20px;
		position: relative;
		left: 5px;
		top: 5px;
	}
	.second-img {
		background-image: url('/images/bin-email-content.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 20px;
		width: 20px;
		position: relative;
		left: 5px;
		top: 5px;
	}
	.third-img {
		background-image: url('/images/mail-email-content.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 20px;
		width: 20px;
		position: relative;
		left: 5px;
		top: 5px;
	}
	.fourth-img {
		background-image: url('/images/schedule_baseline_nv700_20dp.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 20px;
		width: 20px;
		position: relative;
		left: 5px;
		top: 5px;
	}
	.oo:hover {
		background-color: #d7d9dc;
	}
	.dobo {
		display: none;
	}
	@media screen and (max-width: 1175px) {
		.whitespace {
			height: 28px;
			background-color: white;
		}
	}
	@media screen and (max-width: 836px) {
		#email--container {
			height: 80px;
		}
		.invisible {
			max-height: 0;
		}
		.whitespace {
			position: absolute;
			top: 20px;
		}
		.email-text {
			position: relative;
			right: 201px;
		}
		.frst {
			top: 0;
		}
		.prima-pt {
			display: flex;
			flex-direction: column;
			position: relative;
			top: 6px;
			right: 25px;
		}
		.scnd {
			display: block;
			position: relative;
			top: 6px;
		}
		.dob {
			left: 50px;
			bottom: 20px;
		}
		.star {
			left: 365px;
			top: 18px;
		}
	}
	@media screen and (max-width: 780px) {
		.whitespace {
			position: absolute;
			top: 5px;
			right: 50px;
			height: 18px;
		}
		.right-Space-shrunk {
			display: flex;

			position: absolute;
			right: 20px;
		}
		.dobo {
			display: block;
			position: relative;
			top: 10px;
			z-index: 9;
		}
		.toggled-content {
			z-index: 10;
		}
	}
</style>
