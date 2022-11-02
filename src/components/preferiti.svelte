<script>
	import { createEventDispatcher } from 'svelte';

	export let valore;
	export let allungamento;
	const favourites = () => {
		select = !select;
	};
	const dispatch = createEventDispatcher();
	let chiavi = Object.keys(localStorage);
	let value;
	let hour = new Date().getHours();
	let minutes = new Date().getMinutes();

	let select = false;
	let toggleEmail = false;

	valore = '@';
</script>

<div class="sent">
	<div class="sent-header">
		<div class="first-header">
			<span class="header-span">Da</span>
			<span class="header-span">Qualsiasi data</span>
			<span class="header-span">Contiene Allegato</span>
			<span class="header-span">A</span>
			<span class="header-span">Da leggere</span>
		</div>
		<div class="first-sent-elem">
			<div class="checked" />
			<div class="minifreccia" />
		</div>
		<div class="second-sent-elem">
			<div class="refresh" />
		</div>
		<div class="third-sent-elem">
			<div class="threedots" />
		</div>
		<div class="fourth-sent-elem" />
		<div class="darkspace" class:whitespaceLungo={allungamento} class:whitespaceCorto={!allungamento}>
			<div class="whitespace" class:whitespaceLungo={allungamento} class:whitespaceCorto={!allungamento}>
				<div class="numbers">1 - {Object.keys(localStorage).length} di {Object.keys(localStorage).length}</div>
				<div class="frecce">
					<div class="first-arrow" />
					<div class="second-arrow" />
				</div>
				<div class="i" />
			</div>
		</div>
	</div>

	<div class="contieni-mail">
		{#each chiavi as chiave}
			{#if chiave.includes('speciale')}
				<nobr>
					<div
						id="email--container"
						class:visible={JSON.stringify(JSON.parse(localStorage.getItem(`${chiave}`))[1].email).includes(valore)
							? true
							: false}
						class:invisible={JSON.stringify(JSON.parse(localStorage.getItem(`${chiave}`))[1].email).includes(valore)
							? false
							: true}
						on:mouseenter={() => {
							value = JSON.parse(localStorage.getItem(`${chiave}`))[0];
							if (chiave === `speciale${JSON.parse(localStorage.getItem(chiave))[0]}`) {
								toggleEmail = true;
							}
						}}
						on:mouseleave={() => {
							if (chiave.includes(JSON.parse(localStorage.getItem(`${chiave}`))[0])) {
								value = '';
								toggleEmail = false;
							}
						}}
						class:toggled={chiave === `speciale${value}` ? toggleEmail : console.log('nono')}
						on:click={() => {
							let cambiare = true;
							let name = JSON.parse(localStorage.getItem(`${chiave}`))[1].name.first;
							let surname = JSON.parse(localStorage.getItem(`${chiave}`))[1].name.last;
							let title = JSON.parse(localStorage.getItem(`${chiave}`))[1].name.title;
							let city = JSON.parse(localStorage.getItem(`${chiave}`))[1].location.city;
							let state = JSON.parse(localStorage.getItem(`${chiave}`))[1].location.country;
							let phoneNumber = JSON.parse(localStorage.getItem(`${chiave}`))[1].phone;
							let loginUUID = JSON.parse(localStorage.getItem(`${chiave}`))[1].login.uuid;
							let picture = JSON.parse(localStorage.getItem(`${chiave}`))[1].picture.thumbnail;
							let username = JSON.parse(localStorage.getItem(`${chiave}`))[1].login.username;
							let email = JSON.parse(localStorage.getItem(`${chiave}`))[1].email;
							let ore = 5;
							let minuti = 5;
							let persona = {
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
							};
							dispatch('changepreferiti', persona);
						}}
					>
						<div class="contenitore-piccolo">
							<div class="preferiti-div" />

							<div class="star" class:selected={select} on:click={favourites} on:click={console.log(chiave)} />
							<div class="prima-pt">
								<span class="received-email frst"
									>{JSON.parse(localStorage.getItem(`${chiave}`))[1].login.username}</span
								>
								<span class="received-email scnd">{JSON.parse(localStorage.getItem(`${chiave}`))[1].login.uuid}</span>
								<div class="email-text">
									<p>
										Salve, sono {JSON.parse(localStorage.getItem(`${chiave}`))[1].name.title}
										{JSON.parse(localStorage.getItem(`${chiave}`))[1].name.first}
										{JSON.parse(localStorage.getItem(`${chiave}`))[1].name.last} e vorrei collaborare con voi. Vivo a {JSON.parse(
											localStorage.getItem(`${chiave}`)
										)[1].location.city}, in {JSON.parse(localStorage.getItem(`${chiave}`))[1].location.country} ma sono disponibile
										anche a lavoro da remoto. Chiamate pure al numero {JSON.parse(localStorage.getItem(`${chiave}`))[1]
											.phone}
									</p>
								</div>
							</div>
						</div>

						<div
							class="whitespace-due"
							class:white-toggle={chiave === `speciale${value}` ? toggleEmail : console.log('nonoe')}
							class:allungaWhitespace={allungamento}
							class:WhitespaceNormale={!allungamento}
						>
							<span
								class="dotss"
								class:dotss-toggled={chiave === `speciale${value}` ? toggleEmail : console.log('nono')}>...</span
							>
							<span class="dob" class:showin={chiave === `speciale${value}` ? toggleEmail : console.log('nono')}
								>{hour}:{minutes}</span
							>
							<div class="toggled-content">
								<div class="first oo" class:showing={chiave === `speciale${value}` ? toggleEmail : console.log('nono')}>
									<div class="first-img w" />
									<div class="black-box">
										<nobr>Archivia</nobr>
									</div>
								</div>
								<div
									class="second oo"
									class:showing={chiave === `speciale${value}` ? toggleEmail : console.log('nono')}
								>
									<div class="second-img w">
										<div class="black-box">
											<nobr>Elimina</nobr>
										</div>
									</div>
								</div>
								<div class="third oo" class:showing={chiave === `speciale${value}` ? toggleEmail : console.log('nono')}>
									<div class="third-img w">
										<div class="black-box">
											<nobr>Segna come da leggere</nobr>
										</div>
									</div>
								</div>
								<div
									class="fourth oo"
									class:showing={chiave === `speciale${value}` ? toggleEmail : console.log('nono')}
								>
									<div class="fourth-img w">
										<div class="black-box">
											<nobr>Posticipa</nobr>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="right-Space-shrunk" />
					</div>
				</nobr>
			{/if}
		{/each}
	</div>
</div>

<style>
	.contieni-mail {
		height: 1000px;
		overflow-y: scroll;
	}

	.dotss-toggled {
		position: relative;
		right: 26px;
	}

	.white-toggle {
		min-width: 250px;
	}

	.showin {
		visibility: hidden;
	}

	.showing {
		visibility: visible;
	}

	.second {
		left: 20px;
	}

	.third {
		left: 25px;
	}

	.fourth {
		left: 30px;
	}

	.w {
		position: relative;
		left: 8px;
		top: 8px;
	}

	.oo {
		width: 38px;
		height: 38px;
		border-radius: 100%;
		position: relative;
		left: 16px;
		margin-right: 1px;
	}

	.first-img {
		background-image: url('/images/email-content-first.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 20px;
		width: 20px;
	}

	.second-img {
		background-image: url('/images/bin-email-content.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 20px;
		width: 20px;
	}

	.third-img {
		background-image: url('/images/mail-email-content.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 20px;
		width: 20px;
	}

	.fourth-img {
		background-image: url('/images/schedule_baseline_nv700_20dp.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 20px;
		width: 20px;
	}

	.oo:hover {
		background-color: #d7d9dc;
	}

	.toggled-content {
		display: flex;
		flex-direction: row;
		visibility: hidden;
		position: relative;
		right: 8px;
		z-index: 2;
		align-items: center;
	}

	.whitespaceLungo {
		width: 326px;
		right: 20px;
	}

	.whitespaceCorto {
		width: 285px;
		right: 61px;
	}

	.contenitore-piccolo {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.toggled {
		border: 1px solid #f6f8fc;
		border-bottom: 2px solid #f6f8fc;
		box-shadow: 0px 2px 9px -2px rgba(0, 0, 0, 0.75);
		-webkit-box-shadow: 0px 2px 9px -2px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 0px 2px 9px -2px rgba(0, 0, 0, 0.75);
		z-index: 2;
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

	.invisible {
		height: 0;
		border: 0;
	}

	.visible {
		height: 38px;
		border: 1px solid #f6f8fc;
	}

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

	.header-span {
		border: 1px solid black;
		text-align: center;
		border-radius: 5px;
		padding-inline: 5px;
		padding-top: 3px;
		padding-bottom: 3px;
		position: relative;
		top: 10px;
		left: 20px;
	}

	.first-header {
		height: 46px;
		position: relative;
		align-self: flex-start;
		border-top-left-radius: 10px;
		width: 100%;
		z-index: 10;
	}

	.numbers {
		font-size: 12px;
		position: relative;
		top: 70px;
		left: 67px;
	}

	.frecce {
		display: flex;
		flex-direction: row;
		position: relative;
		top: 68px;
		left: 86px;
	}

	.i {
		height: 15px;
		width: 15px;
		background-image: url('/images/info.png');
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		left: 135px;
		top: 70px;
	}

	.first-arrow {
		height: 20px;
		width: 20px;
		background-image: url('/images/mail-head-1.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.second-arrow {
		height: 20px;
		width: 20px;
		background-image: url('/images/mail-head-2.png');
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		left: 18px;
	}

	.sent-header {
		display: flex;
		flex-direction: row;
		z-index: 10;
		position: static;
		height: 96px;
		align-items: center;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom: 2px solid #f6f8fc;
		background-color: white;
	}

	.first-sent-elem {
		display: flex;
		flex-direction: row;
		width: 40px;
		height: 20px;
		position: absolute;
		top: 130px;
		left: 270px;
	}

	.second-sent-elem {
		position: absolute;
		left: 330px;
		top: 130px;
		width: 20px;
		height: 20px;
	}

	.third-sent-elem {
		position: absolute;
		left: 100px;
		top: 0px;
		width: 20px;
		height: 20px;
	}

	.whitespace {
		height: 30px;
		position: fixed;
		top: 62px;
		right: 59px;
		background-color: white;
		overflow: hidden;
		z-index: 2;
		display: flex;
		flex-direction: row;
		border-top-right-radius: 10px;
	}

	.darkspace {
		background-color: #f6f8fc;
		height: 30px;
		position: fixed;
		top: 60px;
		right: 59px;
		overflow: hidden;
		z-index: 2;
	}

	.checked {
		height: 20px;
		width: 20px;
		background-image: url('/images/check_box_outline_blank_baseline_nv700_20dp.png');
		background-repeat: no-repeat;
		background-size: cover;
		z-index: 6;
	}

	.minifreccia {
		height: 20px;
		width: 20px;
		background-image: url('/images/minifreccia.png');
		background-repeat: no-repeat;
		background-size: cover;
		justify-self: flex-start;
	}

	.refresh {
		height: 20px;
		width: 20px;
		background-image: url('/images/refresh.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.threedots {
		height: 20px;
		width: 20px;
		background-image: url('/images/threedots.png');
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		top: 130px;
		left: 273px;
	}

	.star {
		background-image: url('/images/stella-gialla.png');
		background-repeat: no-repeat;
		background-size: contain;
		height: 20px;
		min-width: 20px;
		position: relative;
		z-index: 12;
		left: 45px;
	}

	.preferiti-div {
		background-image: url('/images/check_box_outline_blank_baseline_nv700_20dp.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: 20px;
		width: 20px;
		height: 20px;
		opacity: 0.25;
		position: absolute;
		left: 16px;
	}

	.received-email {
		position: relative;
		left: 55px;
		font-size: small;
	}

	.email-text {
		position: absolute;
		left: 270px;
		font-size: small;
	}

	.whitespace-due {
		text-align: right;
		height: 24px;
		position: absolute;
		z-index: 3;
		background-color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.allungaWhitespace {
		width: 190px;
		right: 240px;
	}

	.WhitespaceNormale {
		width: 150px;
		right: 280px;
	}

	.dob {
		position: relative;
		left: 90px;
		font-size: smaller;
	}

	@media screen and (max-width: 1175px) {
		.whitespace {
			height: 28px;
			background-color: white;
		}
	}
	@media screen and (max-width: 836px) {
		.invisible {
			max-height: 0;
			border: 0;
		}

		#email--container {
			height: 80px;
		}

		.whitespace-due {
			right: 100px;
			position: fixed;
			width: 50px;
			margin-bottom: 45px;
		}

		.email-text {
			position: relative;
			left: -110px;
			z-index: 10;
		}

		.frst {
			top: 0;
			left: -110px;
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
			left: -110px;
		}

		.dob {
			left: 90px;
		}

		.star {
			left: 396px;
			top: 18px;
			z-index: 21;
			display: block;
			position: relative;
			padding-left: 20px;
			width: 160px;
			background-color: white;
		}

		.darkspace {
			top: 60px;
			right: 59px;
		}

		.white-toggle {
			min-width: 150px;
		}
	}

	@media screen and (max-width: 780px) {
		.whitespace {
			display: none;
		}
		.right-Space-shrunk {
			display: flex;
		}

		.whitespace-due {
			right: 30px;
			position: absolute;
		}
		.darkspace {
			display: none;
		}
		.sent {
			width: 460px;
		}
	}
</style>
