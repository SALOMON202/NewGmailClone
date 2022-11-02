<script>
	import { Gmail } from '../iconservice';
	import Input from './Input.svelte';

	const activate = () => {
		deactivated = false;
	};

	let username;
	let deactivated = true;
</script>

<main>
	<div class="login-div">
		<div class="loadingBar" class:deactivated>
			<div class="movingpoint zero" />
		</div>
		<div class="row">
			{@html Gmail}
		</div>
		<div class="row center">
			<h5>Accedi</h5>
			<h6>Continua su Gmail</h6>
		</div>
		<form on:submit|preventDefault on:submit={activate}>
			<div class="input">
				<Input
					etichetta="Indirizzo email o numero di telefono"
					class="ciao"
					label=" "
					bind:value={username}
					type="email"
					required
				/>
			</div>
			<button class="not indirizzo">Non ricordi l'indirizzo email?</button>
			<p class="tuocomputer">
				Non si tratta del tuo computer?Utilizza la modalità ospite<br />
				per accedere privatamente.<button class="not">Scopri di più</button>
			</p>

			<div class="last-flex">
				<button class="not account">Crea un account</button>

				<button class="avanti">Avanti</button>
			</div>
		</form>
	</div>
</main>

<style>
	main {
		font-family: roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
	}
	.login-div {
		margin: 0 auto;
		border: 1px solid #d7d9dc;
		position: relative;
		top: 6vh;
		width: 450px;
		height: 450px;
		border-radius: 10px;
		padding-top: 50px;
		display: flex;
		align-items: center;
		flex-direction: column;
		overflow-x: hidden;
	}

	.loadingBar {
		position: relative;
		height: 5px;
		width: 430px;
		bottom: 51px;
	}

	.movingpoint {
		height: 6px;
		width: 100px;
		position: relative;
		left: 0;
		background-color: #1a73e8;
		animation-name: movingpoint;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}

	.zero {
		animation-name: zero;
	}

	.row {
		position: relative;
		bottom: 8px;
	}

	h5 {
		font-size: 25px;
		text-indent: 25px;
		position: relative;
		bottom: 38px;
		font-weight: 200;
	}
	h6 {
		position: relative;
		bottom: 65px;
		font-size: 15px;
		font-weight: 100;
	}

	.input {
		position: relative;
		bottom: 10px;
	}

	.indirizzo {
		position: relative;
		bottom: 55px;
		font-size: 14px;
	}

	.not {
		border-radius: 4px;
		color: #1a73e8;
		display: inline-block;
		font-weight: 500;
		letter-spacing: 0.25px;
		outline: 0;
		position: relative;
		background-color: transparent;
		cursor: pointer;
		font-size: inherit;
		padding: 0;
		text-align: left;
		border: 0;
	}
	.avanti {
		width: 90px;
		border: 0;
		cursor: pointer;
		border-radius: 4px;
		background-color: #1a73e8;
		color: white;
		padding: 8px 12px;
		font-weight: bold;
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
		position: relative;
		left: 170px;
		height: 35px;
	}

	.tuocomputer {
		position: relative;
		bottom: 25px;
		font-size: 14px;
	}
	.last-flex {
		display: flex;
		align-items: center;
	}

	.account {
		position: relative;
		top: 10px;
		font-size: 14px;
		height: 30px;
		width: 118px;
		text-indent: 5px;
	}
	.account:hover {
		background-color: #edededd8;
	}

	@keyframes zero {
		from {
			left: 0;
		}
		to {
			left: 100%;
		}
	}
	.deactivated {
		display: none;
	}

	@media screen and (max-width: 600px) {
		.login-div {
			width: unset;
			height: unset;
			border: none;
		}
	}
</style>
