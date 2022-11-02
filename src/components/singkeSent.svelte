<script>
export let dates
export let messaggio
export let destinatario
export let oggetto
export let kiave
 export let oggettii
 export let destinatarioo
 export let messaggioo
 export let idd
 export let datess
 export let emaill
 export let loginUUIDs
import {createEventDispatcher } from 'svelte'
  import { cerchio } from '../iconservice';
let dispatch = createEventDispatcher()
const tornaIndietr = () => {
  let apriGrande = false ;
  dispatch('tornaIndietr', apriGrande)
   kiave = undefined
}





</script>


<main class='email-big-main'>
{#if kiave === 'risposta'}
  
<div class="icons">
  <div class="icon-popup">
    <div class=" icon first" on:click={tornaIndietr}></div></div>
  <div class=" st-group">
    <div class="icon-popup">
      <div class=" icon second"></div></div>
    <div class="icon-popup">
      <div class=" icon third"></div></div>
    <div class="icon-popup">
      <div class=" icon fourth"></div></div>
  </div>
  <div class=" nd-group">
    <div class="icon-popup">
      <div class=" icon fifth"></div></div>
    <div class="icon-popup">
      <div class=" icon sixth"></div></div>
    <div class="icon-popup">
      <div class=" icon seventh"></div></div>
      </div>
    <div class="rd-group">
      <div class="icon-popup">
      <div class=" icon eighth"></div></div>
 
  <div class="icon-popup">
    <div class=" icon nineth"></div></div>
  </div>
</div>

<div class="darkspace">
  <div class="whitespace">
    <div class="square-popup">
      <div class="number">1 di {Object.keys(localStorage).length}</div></div>
    <div class="icon-popup uno">
      <div class="first-arrow"></div></div>
    <div class="icon-popup due">
      <div class="second-arrow "></div></div>
    <div class="special-popup">
      <div class="i"></div></div>

</div>
</div>
<div class="sent-body">

<div class="sent-header">
<div class="title"><h2>Utente {loginUUIDs} </h2></div>
<div class="icon-space">
<div class="icon-popup">    <div class="icone freccedoppie"></div>     </div>
<div class="icon-popup seconda">      <div class="icone stampa"></div>    </div>
<div class="icon-popup terza">     <div class="icone grande"></div>    </div>




</div>

</div>
<div class="sent-component">
  <div class="circle-with-name ">
    <img src={JSON.parse(localStorage.getItem(`secondaparte${kiave}${idd}`))[1].picture.thumbnail} alt="immagine" class='thumbnail-picture'>
  </div>
  <div class="sent-component-body">
    <div class="parole">
      <div class="titolo"><nobr>{destinatarioo} <span class='greysh'>     {emaill}  </span></nobr></div>
      <div class="contenuto">
        <nobr><p>Salve, sono {JSON.parse(localStorage.getItem(`secondaparte${kiave}${idd}`))[1].name.title} {JSON.parse(localStorage.getItem(`secondaparte${kiave}${idd}`))[1].name.first} {JSON.parse(localStorage.getItem(`secondaparte${kiave}${idd}`))[1].name.last} e vorrei collaborare con voi. Vivo a {JSON.parse(localStorage.getItem(`secondaparte${kiave}${idd}`))[1].location.city}, in {JSON.parse(localStorage.getItem(`secondaparte${kiave}${idd}`))[1].location.state} ma sono disponibile anche a lavoro da remoto.
        Chiamate pure al numero {JSON.parse(localStorage.getItem(`secondaparte${kiave}${idd}`))[1].phone}
        </p></nobr>
      </div>
    </div>
    <div class="pte-dx">
    <div class="data">{datess}</div>
    <div class=" risp uan" ></div>
    </div>
  </div>
</div>
<hr>


  <div class="sent-component">
    <div class="circle-with-name ">
      {@html cerchio}
      <div class="black-box special">
        <nobr>Account Google</nobr><br>
        <nobr><span class='greyish'>Samuele Rinaldi</span></nobr>
        <nobr><span class='greyish'>samuelee.rinaldi@gmail.com</span></nobr>
      </div>
    </div>
    <div class="sent-component-body">
      <div class="parole">
        <div class="titolo"><nobr>Samuele Rinaldi <span class='greysh'> samuelee.rinaldi@Gmail.com </span> </nobr></div>
        <div class="destinatario">a {destinatarioo}</div>
        <div class="contenuto"><nobr>{messaggioo}</nobr></div>
      </div>
      <div class="pte-dx">
        <div class="datas">{datess}</div>
        <div class="risp tu" ></div>
      </div>
    </div>
    
  </div>

</div>
{:else  if kiave != 'risposta' }

<div class="icons">
  <div class="icon-popup">
    <div class=" icon first" on:click={tornaIndietr}></div></div>
  <div class=" st-group">
    <div class="icon-popup">
      <div class=" icon second"></div></div>
    <div class="icon-popup">
      <div class=" icon third"></div></div>
    <div class="icon-popup">
      <div class=" icon fourth"></div></div>
  </div>
  <div class=" nd-group">
    <div class="icon-popup">
      <div class=" icon fifth"></div></div>
    <div class="icon-popup">
      <div class=" icon sixth"></div></div>
    <div class="icon-popup">
      <div class=" icon seventh"></div></div>
      </div>
    <div class="rd-group">
      <div class="icon-popup">
      <div class=" icon eighth"></div></div>
 
  <div class="icon-popup">
    <div class=" icon nineth"></div></div>
  </div>
</div>

<div class="darkspace">
  <div class="whitespace">
    <div class="square-popup">
      <div class="number">1 di {Object.keys(localStorage).length}</div></div>
    <div class="icon-popup uno">
      <div class="first-arrow"></div></div>
    <div class="icon-popup due">
      <div class="second-arrow "></div></div>
    <div class="special-popup">
      <div class="i"></div></div>
  </div>
</div>
<div class="sent-body">

<div class="sent-header">
  <div class="title"><h2>{destinatario} </h2></div>
  <div class="icon-space">
    <div class="icon-popup">    <div class="icone freccedoppie"></div>     </div>
    <div class="icon-popup seconda">      <div class="icone stampa"></div>    </div>
    <div class="icon-popup terza">     <div class="icone grande"></div>    </div>
  </div>
</div>

<div class="sent-component">
  <div class="circle-with-name ">
    {@html cerchio}
    <div class="black-box special">
      <nobr>Account Google</nobr><br>
      <nobr><span class='greyish'>Samuele Rinaldi</span></nobr>
      <nobr><span class='greyish'>samuelee.rinaldi@gmail.com</span></nobr>
    </div>
  </div>
  <div class="sent-component-body">
    <div class="parole">
      <div class="titolo"><nobr>{destinatario}</nobr></div>
      <div class="contenuto"><nobr>{oggetto}</nobr></div>
    </div>
    <div class="pte-dx">
      <div class="data">{dates}</div>
      <div class="star" ></div>
    </div>
  </div>
</div>
</div>

{/if}

</main>

<style>
  .destinatario{-webkit-font-smoothing: auto;
    font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    font-size: .75rem;
    letter-spacing: normal;line-height: 20px;}

  .uan{bottom:15px;}

  .tu{bottom:0;
    top:85px}

  .greysh{color: #5e5e5e;
    opacity :0.75;
    font-weight: 300;}

  .risp{width:20px;height:20px;
    background-image: url('/images/star_baseline_nv700_20dp.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    right:2px}

  .thumbnail-picture{border-radius: 100%;
      height: 40px;
      width:40px;}


  .data{position: relative;
    right:40px;
    bottom:10px}

  .datas{position: relative;
    right:40px;
top:90px}

  .parole{display: flex;
    flex-direction: column;
    position: relative;
    bottom:25px;
    left:70px}

  .sent-component-body{display:flex;
    flex-direction: row;justify-content: space-between;}

  .star{width:20px;height:20px;
    background-image: url('/images/star_baseline_nv700_20dp.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    bottom:10px;
    right:2px}

.pte-dx{
position: fixed;
  right:85px;
  top:200px;
  display:flex;
  flex-direction: row;}

  .titolo {font-weight: bold;}

  .title{position: relative;
    left:65px;
    top:10px }

    .seconda{
    position: relative;
    right: 6px;}

  .terza{position: relative;
    right:18px}

  .icon-space{display: flex;
    flex-direction:  row;
    position: fixed;
    right:58px;
    top:126px;}

.sent-header{display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;}

.number{position: relative;
     left:55px;
     top:20px;
     font-size: 12px;
     color: rgba(0, 0, 0, 0.5);}

.uno{position: relative;
      left:20px;
      top:5px}

    .due{position: relative;
right:20px;
      top:5px}

.icon{background-repeat: no-repeat;
  background-size: contain;
  height:20px;
  width:20px;
  display: flex;
  justify-content: space-evenly}

.email-big-main{display: flex;
flex-direction: column;
background-color: white;
margin-top: 6px;
border-top-left-radius: 10px;
border-top-right-radius:10px ;
min-width: 100vw;}

.icone{height:20px;
  width:20px;
  background-repeat: no-repeat;
  background-size: cover;}

.freccedoppie{background-image: url('/images/freccedoppie.png');}

.stampa{background-image: url('/images/stampa.png');}

.grande{ background-image: url('/images/ingrandisci.png');}

.i{height:15px;
      width:15px;
      background-image: url('/images/info.png');
      background-repeat: no-repeat;
      background-size: cover;

      position: relative;
      right:45px;
      top:16px}

.icons{display: flex;
  flex-direction: row;
  min-width: 460px;}

.whitespace{height:46px;
      width:245px;
      position: fixed;
right: 61px;
top:62px;
      background-color: white;
  overflow: hidden;
  z-index:2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top-right-radius: 10px;}

  .darkspace{background-color: #F6F8FC;
  height:46px;
      width:245px;
      position: fixed;
right: 61px;
top:62px;
  overflow: hidden;
  z-index:2;}

  .icon-popup{width:40px;
    height:40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;}
.icon-popup:hover{background-color:#F6F8FC;}

.icons{display: flex;
  flex-direction: row;
  min-width: 460px}

.st-group{display: flex;
  flex-direction: row;
  margin-left: 12px;}

.nd-group{  display: flex;
  flex-direction: row;
margin-left: 26px;}
  

.first{background-image: url('/images/arrow.png');}
  
.second{background-image: url('/images/a1.png');}
  
  .third{background-image: url('/images/a2.png');}
  
  .fourth{background-image: url('/images/a3.png');}
  
  .fifth{background-image: url('/images/a4.png');}
  
  .sixth{background-image: url('/images/a5.png');}
  
  .seventh{background-image: url('/images/a6.png');}
  
  .eighth{background-image: url('/images/coso-strano-png.png');}
  
  .nineth{background-image: url('/images/a8.png');}
  
  .first-arrow{height:20px;
      width:20px;
      background-image: url('/images/mail-head-1.png');
      background-repeat: no-repeat;
      background-size: cover;}

    .second-arrow{height:20px;
      width:20px;
      background-image: url('/images/mail-head-2.png');
      background-repeat: no-repeat;
      background-size: cover;}

    .rd-group{display: flex;
  flex-direction: row;
margin-left: 20px;}

  .st-group{display: flex;
  flex-direction: row;
  margin-left: 12px;}

.nd-group{  display: flex;
  flex-direction: row;
margin-left: 26px;}




.special{ visibility: 1;
  display: none;
  text-align: left;}

.circle-with-name{cursor: pointer;
  position: relative;
  left:12px;
  top:12px;}

@media screen and (max-width:780px) {
  .icon-space{
    display:none
  }
}
</style>
