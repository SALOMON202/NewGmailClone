<script>
	import { createEventDispatcher } from 'svelte';

	const placeChanger = () => {
		placeholder = options[0];
	};
	const changerPlace = () => {
		placeholder = options[1];
	};
	const minimizer = () => {
		minimize = !minimize;
	};
	const putInStorage = () => {
		let id = localStorage.length + 1;
		let key = document.getElementById('dest').value;
		let obj = document.getElementById('obj').value;
		let mex = document.getElementById('mex').value;
		let date = new Date();
		let dates = String(date.getDate()).padStart(2, '0') + ' ' + date.toLocaleString('en-US', { month: 'short' });

		let objects = [key, obj, mex, id, dates];
		localStorage.setItem(`${id}`, JSON.stringify(objects));
		dispatch('addToSent', objects);
	};

	const dispatch = createEventDispatcher();
	const closeTab = () => {
		let chiudi = true;
		dispatch('close', chiudi);
	};
	const addToArray = () => {
		let aggiungi = true;
		dispatch('aggiungi', aggiungi);
	};
	const expanding = () => {
		bigger = !bigger;
	};
	let options = ['Destinatari', 'A'];
	let placeholder = 'Destinatari';

	let minimize = false;

	let bigger = false;

	let schermo;
</script>

<div class="all-black-opaco" class:display={bigger}>
	<div class="write" class:bigger class:minimized={minimize} class:ok={!minimize}>
		<div class="write-header" class:write-bigger={bigger} class:align-correct={bigger}>
			<span><nobr>Nuovo messaggio</nobr></span>
			<div class="write-side" class:side-write={bigger}>
				<div class="minimize opt" on:click={minimizer} class:min-bigger={bigger}>
					<div class="black-box">
						<nobr>Riduci a icona</nobr>
					</div>
				</div>
				<div class="expand opt" class:exp-bigger={bigger} on:click={expanding}>
					<div class="black-box">
						<nobr>{schermo}</nobr>
					</div>
				</div>
				<div class="close opt" class:clo-bigger={bigger} on:click={closeTab}>
					<div class="black-box">
						<nobr>Salva e chiudi</nobr>
					</div>
				</div>
			</div>
		</div>
		<form
			on:submit|preventDefault={putInStorage}
			on:submit|preventDefault={addToArray}
			class:annullato={minimize}
			class:ok={!minimize}
		>
			<div class="inputs" class:biggerspace={bigger}>
				<input
					type="text"
					{placeholder}
					class="input-pair first"
					id="dest"
					on:focus={changerPlace}
					on:blur={placeChanger}
					class:st-bigger={bigger}
				/>
				<input type="text" placeholder="Oggetto" class="input-pair second" id="obj" class:nd-bigger={bigger} />
				<textarea type="text" class="input-pair big" id="mex" class:rd-bigger={bigger} />
			</div>
			<div class:bottom={bigger}>
				<div class="container">
					<div class="double-button" class:button-bigger={bigger}>
						<button class="st-pt"> Invia </button>
						<button class="nd-pt">
							<div class="point-down" />
						</button>
					</div>

					<div class="bottom-write-area">
						<div class="icons" class:bottom-bigger={bigger}>
							<div class=" icona st">
								<div class="black-box">
									<nobr>Opzioni di formattazione</nobr>
								</div>
							</div>
							<div class=" icona nd">
								<div class="black-box">
									<nobr>Allega file</nobr>
								</div>
							</div>
							<div class=" icona rd">
								<div class="black-box">
									<nobr>Inserisci Link (Ctrl + K )</nobr>
								</div>
							</div>
							<div class=" icona rth">
								<div class="black-box">
									<nobr>Inserisci Emoji ( Ctrl + Maiusc-2 )</nobr>
								</div>
							</div>
							<div class=" icona fth">
								<div class="black-box">
									<nobr>Inserisci file usando drive</nobr>
								</div>
							</div>
							<div class=" icona xth">
								<div class="black-box">
									<nobr>Inserisci foto</nobr>
								</div>
							</div>
							<div class=" icona nth">
								<div class="black-box">
									<nobr>Attiva / disattiva modalità riservata</nobr>
								</div>
							</div>
							<div class="icona gth">
								<div class="black-box">
									<nobr>Inserisci firma</nobr>
								</div>
							</div>
						</div>
					</div>
					<div class=" delete" class:bigger-delete={bigger}>
						<div class="black-box">
							<nobr>Elimina bozza</nobr>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>

<style>
	.ok {
		min-height: 240px;
		height: 81%;
		max-height: 533px;
	}
	.minimized {
		min-height: 0;
		height: 0;
		max-height: 0;
		bottom: 0;
		margin-bottom: 40px;
	}
	.annullato {
		display: none;
	}

	.write {
		/* min-height: 240px;
height: 81%;
  max-height:533px; */
		width: 500px;
		background-color: white;
		position: absolute;
		box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.25);
		-webkit-box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.25);
		-moz-box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.25);
		bottom: 0;
		display: block;
		right: 80px;
		z-index: 20;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.write-header {
		display: flex;
		flex-direction: row;
		align-items: center;

		position: relative;

		height: 40px;
		width: 100%;
		background-color: #f2f6fc;
		z-index: 5;
		text-indent: 20px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		font-size: 13px;
	}
	.minimize {
		background-image: url('/images/ic_minimize_16px_2x.png');
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		left: 58%;
		z-index: 6;
		height: 18px;
		width: 18px;
	}
	.expand {
		background-image: url('/images/ic_open_in_full_16px_2x.png');
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		left: 60%;
		z-index: 5;
		height: 18px;
		width: 18px;
	}
	.close {
		background-image: url('/images/ic_close_16px_1x.png');
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		left: 62%;
		z-index: 5;
		height: 18px;
		width: 18px;
	}

	.opt:hover {
		background-color: #d7d9dc;
	}
	.minimize:hover .black-box {
		visibility: visible;
		opacity: 0.9;
		position: relative;
		right: 38px;
		top: 25px;
		width: 73px;
		text-indent: -6px;
	}
	.expand:hover .black-box {
		visibility: visible;
		opacity: 0.9;
		position: relative;
		right: 38px;
		top: 25px;
		width: 78px;
		text-indent: -6px;
	}
	.close:hover .black-box {
		visibility: visible;
		opacity: 0.9;
		position: relative;
		right: 38px;
		top: 25px;
		width: 73px;
		text-indent: -6px;
	}
	.input-pair {
		z-index: 4;
		position: relative;

		height: 40px;
		max-width: 90%;
		overflow-x: hidden;
		border: none;
		border-bottom: 1px solid #d7d9dc;
	}
	.input-pair:focus-visible {
		outline: none;
	}
	.first {
		left: 20px;

		width: 100%;
	}
	.second {
		left: 20px;

		width: 100%;
	}
	.big {
		height: 250px;
		width: 90%;
		text-align: start;

		display: block;
		white-space: pre-line;
		border-bottom: none;
		left: 20px;
		position: relative;
		top: 10px;
	}

	.double-button {
		position: relative;

		background-color: #0b57d0;
		border-radius: 20px;
		overflow: hidden;
		width: 90px;
		padding-left: 5px;
		padding-right: 5px;
		padding-top: 2px;
		padding-bottom: 2px;
		height: 30px;
	}
	.nd-pt {
		position: relative;

		background-color: #0b57d0;
		border: none;
		width: 15px;
		cursor: pointer;
	}
	.st-pt {
		background-color: #0b57d0;
		border: none;
		border-right: 1px solid #f2f6fc;
		color: #f2f6fc;
		position: relative;
		text-indent: -10px;
		height: 30px;
		width: 60px;

		cursor: pointer;
	}
	/* transition-property: transform,opacity;
    transition-duration: .15s;
    transition-timing-function: cubic-bezier(0.4,0,0.2,1); */

	.point-down {
		height: 15px;
		width: 15px;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('/images/invia-btn.png');
		position: relative;
		top: 3px;
	}

	.icons {
		width: 280px;

		height: 30px;
		position: relative;
		right: 20px;
		top: 3px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
	.icona:hover {
		background-color: #d7d9dc;
	}
	.icona {
		width: 20px;
		height: 20px;

		border-radius: 7px;
		position: relative;
		top: 3px;
		left: 15px;
	}
	@media screen and (max-width: 956px) {
		.write {
			height: 426px;
		}
	}
	.st {
		background-image: url('/images/primo-scrivi-20.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.st:hover .black-box {
		visibility: visible;
		opacity: 0.9;
		position: relative;
		bottom: 22px;
		right: 65px;
	}
	.nd {
		background-image: url('/images/secondo-scrivi-20.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.nd:hover .black-box {
		visibility: visible;
		opacity: 0.9;
		position: relative;
		bottom: 22px;
		right: 25px;
	}
	.rd {
		background-image: url('/images/terzo-scrivi-20.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.rd:hover .black-box {
		visibility: visible;
		opacity: 0.9;
		position: relative;
		bottom: 22px;
		right: 50px;
	}
	.rth {
		background-image: url('/images/quarto-scrivi-20.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.rth:hover .black-box {
		visibility: visible;
		opacity: 0.9;
		position: relative;
		bottom: 22px;
		right: 70px;
	}
	.fth {
		background-image: url('/images/quinto-scrivi-20.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.fth:hover .black-box {
		visibility: visible;
		opacity: 0.9;
		position: relative;
		bottom: 22px;
		right: 70px;
	}
	.xth {
		background-image: url('/images/sesto-scrivi-20.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.xth:hover .black-box {
		visibility: visible;
		opacity: 0.9;
		position: relative;
		bottom: 22px;
		right: 30px;
	}
	.nth {
		background-image: url('/images/settimo-scrivi-20.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.nth:hover .black-box {
		visibility: visible;
		opacity: 0.9;
		position: relative;
		bottom: 22px;
		right: 30px;
	}
	.gth {
		background-image: url('/images/ottavo-scrivi.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.gth:hover .black-box {
		visibility: visible;
		opacity: 0.9;
		position: relative;
		bottom: 22px;
		right: 70px;
	}
	.nth {
		background-image: url('/images/settimo-scrivi-20.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.nth:hover .black-box {
		visibility: visible;
		opacity: 0.9;
		position: relative;
		bottom: 22px;
		right: 30px;
	}
	.delete {
		background-image: url('/images/cestino-scrivi-20.png');
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		height: 24px;
		width: 24px;
		right: 20px;
		top: 3px;
		border-radius: 5px;
	}

	.delete:hover {
		background-color: #d7d9dc;
	}

	.bigger {
		width: unset;
		min-height: 85%;
		top: 7.5%;
		height: 87%;
		right: 200px;
		left: 200px;
	}

	.clo-bigger {
		left: 0;
		right: 12%;
	}
	.min-bigger {
		left: 0;
		right: 13%;
	}
	.exp-bigger {
		left: 0;
		right: 11%;
		background-image: url('/images/ic_close_fullscreen_16px_2x.png');
	}
	.st-bigger {
		min-width: calc(100vw - 400px - 27px);
	}
	.nd-bigger {
		min-width: calc(100vw - 400px - 27px);
	}
	.rd-bigger {
		min-height: 100%;
		min-width: calc(100vw - 400px - 27px);
	}
	.biggerspace {
		display: flex;
		flex-direction: column;
		width: 70vw;
	}
	.button-bigger {
		position: relative;
		top: 50%;
	}
	.bottom-bigger {
		position: relative;
		bottom: 0;
		left: 0;
	}

	.bigger-delete {
		position: relative;
		right: 0;
	}
	.display {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.25);
		z-index: 19;
	}
	.align-correct {
		justify-content: space-between;
	}
	.write-side {
		max-width: 50px;
		display: flex;
		flex-direction: row;
		position: relative;
		left: 270px;
	}
	.side-write {
		left: -20px;
	}

	.container {
		display: flex;
		flex-direction: row;
		position: absolute;
		bottom: 20px;
		left: 15px;
		width: calc(100% - 15px);
		z-index: 4;
	}
</style>
