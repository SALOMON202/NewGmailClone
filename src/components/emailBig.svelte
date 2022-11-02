<script>
export let tutto
export let allungamento
export let name
export let surname 
export let title
export let loginUUID
export let picture
export let username
export let email
export let ore
export let minuti
export let phoneNumber
export let city
export let state
import {createEventDispatcher } from 'svelte'
import { cerchio } from '../iconservice';
let dispatch = createEventDispatcher()


let selezionata = false
let toggleFooter = false




const selezionaEaggiungiPreferiti = () => {
selezionata = !selezionata
localStorage.setItem(`speciale${tutto[0]}` , JSON.stringify(tutto) )}


const tornaIndietro = () => {
  let apriGrande = false ;
  dispatch('tornaIndietro', apriGrande)
}

const attivaToggleFooter = () => {toggleFooter = true}


const disattivaToggleFooter = () => {toggleFooter = false}


const passaDatiAdInviati = () => {
let id = localStorage.length + 1
let destinatario = document.getElementById('rispondi-input').value;
let  messaggio = document.getElementById('rispondi-text').value;
let date = new Date()
let dates = String(date.getDate()).padStart(2, '0') + ' ' + date.toLocaleString('en-US', {month: 'short'});
let oggetti = [ destinatario , messaggio , id , dates , email , loginUUID] 
localStorage.setItem(`risposta${id}` , JSON.stringify(oggetti))
localStorage.setItem(`secondaparterisposta${id}` , JSON.stringify(tutto) )
dispatch('aggiungiRisposta', oggetti )
 }



</script>

<main class='email-big-main'>
  <div class="email-big-header">
    <div class="icons">
      <div class="icon-popup">
        <div class=" icon first" on:click={tornaIndietro}></div></div>
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
      <div class="whitespace" class:allunga ={allungamento} class:normale={!allungamento}>
        <div class="square-popup">
          <div class="number">1 di 1</div></div>
        <div class="icon-popup uno">
          <div class="first-arrow"></div></div>
        <div class="icon-popup due">
          <div class="second-arrow "></div></div>
        <div class="special-popup">
          <div class="i"></div></div>

    </div>
  </div>


  
  <div class="email-big-body">
<div class="email-big-primo-titolo">
<h3><nobr>Utente {loginUUID}</nobr></h3>
<div class="right">
  <div class=" wrap wart "><div class="firsto"></div></div>
  <div class=" wrap wart"><div class="secondo"></div></div>
  <div class="right-header">
    <span class='tempo'>{ore} : {minuti}</span>
    <div class="right-right-header">
      <div class="wrap"><div class=" w " on:click={selezionaEaggiungiPreferiti} class:star ={!selezionata} class:starselected={selezionata}></div></div>
      <div class="wrap"><div class="w freccia-indietro"></div></div>
      <div class="wrap"><div class="w puntini"></div></div>
    </div>
    </div>
</div>
</div>
<div class="secondo-titolo">
<div class="thumbnail-cont">
<img src={picture} alt="d" class='thumbnail-picture'>
</div>
<div class="title"><span class='user'><nobr>{username} </nobr></span><span class='email'>{email}</span></div>

</div>

<div class="email-body">
  <div class="email-content">
  <p>Salve, sono {title} {name} {surname} e vorrei collaborare con voi. Vivo a {city}, in {state} ma sono disponibile anche a lavoro da remoto.
    Chiamate pure al numero {phoneNumber}</p>




</div>
<div class="rispondi-darkspace"> <div class="rispondi-whitespace"></div></div>
  <footer>
    <div class="scomparsa" class:scompari= {toggleFooter}>
      <div class="bottoni">
        <div class="bottone rispondi" on:click={attivaToggleFooter}>Rispondi</div>
        <div class="bottone inoltra">Inoltra</div>
  
      </div>
    </div>
    <div class="comparsa"  class:compari= {toggleFooter}>
      
      <div class="rispondi-container">
        
        <div class="circle-with-name">
          {@html cerchio}

            </div>

          <form on:submit|preventDefault ={passaDatiAdInviati}>

        <div class="rispondi-header">
         
          <div class="rispondi-header-sinistra">
              <div class="rispondi img"></div>
              <span class='mail-username'>A</span><input type="text" name="rispondi" id="rispondi-input" value={username}>
          
            <div class="rispondi-last-img"></div>
          </div>
          <div class="rispondi-header-destra"></div>
        </div>
  
            
           <div class="rispondi-last-part"></div>
  <textarea name="rispondi" id="rispondi-text" cols="100" rows="6"></textarea>

  <div class="container">
    <div class="mini-cont">
    <div class="double-button"  >
      <button class="st-pt">
        Invia
      </button>
      <button class="nd-pt">
        <div class="point-down"></div>
      </button></div>

  <div class="bottom-write-area" >
 
      <div class="icone" >
        <div class=" icona st">      <div class="black-box">
          <nobr>Opzioni di formattazione</nobr>
        </div></div>
        <div class=" icona nd">      <div class="black-box">
          <nobr>Allega file</nobr>
        </div></div>
        <div class=" icona rd">      <div class="black-box">
          <nobr>Inserisci Link (Ctrl + K )</nobr>
        </div></div>
        <div class=" icona rth">      <div class="black-box">
          <nobr>Inserisci Emoji ( Ctrl + Maiusc-2 )</nobr>
        </div></div>
        <div class=" icona fth">      <div class="black-box">
          <nobr>Inserisci file usando drive</nobr>
        </div></div>
        <div class=" icona xth">      <div class="black-box">
          <nobr>Inserisci foto</nobr>
        </div></div>
        <div class=" icona nth">      <div class="black-box">
          <nobr>Attiva / disattiva modalità riservata</nobr>
        </div></div>
        <div class="icona gth">      <div class="black-box">
          <nobr>Inserisci firma</nobr>
        </div></div>   </div>

      </div> </div>
      <div class=" delete" on:click={disattivaToggleFooter}>   <div class="border-right"></div>   <div class="black-box">
        <nobr>Elimina bozza</nobr>
      </div></div>
    
  </div>
          </form>
        
  
      </div>
    </div>
    <div class="ciao">.</div>
  </footer>
</div>


  </div>






</main>

<style>


/* HEAD */

.email-big-main{
  display: flex;
flex-direction: column;
background-color: white;
margin-top: 6px;
border-top-left-radius: 10px;
border-top-right-radius:10px ;
min-width: 100vw;
}

.icons{
  display: flex;
  flex-direction: row;
  min-width: 460px;

}

.icon{
  background-repeat: no-repeat;
  background-size: contain;
  height:20px;
  width:20px;
  display: flex;
  justify-content: space-evenly;

}
.icon-popup:hover{
  background-color:#F6F8FC;
}

.icon-popup{
    width:40px;
    height:40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
  }

  .first-arrow{
      height:20px;
      width:20px;
      background-image: url('/images/mail-head-1.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    .second-arrow{
      height:20px;
      width:20px;
      background-image: url('/images/mail-head-2.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    .i{
      height:15px;
      width:15px;
      background-image: url('/images/info.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
  .first{background-image: url('/images/arrow.png');}

  .second{background-image: url('/images/a1.png');}

  .third{background-image: url('/images/a2.png');}

  .fourth{background-image: url('/images/a3.png');}

  .fifth{background-image: url('/images/a4.png');}

  .sixth{background-image: url('/images/a5.png');}

  .seventh{background-image: url('/images/a6.png');}

  .eighth{background-image: url('/images/a7.png');}

  .nineth{background-image: url('/images/a8.png');}
  
  .first-arrow{
      height:20px;
      width:20px;
      background-image: url('/images/mail-head-1.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    .second-arrow{
      height:20px;
      width:20px;
      background-image: url('/images/mail-head-2.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    .i{
      height:15px;
      width:15px;
      background-image: url('/images/info.png');
      background-repeat: no-repeat;
      background-size: cover;
    }

.st-group{
  display: flex;
  flex-direction: row;
  margin-left: 12px;
}

.nd-group{  display: flex;
flex-direction: row;
margin-left: 26px;}


.darkspace{
background-color: #F6F8FC;
height:46px;
width:245px;
position: fixed;
right: 61px;
top:62px;
overflow: hidden;
z-index:2;
}

.whitespace{
height:47px;
position: fixed;
top:62px;
background-color: white;
overflow: hidden;
z-index:2;
display: flex;
flex-direction: row;
justify-content: space-between;
border-top-right-radius: 10px;
}


.number{
position: relative;
left:90px;
top:20px;
font-size: 12px;
color: rgba(0, 0, 0, 0.5);
}

.uno{
position: relative;
left:50px;
top:5px
}

.due{
position: relative;
top:5px
}


/* BODY */


.email-big-body{
position: relative;
right: 460px;top:440px;
height: 800px;
width: 100vw;
}

.email-body{
min-width:525px;
display: flex;
justify-content: center;
}


.email-big-primo-titolo h3{
font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
font-weight: 300;
font-size: 20px;
margin-left: 80px;
}


.email-big-primo-titolo{
display: flex;
flex-direction:row ;
}


.right{
display: flex;
flex-direction: row;
position:fixed ;
right:60px;
top:130px;
z-index: 10;
height: 95px;
width:190px;
overflow: hidden;
background: white;
}

.wrap:hover{
  background-color: #F6F8FC;
}

.wart{
    position:relative;
  top:20px;
  left:90px;
  }


  .firsto{
  height: 20px;
  width:20px;
  position: relative;
  top:8px;
  left:10px;
  background-image: url('/images/stampa.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.secondo{
  height: 20px;
  position: relative;
  top:8px;
  left:10px;
  width:20px;
  background-image: url('/images/open.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.right-header{
position: fixed;
right:75px;
top:193px;
z-index: 10;
display: flex;
align-items: center;
margin-left: 8px;
justify-content: center;
flex-direction: row;
margin-top: 5px;
}
.rispondi-darkspace

.right-header span{text-align: center}

.right-right-header{display: flex; align-items: center;}

.tempo{
font-size: 10px;
color: #5e5e5e
}

.w{
  position: relative;
  top:10px;
  left:10px
}
.freccia-indietro{
  background-image: url('/images/freccia-indietro.png');
  background-size: cover;
  background-repeat: no-repeat; 
  height: 20px;
  width:20px;
}
.puntini{
  background-image: url('/images/puntinni.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 20px;
  width:20px;
}

.secondo-titolo{
display: flex;
flex-direction: row;
align-items: center;
}

.thumbnail-picture{
border-radius: 100%;
height: 40px;
width:40px;
}

.title{
position:relative;
left:30px;
bottom:10px;
}

.user{
position: relative;
font-weight: 800;
font-size: small;}

.email{
font-weight: 300;
font-size: small;
color:#5f6368
}

/* RISPONDI */


.rispondi-whitespace{
height: 100px;
width:20px;
position: fixed;
bottom:40px;
background-color: #FFFFFF;
border-top-right-radius: 16px;
right:105px;
border-bottom-right-radius: 16px;
}

footer::before{
height: 300px;
width:75px;
position: absolute;
display: block;
content: '';
right:60px;bottom:95px;
background-color: white;

z-index: 10;
right: 350px;
bottom:20px
}


.comparsa{display:none}

.compari{display: contents;}

.scompari{display: none;}

.bottoni{
display: block;
gap:5px;
position: absolute;
left:0;
top:100px;
z-index: 20;
}

  .bottone{
border-radius: 18px;
margin-right: 8px;
align-items: center;
display: inline-flex;
justify-content: center;
position: relative;
z-index: 0;
-webkit-font-smoothing: antialiased;
font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
font-size: .875rem;
letter-spacing: normal;
box-sizing: border-box;
color: #444746;
cursor: pointer;
font-weight: 500;
height: 36px;
outline: none;
padding: 0 16px;
box-shadow: inset 0 0 0 1px #dadce0;
min-width: 104px;
  }

  .rispondi-header{
  width:100%;
  height:40px;

}

  footer{
width:100%;
height: 200px;

margin-left: 60px;
margin-top: 0px;
position: absolute;
top:260px;
  }

.rispondi-container{
display: block;
row-gap: 10px;
width:100%;
height: 100%;
position: relative;
left:30px;
bottom:40px;
border: 1px solid #e1e3e1;

box-sizing: border-box;
transition: border .15s cubic-bezier(0.4,0,0.2,1),box-shadow .15s cubic-bezier(0.4,0,0.2,1);
border: 1px solid #e1e3e1;
max-height: 280px;
}

.rispondi-container:hover{
box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
border: 1px solid transparent;
}

.rispondi::before{
background-image: url('/images/inoltra.png');
background-position: center;
background-repeat: no-repeat;
background-size: 20px;
opacity: 1;
content: "";
height: 20px;
display: block;
margin-right: 8px;
opacity: .71;
width: 20px;

}

.inoltra::before{
background-image: url('/images/rispondi.png');
background-position: center;
background-repeat: no-repeat;
background-size: 20px;
opacity: 1;
content: "";
height: 20px;
display: block;
margin-right: 8px;
opacity: .71;
width: 20px;
}


.rispondi-header-sinistra{
  display: flex;
  flex-direction: row;
  position: relative;
  bottom:31px;
  left:5px
}

.mail-username{
  margin-right: 0.33333333em;
    cursor: pointer;
    color: #444746;
    font-size: .875rem;
    text-align: left;
    white-space: nowrap;
    position: relative;
    top:5px
}

.rispondi-last-part{
border-top: 1px solid #e1e3e1;
position: relative
;top:60px;
height:30px}

#rispondi-text{
  position: relative;
  bottom:70px;
  left:20px;
  border:none
}

.container{
  display: flex;
  flex-direction:row ;
  justify-content: space-between;
  position: absolute;
  bottom:10px;
  left:15px;
  width:inherit;
  z-index: 4;
}

.mini-cont{
  display: flex;
  flex-direction: row;
}

.double-button{
position: relative;
background-color: #0b57d0;
border-radius: 20px;
overflow: hidden;
width:90px;
padding-left: 5px;
padding-right: 5px;
padding-top:2px;
padding-bottom:2px;
height: 30px;
}

.nd-pt{
position: relative;
background-color: #0b57d0; 
border:none;
width:15px;
cursor: pointer;
} 
.st-pt{
background-color: #0b57d0;
border:none;
border-right: 1px solid #F2F6FC;
color:#F2F6FC;
position: relative;
text-indent: -10px;
height: 30px;
width:60px;
cursor: pointer;
}


.point-down{
  height:15px;
  width:15px;
  background-size: cover;
  background-repeat: no-repeat;
background-image: url('/images/invia-btn.png');
position: relative;
top:3px
} 

.icona:hover{background-color: #d7d9dc}

.icona{
  width:20px;
  height:20px;
  border-radius: 7px;
  position:relative;
  top:3px;
  left:15px}

  .icone{
  width:280px;
  height:30px;
  position: relative;
  right:20px;
  top:3px;
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.st{
  background-image: url('/images/primo-scrivi-20.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.st:hover .black-box{
  visibility: visible;
  opacity: 0.9;
  position: relative;
  bottom:22px;
  right:65px
}
.nd{
  background-image: url('/images/secondo-scrivi-20.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.nd:hover .black-box{
  visibility: visible;
  opacity: 0.9;
  position: relative;
  bottom:22px;
  right:25px
}
.rd{
  background-image: url('/images/terzo-scrivi-20.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.rd:hover .black-box{
  visibility: visible;
  opacity: 0.9;
  position: relative;
  bottom:22px;
right:50px
}
.rth{
  background-image: url('/images/quarto-scrivi-20.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.rth:hover .black-box{
  visibility: visible;
  opacity: 0.9;
  position: relative;
  bottom:22px;
right:70px
}
.fth{
  background-image: url('/images/quinto-scrivi-20.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.fth:hover .black-box{
  visibility: visible;
  opacity: 0.9;
  position: relative;
  bottom:22px;
right:70px
}
.xth{
  background-image: url('/images/sesto-scrivi-20.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.xth:hover .black-box{
  visibility: visible;
  opacity: 0.9;
  position: relative;
  bottom:22px;
right:30px
}
.nth{
  background-image: url('/images/settimo-scrivi-20.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.nth:hover .black-box{
  visibility: visible;
  opacity: 0.9;
  position: relative;
  bottom:22px;
right:30px
}
.gth{
  background-image: url('/images/ottavo-scrivi.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.gth:hover .black-box{
  visibility: visible;
  opacity: 0.9;
  position: relative;
  bottom:22px;
right:70px
}
.nth{
  background-image: url('/images/settimo-scrivi-20.png');
  background-repeat: no-repeat;
  background-size: cover;

}
.nth:hover .black-box{
  visibility: visible;
  opacity: 0.9;
  position: relative;
  bottom:22px;
right:30px
}

.delete{
  background-image: url('/images/cestino-scrivi-20.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
height:24px;
width:24px;
right:140px;
margin-top: 5px;
border-radius: 5px;

}

.delete:hover{
  background-color: #d7d9dc;
}


.circle-with-name{
  cursor: pointer;
  position: relative;
  right:50px
}





.border-right{
    display: block;
    border-left: 1px solid #e1e3e1;
    background-color: white;
    height:201px;
    width:78px;
    position: relative;
    bottom:160px;
    left:25px
  }
  .ciao{
    position: absolute;
    top:400px
  }






  .email-content{

position: absolute;
left: 30px;
width:800px

  }



  .thumbnail-cont{
    position:relative;
    left:20px;
    top:3PX
  }

  .starselected{
    background-image: url('/images/stella-gialla.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 20px;
  width:20px;
  }
.star{
  background-image: url('/images/star_baseline_nv700_20dp.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 20px;
  width:20px;
}




.email-big-header{
  display:flex;
  flex-direction: row;
  /* width:100%; */

  height:48px;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
 border-bottom: 2px solid #f6f8fc;
}





  .normale{
    width:275px;
right: 31px;
  }
  .allunga{
    width:310px;
right: 0;
  }


  .rd-group{
    display: flex;
  flex-direction: row;
margin-left: 20px;
  }


    .special-popup{
      position: relative;
      right:30px;
      border-radius: 5px;
      height:40px;
      top:4px;
      width:30px;
      display:flex;
      justify-content: center;
      align-items: center;

    }
    .special-popup:hover{
      background:#f6f8fc
    }
    .i{
      position: relative;
    }






    @media screen and (max-width: 785px) {
   

.darkspace{
  right:0;
  z-index: 13;
  top:200px;
  height: 80vh;
  min-width:60px;
  position: relative;
  background-color: #F6F8FC;
  overflow: hidden;
}

.whitespace{visibility: hidden;}

.email-body{width:525px}

.email-big-main{width:468px}


.email-big-body{position: relative;
right: 525px
}

.right{position: absolute;
top:0px;
right:50px;}

.right-header{position: absolute;
top:55px;
right:10px;
    }} 


    @media screen and (max-width: 1008px) {
      .icons{z-index:12;
        overflow: hidden;
        background: white;
      }

}

#rispondi-input{border: none;
margin-top: 3px;
}

#rispondi-input:focus-visible {outline: none;}


textarea:focus-visible{outline: none;}


@media screen and (max-width:960px) {
.rispondi-whitespace{display: none;}
}

</style>