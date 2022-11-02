<script>

import {createEventDispatcher } from 'svelte'
let dispatch = createEventDispatcher()
export let riduzioneLeftBar 
export let cambiaInvioArrivo
export let preferiti
export let preferitiGrande


let clockActive = false 
let bozzeActive = false
let altroActive = false
let vaiAdInviati = false



const tornaAdHome = () => { //andare a posta in arrivo
  let apriGrande = true;
  vaiAdInviati = false
  let preferiti = false
  let evento = {apriGrande , vaiAdInviati , preferiti}
  dispatch('tornaAdHome', evento)
}

const goToSent = () => { // vai ad inviati
  vaiAdInviati = true
  let preferiti = false
  let eventi = {vaiAdInviati , preferiti}
  dispatch('vaiAdInviati', eventi)
}

const attivaPreferiti = () => { //vai a preferiti
  let attivare = true
  dispatch('attivare' , attivare)
}


$:riduzioneLeftBar

</script>

<div class="left-side" class:shorter={riduzioneLeftBar} class:longer={!riduzioneLeftBar}>
  <div class="sfondo">
    <div class="scrivi-cont">
      <button id='scrivo' on:click  class:normale={!riduzioneLeftBar} class:ridotto={riduzioneLeftBar}>
        <div class="btn-flex">
          <div class="penna" class:penna-click={riduzioneLeftBar}></div>
          <span id='scrivi' class:scompari={riduzioneLeftBar}>Scrivi</span>
        </div>
      </button>
    </div>
    <div class="options-cont">
      <div class="single-option"on:click={tornaAdHome } class:long-single={!riduzioneLeftBar} class:short-single={riduzioneLeftBar} class:active = { cambiaInvioArrivo == false && preferiti == false  && preferitiGrande == false ? true : false} class:grigio = { cambiaInvioArrivo == false && preferiti == false  && preferitiGrande == false ? false : true} >
        <div class="avvolgiOpt"  class:piuGrande={riduzioneLeftBar} class:piuPiccolo={!riduzioneLeftBar}>
          <div  class="optionImg "  class:inbox={cambiaInvioArrivo == false && preferiti == false  && preferitiGrande == false ? false : true} class:Inboxblu = {cambiaInvioArrivo == false && preferiti == false  && preferitiGrande == false ? true : false}>
          </div>
        </div>
        <div class="option"  class:blue={cambiaInvioArrivo == false && preferiti == false  && preferitiGrande == false ? true : false} class:scompari={riduzioneLeftBar}>Posta in arrivo</div>
      </div>

      <div class="single-option"  class:long-single={!riduzioneLeftBar} class:short-single={riduzioneLeftBar} class:active = {preferiti == true ? true : false } class:grigio = {preferiti == true ? false : true}
      on:click={attivaPreferiti}>

        <div class="avvolgiOpt"  class:piuGrande={riduzioneLeftBar} class:piuPiccolo={!riduzioneLeftBar}>
          <div  class="optionImg " class:stellaBlu = {preferiti == true ? true : false } class:star = {preferiti == false ? true : false}>
          </div>
        </div>

        <div class="option" class:blue={preferiti == true ? true : false } class:scompari={riduzioneLeftBar}>
          Speciali
        </div>
      </div>
      <div class="single-option grigio"  class:long-single={!riduzioneLeftBar} class:short-single={riduzioneLeftBar}  class:active = {clockActive} >
        <div class="avvolgiOpt"  class:piuGrande={riduzioneLeftBar} class:piuPiccolo={!riduzioneLeftBar}>
          <div  class="optionImg posticipati"></div>
        </div>
        <div class="option" class:scompari={riduzioneLeftBar}>
          Posticipati
        </div>
      </div>
      <div class="single-option" on:click={goToSent} class:long-single={!riduzioneLeftBar} class:short-single={riduzioneLeftBar} class:active = {cambiaInvioArrivo == true && preferiti == false? true : false} class:grigio ={cambiaInvioArrivo == true && preferiti == false ?  false : true}  >
        <div class="avvolgiOpt"  class:piuGrande={riduzioneLeftBar} class:piuPiccolo={!riduzioneLeftBar}>
          <div  class="optionImg " class:sent={cambiaInvioArrivo == true && preferiti == false?  false : true} class:bluesent={cambiaInvioArrivo == true && preferiti == false? true : false}>  </div>
        </div>

        <div class="option"  class:blue={cambiaInvioArrivo == true  && preferiti == false ? true : false} class:scompari={riduzioneLeftBar}>
          Inviati
        </div>

      </div>
      <div class="single-option grigio"  class:long-single={!riduzioneLeftBar} class:short-single={riduzioneLeftBar} class:active = {bozzeActive} >
        <div class="avvolgiOpt"  class:piuGrande={riduzioneLeftBar} class:piuPiccolo={!riduzioneLeftBar}>
          <div  class="optionImg bozze"></div>
        </div>
        <div class="option " class:scompari={riduzioneLeftBar}>
          Bozze
        </div>
      </div>
      <div class="single-option"  class:long-single={!riduzioneLeftBar} class:short-single={riduzioneLeftBar} class:active = {altroActive} >
        <div class="avvolgiOpt"  class:piuGrande={riduzioneLeftBar} class:piuPiccolo={!riduzioneLeftBar}>
          <div  class="optionImg altro"></div>
        </div>
        <div class="option" class:scompari={riduzioneLeftBar}>
        Altro
        </div>
      </div>
    </div>
  </div>
</div>






<style>
  .piuGrande{
    width:27px;
    height:27px;
  border-radius: 20px;
  position:relative;
left:6px;
top:3px;
display: flex;
justify-content: center;
align-items: center;
  }

.piuPiccolo{
  height:20px;
  width:20px;
  border-radius: 20px;
    position:relative;
left:26px;
top:8px;
}

.short-single{
min-width: unset;
width:32px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
margin-left: 20px;
transition: min-width 3s ease-in;
}

.long-single{
  width:unset;
 min-width: 7.5rem;
 transition: width 3s ease-in;
}
.scompari{
  visibility: hidden;
  
}
  .bluesent{
    background-image: url('/images/send_fill_baseline_p900_20dp.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .blue{
    color:#001d35;
    font-weight: bolder;
  }
  
  .active{
background-color: #D3E3FD
  }
  .active:hover{
    background-color: #D3E3FD
  }
  .grigio:hover{
    background-color:  #EAEBEF
  }
  .Inboxblu{
 background-image: url('/images/inbox_fill_baseline_p900_20dp.png');
 background-size: contain;
 background-repeat: no-repeat;

  }


.stellaBlu{
  background-image: url('/images/star_fill_baseline_p900_20dp.png');
 background-size: contain;
 background-repeat: no-repeat;
}

  .sfondo{
    width:256px;
    min-height:240px;
    position: relative;
    left:0;
    padding-top:8px;
    z-index: 19;
  }

  .longer{
width: 256px;
  }
  .shorter{
    width: 70px;
  }
.left-side{
  z-index: 19;
  height: 100vh;
  margin-top: 6px;
  font-size: small;
transition: width 0.3s;
}

#scrivo{
border:none;
height:calc(3rem + 8px);
z-index: 19;
border-radius: 15px;
background-color: #C2E7FF;
text-indent: 10px;
transition: width 0.3s
}

.normale{
  width:7.5rem
}

.ridotto{
width:56px
}

#scrivo:hover {
  box-shadow: 0px 0.5px 2.5px 1.5px lightgrey;
}

.btn-flex{
  display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
}

.penna{
  background-image: url('/images/create_black_24dp.png');
  background-size: contain;
  background-repeat: no-repeat;
  width:25px;
  height:25px;
  position: relative;
  right:30px;
  top:8px;
  z-index: 19;
}

.penna-click{
  right:0
}

#scrivi{
  position: relative;
  bottom:13px;
  left:7px;
  font-weight: 600;
  z-index: 9;
}

.scrivi-cont{
  padding-left: 8px;
  z-index: 19;
}

.options-cont{
  height:240px;
  min-width:240px;
  margin-top:15px;
}
.option{
  height:32px;
  width: 202px;
display: flex;
align-items: center;
text-indent: 43px;
font-size: 16px;
}


.optionImg{
width:20px;height:20px;
}

.single-option{
  display: flex;
  flex-direction: row;
cursor:pointer;
margin-right: 16px;
border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 100ms ease-in;
  transition: width 3s ease-in;
}

.inbox{
  background-image: url('/images/inbox_baseline_nv700_20dp.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.star{
  background-image: url('/images/star_baseline_nv700_20dp.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.posticipati{
  background-image: url('/images/schedule_baseline_nv700_20dp.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.sent{
  background-image: url('/images/send_baseline_nv700_20dp.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.bozze{
  background-image: url('/images/draft_baseline_nv700_20dp.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.altro{
  background-image: url('/images/expand_more_baseline_nv700_20dp.png');
  background-size: contain;
  background-repeat: no-repeat;
}


</style>