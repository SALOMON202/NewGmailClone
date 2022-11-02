<script>
	import { createEventDispatcher } from 'svelte';

	export let allungamento;
	export let nameo;
	export let surnameo;
	export let cityo;
	export let phonenumbero;
	export let stateo;
	export let titleo;
	export let loginUUIDo;
	export let pictureo;
	export let usernameo;
	export let oreo;
	export let minutio;
	export let emailo;

	const tornareIndietro = () => {
		let apriGrande = false;
		dispatch('tornareIndietroo', apriGrande);
	};

	const dispatch = createEventDispatcher();
</script>

<main class="email-big-main">
	<div class="email-big-header">
		<div class="icons">
			<div class="icon-popup">
				<div class=" icon first" on:click={tornareIndietro} />
			</div>
			<div class=" st-group">
				<div class="icon-popup">
					<div class=" icon second" />
				</div>
				<div class="icon-popup">
					<div class=" icon third" />
				</div>
				<div class="icon-popup">
					<div class=" icon fourth" />
				</div>
			</div>
			<div class=" nd-group">
				<div class="icon-popup">
					<div class=" icon fifth" />
				</div>
				<div class="icon-popup">
					<div class=" icon sixth" />
				</div>
				<div class="icon-popup">
					<div class=" icon seventh" />
				</div>
			</div>
			<div class="rd-group">
				<div class="icon-popup">
					<div class=" icon eighth" />
				</div>

				<div class="icon-popup">
					<div class=" icon nineth" />
				</div>
			</div>
		</div>

		<div class="darkspace">
			<div class="whitespace" class:allunga={allungamento} class:normale={!allungamento}>
				<div class="square-popup">
					<div class="number">1 di 1</div>
				</div>
				<div class="icon-popup uno">
					<div class="first-arrow" />
				</div>
				<div class="icon-popup due">
					<div class="second-arrow " />
				</div>
				<div class="special-popup">
					<div class="i" />
				</div>
			</div>
		</div>

		<div class="email-big-body">
			<div class="email-big-primo-titolo">
				<h3><nobr>Utente {loginUUIDo}</nobr></h3>
				<div class="right">
					<div class=" wrap wart "><div class="firsto" /></div>
					<div class=" wrap wart"><div class="secondo" /></div>
					<div class="right-header">
						<span class="tempo">{oreo} : {minutio}</span>
						<div class="right-right-header">
							<div class="wrap"><div class=" w star" /></div>
							<div class="wrap"><div class="w freccia-indietro" /></div>
							<div class="wrap"><div class="w puntini" /></div>
						</div>
					</div>
				</div>
			</div>
			<div class="secondo-titolo">
				<div class="thumbnail-cont">
					<img src={pictureo} alt="d" class="thumbnail-picture" />
				</div>
				<div class="title"><span class="user"><nobr>{usernameo} </nobr></span><span class="email">{emailo}</span></div>
			</div>

			<div class="email-body">
				<div class="email-content">
					<p>
						Salve, sono {titleo}
						{nameo}
						{surnameo} e vorrei collaborare con voi. Vivo a {cityo}, in {stateo} ma sono disponibile anche a lavoro da remoto.
						Chiamate pure al numero {phonenumbero}
					</p>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.wart {
		position: relative;
		top: 20px;
		left: 90px;
	}
	.email-content {
		min-width: 100%;

		margin-left: 5rem;
	}
	.email-body {
		min-width: 525px;
		display: flex;
		justify-content: center;
	}
	.w {
		position: relative;
		top: 10px;
		left: 10px;
	}
	.title {
		position: relative;
		left: 30px;
		bottom: 10px;
	}
	.user {
		position: relative;
		font-weight: 800;
		font-size: small;
	}
	.right-header {
		position: fixed;
		right: 75px;
		top: 193px;
		z-index: 10;
		display: flex;
		align-items: center;
		margin-left: 8px;
		justify-content: center;
	}

	.right-header span {
		text-align: center;
	}
	.email {
		font-weight: 300;
		font-size: small;
		color: #5f6368;
	}
	.thumbnail-cont {
		position: relative;
		left: 20px;
		top: 3px;
	}
	.secondo-titolo {
		display: flex;
		flex-direction: row;

		align-items: center;
	}
	.right-header {
		display: flex;
		flex-direction: row;
		margin-top: 5px;
	}
	.right-right-header {
		display: flex;
		align-items: center;
	}
	.star {
		background-image: url('/images/star_baseline_nv700_20dp.png');
		background-size: cover;
		background-repeat: no-repeat;
		height: 20px;
		width: 20px;
	}
	.freccia-indietro {
		background-image: url('/images/freccia-indietro.png');
		background-size: cover;
		background-repeat: no-repeat;
		height: 20px;
		width: 20px;
	}
	.puntini {
		background-image: url('/images/puntinni.png');
		background-size: cover;
		background-repeat: no-repeat;
		height: 20px;
		width: 20px;
	}

	.wrap:hover {
		background-color: #f6f8fc;
	}
	.firsto {
		height: 20px;
		width: 20px;
		position: relative;
		top: 8px;
		left: 10px;
		background-image: url('/images/stampa.png');
		background-size: cover;
		background-repeat: no-repeat;
	}
	.secondo {
		height: 20px;
		position: relative;
		top: 8px;
		left: 10px;
		width: 20px;
		background-image: url('/images/open.png');
		background-size: cover;
		background-repeat: no-repeat;
	}
	.email-big-main {
		display: flex;
		flex-direction: column;
		background-color: white;
		margin-top: 6px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		min-width: 100vw;
	}
	.email-big-header {
		display: flex;
		flex-direction: row;
		/* width:100%; */

		height: 48px;
		align-items: center;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom: 2px solid #f6f8fc;
	}

	.icon {
		background-repeat: no-repeat;
		background-size: contain;
		height: 20px;
		width: 20px;
		display: flex;
		justify-content: space-evenly;
	}
	.icon-popup:hover {
		background-color: #f6f8fc;
	}

	.icons {
		display: flex;
		flex-direction: row;
		min-width: 460px;
	}
	.st-group {
		display: flex;
		flex-direction: row;
		margin-left: 12px;
	}
	.nd-group {
		display: flex;
		flex-direction: row;
		margin-left: 26px;
	}

	.whitespace {
		height: 46px;
		position: fixed;
		top: 62px;
		background-color: white;
		overflow: hidden;
		z-index: 2;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		border-top-right-radius: 10px;
	}
	.normale {
		width: 265px;
		right: 61px;
	}
	.allunga {
		width: 298px;
		right: 25px;
	}

	.darkspace {
		background-color: #f6f8fc;
		height: 46px;
		width: 245px;
		position: fixed;
		right: 61px;
		top: 62px;

		overflow: hidden;
		z-index: 2;
	}
	.icon-popup {
		width: 40px;
		height: 40px;
		border-radius: 20px;

		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 5px;
	}
	.rd-group {
		display: flex;
		flex-direction: row;
		margin-left: 20px;
	}
	.first {
		background-image: url('/images/arrow.png');
	}
	.second {
		background-image: url('/images/a1.png');
	}
	.third {
		background-image: url('/images/a2.png');
	}
	.fourth {
		background-image: url('/images/a3.png');
	}
	.fifth {
		background-image: url('/images/a4.png');
	}
	.sixth {
		background-image: url('/images/a5.png');
	}
	.seventh {
		background-image: url('/images/a6.png');
	}
	.eighth {
		background-image: url('/images/a7.png');
	}
	.nineth {
		background-image: url('/images/a8.png');
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
	}
	.i {
		height: 15px;
		width: 15px;
		background-image: url('/images/info.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.number {
		position: relative;
		left: 90px;
		top: 20px;
		font-size: 12px;
		color: rgba(0, 0, 0, 0.5);
	}
	.uno {
		position: relative;
		left: 50px;
		top: 5px;
	}
	.due {
		position: relative;

		top: 5px;
	}
	.special-popup {
		position: relative;
		right: 30px;
		border-radius: 5px;
		height: 40px;
		top: 4px;
		width: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.special-popup:hover {
		background: #f6f8fc;
	}
	.i {
		position: relative;
	}
	.email-big-primo-titolo h3 {
		font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
		font-weight: 300;
		font-size: 20px;
		margin-left: 80px;
	}
	.email-big-primo-titolo {
		display: flex;
		flex-direction: row;
	}
	.thumbnail-picture {
		border-radius: 100%;
		height: 40px;
		width: 40px;
	}
	.right {
		display: flex;
		flex-direction: row;
		position: fixed;
		right: 60px;
		top: 130px;
		z-index: 10;

		height: 95px;
		width: 190px;
		overflow: hidden;
		background: white;
	}
	.email-big-body {
		position: relative;
		right: 460px;
		top: 140px;
	}
	@media screen and (max-width: 785px) {
		.darkspace {
			right: 0;
			z-index: 13;
			top: 200px;
			height: 80vh;
			min-width: 60px;
			position: relative;
			background-color: #f6f8fc;
			overflow: hidden;
		}
		.whitespace {
			visibility: hidden;
		}
		.email-body {
			width: 525px;
		}

		.email-big-main {
			width: 468px;
		}

		.email-big-body {
			position: relative;
			right: 525px;
		}
		.right {
			position: absolute;
			top: 0px;
			right: 50px;
		}
		.right-header {
			position: absolute;
			top: 55px;
			right: 10px;
		}
	}

	@media screen and (max-width: 1008px) {
		/* .whitespace{
      position: relative;
      border:1px solid green;
      right:0;
      bottom:100px

    }
    .darkspace{
      position: relative;
      border:1px solid green

    } */

		.icons {
			z-index: 12;
			overflow: hidden;
			background: white;
		}
	}
	.tempo {
		font-size: 10px;
		color: #5e5e5e;
	}
</style>
