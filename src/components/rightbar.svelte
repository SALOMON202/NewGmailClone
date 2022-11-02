<script>
	import { dash } from '../iconservice';
	import { createEventDispatcher } from 'svelte';
	let ruota;
	let dispatch = createEventDispatcher();
	let dxPiccolo = false;
	let chiudiDX = () => {
		dxPiccolo = !dxPiccolo;
		ruota = !ruota;
		dispatch('dxPiccolo', dxPiccolo);
	};
</script>

<div class="backgroundBar" class:grande={!dxPiccolo} class:piccolo={dxPiccolo}>
	<div class="rightbar" class:grande={!dxPiccolo} class:piccoloBack={dxPiccolo}>
		<div class="first-part">
			<div class="cont one" class:piccola={dxPiccolo}>
				<div class=" right calendario" />
				<div class="black-box ">
					<nobr> Calendario</nobr>
				</div>
			</div>
			<div class="cont two" class:piccola={dxPiccolo}>
				<div class=" right keep" />
				<div class="black-box ">
					<nobr> Keep</nobr>
				</div>
			</div>
			<div class="cont three">
				<div class=" right tasks" class:piccola={dxPiccolo} />
				<div class="black-box ">
					<nobr> Tasks</nobr>
				</div>
			</div>
			<div class="cont four" class:piccola={dxPiccolo}>
				<div class=" right contatti" />
				<div class="black-box ">
					<nobr> Contatti</nobr>
				</div>
			</div>
		</div>
		<div class="second-part">
			<div class="dash">
				{@html dash}
			</div>
			<div class="cont five" class:piccola={dxPiccolo}>
				<div class="right plus" />
				<div class="black-box ">installa componenti aggiuntivi</div>
			</div>
		</div>
		<div class="special-cont" class:spunta={ruota}>
			<div class="cont six" class:solido={ruota} class:ruota on:click={chiudiDX}>
				<div class="right arrow" />
				<div class="black-box ">Nascondi riquadro laterale</div>
			</div>
		</div>
	</div>
</div>

<style>
	.spunta:hover {
		width: 90px;
		transition: width 1s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
	.solido {
		z-index: 20;
	}
	.spunta {
		right: -35px;
	}
	.ruota {
		transform: rotate(180deg);
	}
	.backgroundBar {
		display: inline-block;
		height: 100%;
		transition: width 0.5s;
		position: fixed;
		right: 0;
		background-color: #f6f8fc;
		overflow: hidden;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.rightbar {
		display: block;
		height: 100%;

		position: fixed;
		right: 0;
		background-color: #f6f8fc;
		overflow: hidden;
		z-index: 15;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.grande {
		width: 60px;
	}
	.piccolo {
		width: 0;
	}
	.piccola {
		visibility: hidden;
	}
	.piccoloBack {
		width: 20px;
	}
	.right {
		height: 23px;
		width: 23px;
		position: relative;
		left: 8px;
		transition: visibility 0.25s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.calendario {
		background-image: url('/images/google_calendar_new_logo_icon_159141.png');
		background-size: contain;
		top: 9px;
	}
	.keep {
		background-image: url('/images/google_keep_icon.webp');
		background-size: contain;
		top: 9px;
		left: 8px;
	}
	.tasks {
		background-image: url('/images/gstatic.png');
		background-size: contain;
		top: 8px;
	}
	.contatti {
		background-image: url('/images/omino.png');
		background-size: contain;
		top: 7px;
		left: 8.5px;
	}
	.arrow {
		background-image: url('/images/greater-than-symbol.png');
		background-size: contain;
		background-repeat: no-repeat;
		top: 8px;
		left: 11px;
		-webkit-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.cont {
		height: 40px;
		width: 40px;
		border-radius: 100%;
		cursor: pointer;
		z-index: 5;
		transition: width 0.5s;
	}
	.cont:hover {
		background-color: #d7d9dc;
		z-index: 5;
	}

	.first-part {
		height: 250px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.second-part {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 80px;
	}

	.cont:hover .black-box {
		visibility: visible;
		opacity: 1;
		z-index: 4;
		overflow: visible;
		/* isolation: isolate; */
		font-size: 10px;
	}

	.one:hover .black-box {
		right: 9px;
		top: 13px;
		font-size: 8px;
	}
	.two:hover .black-box {
		left: 4px;
		top: 13px;
		padding-left: 5px;
		padding-right: 5px;
	}
	.three:hover .black-box {
		right: 2px;
		top: 15px;
	}
	.four:hover .black-box {
		right: 8px;
		top: 13px;
	}
	.five:hover .black-box {
		right: 13px;
		top: 13px;
		font-size: 7px;
	}
	.six:hover .black-box {
		bottom: 65px;
		right: 8px;
		font-size: 8px;
	}

	.dash {
		position: relative;
		bottom: 10px;
		left: 7px;
	}
	.plus {
		background-image: url('/images/plus_PNG110.png');
		background-size: contain;
		position: relative;

		top: 5px;
	}

	.five {
		position: relative;
		left: 4px;
	}

	.six {
		-webkit-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.special-cont {
		position: fixed;
		bottom: 10px;
		width: 60px;
		border-radius: 0;
		border-bottom-left-radius: 20px;
		border-top-left-radius: 20px;
		background-color: #e8eaed;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.special-cont:hover {
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.8);
		background-color: #d7d9dc;
	}

	@media screen and (max-width: 780px) {
		.rightbar {
			display: none;
		}
		.backgroundBar {
			display: none;
		}
	}
</style>
