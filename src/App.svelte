<script>
	//import
	import { getOggetto } from '../src/store';
	import Email from './components/email.svelte';
	import LeftSide from './components/leftSide.svelte';
	import Header from './components/header.svelte';
	import Rightbar from './components/rightbar.svelte';
	import Write from './components/Write.svelte';

	import EmailBig from './components/emailBig.svelte';
	import Inviati from './components/inviati.svelte';
	import SingkeSent from './components/singkeSent.svelte';
	import Preferiti from './components/preferiti.svelte';
	import PreferitiGrande from './components/preferitiGrande.svelte';
	import EmailLogin from './components/emailLogin.svelte';
	import PasswordLogin from './components/passwordLogin.svelte';

	$: promise = getOggetto();

	//const per on... , senza dispatch

	const activate = () => {
		deactivated = true;
	};
	const attiva = () => {
		disattivo = true;
	};
	const chiudilo = () => {
		writeMail = !writeMail;
	};
	const submitOpen = () => {
		writeMail = true;
	};
	if (Object.keys(sessionStorage).includes('saltaLogin')) {
		disattivo = true;
		attivo = false;
	}

	//const con dispatch

	const vaiAdInviati = (e) => {
		cambiaInvioArrivo = e.detail.vaiAdInviati;
		preferiti = e.detail.preferiti;
		console.log(cambiaInvioArrivo);
	};

	const tornaAdHome = (e) => {
		apriGrande = e.detail.apriGrande;
		cambiaInvioArrivo = e.detail.vaiAdInviati;
		preferiti = e.detail.preferiti;
	};

	const tornaIndietro = (e) => {
		apriGrande = !e.detail;
	};
	const tornaIndietr = (e) => {
		apriGrande = e.detail;
		cambiaInvioArrivo = true;
		tuttiInviati = true;
	};
	const tornareIndietroo = (e) => {
		apriGrande = e.detail;
		preferitiGrande = e.detail;
	};

	const cambiaPagina = (e) => {
		apriGrande = !e.detail;
		console.log(apriGrande);
		tutto = e.detail.tutto;
		namey = e.detail.name;
		surname = e.detail.surname;
		title = e.detail.title;
		city = e.detail.city;
		state = e.detail.state;
		phoneNumber = e.detail.phoneNumber;
		loginUUID = e.detail.loginUUID;
		picture = e.detail.picture;
		username = e.detail.username;
		email = e.detail.email;
		ore = e.detail.ore;
		minuti = e.detail.minuti;
	};

	const aggiungiAdInviati = (e) => {
		objects = e.detail;
	};

	const attivaAggiungi = (e) => {
		attivazione = e.detail.aggiungi;
	};

	const activeto = (e) => {
		apriGrande = e.detail.apriGrande;
		cambiaInvioArrivo = e.detail.cambiaInvioArrivo;
		preferiti = false;
		preferitiGrande = false;
	};

	const cambiaInviati = (e) => {
		tuttiInviati = false;
	};

	const dede = (e) => {
		messaggio = e.detail.messaggio;
		destinatario = e.detail.destinatario;
		oggetto = e.detail.oggetto;
		dates = e.detail.dates;
		tuttoi = e.detail.tutto;
		kiave = e.detail.kiave;
	};

	const dedes = (e) => {
		oggettii = e.detail.oggettii;
		destinatarioo = e.detail.destinatarioo;
		datess = e.detail.datess;
		idd = e.detail.idd;
		messaggioo = e.detail.messaggioo;
		loginUUIDs = e.detail.loginUUIDs;
		emaill = e.detail.emaill;
		kiave = e.detail.kiave;
	};

	const inputDatas = (e) => {
		valore = e.detail;
	};

	const attivaPreferiti = (e) => {
		preferiti = e.detail;
	};

	const vaiAPreferitiGrande = (e) => {
		nameo = e.detail.name;
		surnameo = e.detail.surname;
		titleo = e.detail.title;
		cityo = e.detail.city;
		stateo = e.detail.state;
		phonenumbero = e.detail.phoneNumber;
		pictureo = e.detail.picture;
		loginUUIDo = e.detail.loginUUID;
		usernameo = e.detail.username;
		emailo = e.detail.email;
		oreo = e.detail.ore;
		minutio = e.detail.minuti;
		preferitiGrande = true;
	};

	const riduzione = (e) => {
		riduzioneLeftBar = e.detail;
	};

	const allungaWhitespaceEmailContent = (e) => {
		allungamento = e.detail;
	};
	// variabili con cui passare dati in emails

	let apriGrande = true; //per await
	let namey;
	let surname;
	let title;
	let city;
	let state;
	let phoneNumber;
	let loginUUID;
	let picture;
	let username;
	let email;
	let ore;
	let minuti;
	let tutto;

	let objects;

	let messaggio; // inviati
	let destinatario;
	let oggetto;
	let dates;
	let tuttoi;

	let destinatarioo; //inviati
	let messaggioo;
	let emaill;
	let datess;
	let loginUUIDs;
	let idd;
	let oggettii;
	let kiave;

	let valore;

	let nameo; //per each
	let surnameo;
	let titleo;
	let cityo;
	let stateo;
	let phonenumbero;
	let pictureo;
	let loginUUIDo;
	let usernameo;
	let emailo;
	let oreo;
	let minutio;
	let preferitiGrande = false;

	//variabili per far funzionare interruttori

	let attivo = true;
	let second = false;
	let deactivated = false;
	let writeMail = false;
	let cambiaInvioArrivo = false;
	let preferiti = false;
	let attivazione;
	let tuttiInviati = true;
	let allungamento;
	let riduzioneLeftBar;
	let disattivo = false;
</script>

{#if attivo == true && Object.keys(sessionStorage).length == 0}
	{#if second == false}
		<div class="Log" class:deactivated>
			<EmailLogin
				on:submit={activate}
				on:submit|once={setTimeout(() => {
					second = true;
				}, '1500')}
			/>
		</div>
	{:else if second == true}
		<div class="Log-pass" class:disattiva={disattivo}>
			<PasswordLogin
				on:submit={attiva}
				on:submit={setTimeout(() => {
					attivo = false;
				}, '1500')}
			/>
		</div>
	{/if}
{:else}
	<div class="App">
		<Header on:torna={activeto} on:inputvalue={inputDatas} on:riduci={riduzione} />
		<div class="corpo">
			<LeftSide
				on:click={submitOpen}
				on:tornaAdHome={tornaAdHome}
				on:vaiAdInviati={vaiAdInviati}
				on:attivare={attivaPreferiti}
				{apriGrande}
				{cambiaInvioArrivo}
				{preferiti}
				{tuttiInviati}
				{preferitiGrande}
				{riduzioneLeftBar}
			/>
			<div class="email">
				{#if apriGrande == false && cambiaInvioArrivo == false && preferiti == false && preferitiGrande == false}
					<EmailBig
						name={namey}
						{surname}
						{phoneNumber}
						{city}
						{state}
						{title}
						{loginUUID}
						{picture}
						{username}
						{ore}
						{minuti}
						{email}
						{allungamento}
						{tutto}
						on:tornaIndietro={tornaIndietro}
					/>
				{:else if apriGrande == true && cambiaInvioArrivo == false && preferiti == false && preferitiGrande == false}
					<Email on:cambio={cambiaPagina} {valore} {allungamento} />
				{:else if preferiti == true && preferitiGrande == false}
					<Preferiti {valore} on:changepreferiti={vaiAPreferitiGrande} {allungamento} />
				{:else if preferitiGrande == true}
					<PreferitiGrande
						{nameo}
						{surnameo}
						{cityo}
						{phonenumbero}
						{stateo}
						{titleo}
						{loginUUIDo}
						{pictureo}
						{usernameo}
						{oreo}
						{minutio}
						{emailo}
						{allungamento}
						on:tornareIndietroo={tornareIndietroo}
					/>
				{:else if cambiaInvioArrivo == true}
					{#if tuttiInviati == true}
						<Inviati
							{objects}
							{attivazione}
							{valore}
							{allungamento}
							on:cambiaInviati={cambiaInviati}
							on:aggiungiElementi={dede}
							on:aggiungiElementis={dedes}
						/>
					{:else}
						<SingkeSent
							{oggetto}
							{destinatario}
							{messaggio}
							{dates}
							{oggettii}
							{destinatarioo}
							{messaggioo}
							{idd}
							{datess}
							{emaill}
							{loginUUIDs}
							{kiave}
							on:tornaIndietr={tornaIndietr}
							{allungamento}
						/>
					{/if}
				{/if}
			</div>
			<div class="rightbar">
				<Rightbar on:dxPiccolo={allungaWhitespaceEmailContent} />
			</div>
		</div>
	</div>

	{#if writeMail == true}
		<Write on:close={chiudilo} on:addToSent={aggiungiAdInviati} on:aggiungi={attivaAggiungi} />
	{/if}
{/if}

<style>
	.corpo {
		display: flex;
	}

	.email {
		display: flex;
	}
</style>
