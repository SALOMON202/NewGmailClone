<script>
	export let allungamento;
</script>

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

<style>
	.whitespaceLungo {
		width: 326px;
		right: 20px;
	}
	.whitespaceCorto {
		width: 285px;
		right: 61px;
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
		z-index: 20;
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

		/* min-width:420px; */
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
		height: 92px;

		position: fixed;

		top: 62px;
		background-color: white;
		overflow: hidden;
		z-index: 2;
		display: flex;
		flex-direction: row;
		border-top-right-radius: 10px;
		transition: width 0.5s;
		transition: right 0.5s;
	}
	.darkspace {
		background-color: #f6f8fc;
		height: 92px;
		position: fixed;

		top: 62px;
		transition: width 0.5s;
		transition: right 0.5s;
		overflow: hidden;
		z-index: 2;
	}
	@media screen and (max-width: 780px) {
		.whitespace {
			right: 0;
			position: relative;
		}
		.darkspace {
			display: none;
		}
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
</style>
