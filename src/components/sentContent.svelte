<script>
import {createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()
export let allungamento
export let valore





valore = '@'

let chiavi = (Object.keys(localStorage))
let toggleEmail = false


 function emailSelected( ) {

toggleEmail = !toggleEmail

}

// })}


let select = false

const favourites = () => {
  select = !select
}
let set =  JSON.parse(localStorage.getItem(`${chiavi[1]}`))
let n = 1
console.log(set)

const selecto = (chiave) => {
  console.log('selected' , chiave)
}
let value 

let tuttiInviati 
const changeSent = () => {
tuttiInviati  = false

dispatch('cambiaInviati' , tuttiInviati)
}

let hour








</script>



<!-- creare email content che ne spara fuori solo uno , e poi ne metto tanti nel sent

tanti quante sono le key del localstorage-->

   <!-- JSON.parse(localStorage.getItem(`${chiave}`))[3] -->
  {#each chiavi as chiave }
  {#if !chiave.includes('speciale') && !chiave.includes('risposta')}
  
  <div id="email--container"   class:invisible={(JSON.parse(localStorage.getItem(`${chiave}`))[0]).includes(valore) ? false : true}  class:toggled = { value == chiave ? toggleEmail : console.log('nono')}  on:mouseenter={()=> {
    value = JSON.parse(localStorage.getItem(`${chiave}`))[3]
     if ( value == chiave ) {
     toggleEmail = true
     }
      else {
        console.log(JSON.parse(localStorage.getItem(`${chiave}`))[3])
        console.log(chiave)
      }
    }}   on:mouseleave={()=> {
      if ( value == chiave ) {
     toggleEmail = false
      console.log(chiave)}
      else {
        console.log('no')
      }
    }}
    on:click={() => {
      let destinatario = JSON.parse(localStorage.getItem(`${chiave}`))[0]
      let oggetto = JSON.parse(localStorage.getItem(`${chiave}`))[1]
      let messaggio = JSON.parse(localStorage.getItem(`${chiave}`))[2]
      let dates = JSON.parse(localStorage.getItem(`${chiave}`))[4]
      let tutto = JSON.parse(localStorage.getItem(`${chiave}`))
      let kiave = chiave
      console.log(messaggio)
      dispatch('elementi' , {destinatario , oggetto , messaggio , dates , tutto , kiave});
     
    }} 
    on:click|self={ changeSent} 
    

    >
    <div class="primi-due">
      <div class="checkbox" on:click={emailSelected} ></div>
       <div class="star" class:selected ={select} on:click = { value == chiave ? favourites : console.log('ciao') }></div></div>
       <div class="prima-pt">
       <span class='received-email frst'><nobr>A:  { JSON.parse(localStorage.getItem(`${chiave}`))[0]}</nobr></span> 
       <span class='received-email scnd'> { JSON.parse(localStorage.getItem(`${chiave}`))[1]}</span> 
       <div class="email-text">
        <nobr>
          <div class="scritte">
        <div class="posta-in-arrivo">Posta in Arrivo</div>
        <p class='dopo'><span class = 'different-color'>{ JSON.parse(localStorage.getItem(`${chiave}`))[1]}</span> - { JSON.parse(localStorage.getItem(`${chiave}`))[2]}</p>
      </div></nobr>
       </div></div>
       <div class="whitespace" class:white-toggle={toggleEmail} class:allungaWhitespace = {allungamento} class:WhitespaceNormale = {!allungamento}> <nobr><span class='dob' class:showin={ value == chiave ? toggleEmail : console.log('nono')}>{ JSON.parse(localStorage.getItem(`${chiave}`))[4]}</span></nobr>
       <div class="toggled-content" >
         <div class="first oo" class:showing={ value == chiave ? toggleEmail : console.log('nono')}><div class="first-img w"></div> <div class="black-box">
           <nobr>Archivia</nobr>
         </div></div>
         <div class="second oo" class:showing={ value == chiave ? toggleEmail : console.log('nono')}><div class="second-img w"> <div class="black-box">
           <nobr>Elimina</nobr>
         </div></div></div>
         <div class="third oo" class:showing={ value == chiave ? toggleEmail : console.log('nono')}><div class="third-img w"> <div class="black-box">
           <nobr>Segna come da leggere</nobr>
         </div></div></div>
         <div class="fourth oo" class:showing={ value == chiave ? toggleEmail : console.log('nono')}><div class="fourth-img w"> <div class="black-box">
           <nobr>Posticipa</nobr>
         </div></div></div>
       </div></div>
       <div class="right-Space-shrunk"><span class='dobo' class:invisibile = { value == chiave ? toggleEmail : console.log('nono')}>{ JSON.parse(localStorage.getItem(`${chiave}`))[4]}</span></div>
     </div>
        








    {:else if chiave.includes('risposta') && !chiave.includes('secondaparte')}

    <div id="email--container"  class:toggled = { chiave == `risposta${value}`  ? toggleEmail : console.log('nono')}  on:mouseenter={()=> {
      value = JSON.parse(localStorage.getItem(`${chiave}`))[2]
       if (  chiave == `risposta${value}` ) {
       toggleEmail = true
       }
        else {
          console.log(JSON.parse(localStorage.getItem(`${chiave}`))[2])
          console.log(chiave)
        }
      }}   on:mouseleave={()=> {
        if (  chiave == `risposta${value}` ) {
       toggleEmail = false
        console.log(chiave)}
        else {
          console.log('no')
        }
      }}
      on:click={() => {
        let destinatarioo = JSON.parse(localStorage.getItem(`${chiave}`))[0]
        let messaggioo = JSON.parse(localStorage.getItem(`${chiave}`))[1]
        let idd = JSON.parse(localStorage.getItem(`${chiave}`))[2]
        let datess = JSON.parse(localStorage.getItem(`${chiave}`))[3]
        let emaill = JSON.parse(localStorage.getItem(`${chiave}`))[4]
        let loginUUIDs = JSON.parse(localStorage.getItem(`${chiave}`))[5]
        let oggettii = JSON.parse(localStorage.getItem(`${chiave}`))
        let kiave = chiave
        dispatch('elementis' , {destinatarioo , messaggioo , idd , datess , emaill ,loginUUIDs,oggettii ,  kiave});
       
      }} 
      on:click|self={ changeSent} 
      
  
      >
      <div class="primi-due">
        <div class="checkbox" on:click={emailSelected} ></div>
         <div class="star" class:selected ={select} on:click = { chiave == `risposta${value}`? favourites : console.log('ciao') }></div></div>
         <div class="prima-pt">
         <span class='received-email frst'><nobr>A:  { JSON.parse(localStorage.getItem(`${chiave}`))[4]}</nobr></span> 
         <span class='received-email scnd'> { JSON.parse(localStorage.getItem(`${chiave}`))[1]}</span> 
         <div class="email-text">
          <nobr>
            <div class="scritte">
          <div class="posta-in-arrivo">Posta in Arrivo</div>
          <p class='dopo'><span class = 'different-color'> Utente { JSON.parse(localStorage.getItem(`${chiave}`))[5]}</span> - { JSON.parse(localStorage.getItem(`${chiave}`))[1]}</p>
        </div></nobr>
         </div></div>
         <div class="whitespace" class:white-toggle={toggleEmail} class:allungaWhitespace = {allungamento} class:WhitespaceNormale = {!allungamento}> <nobr><span class='dob' class:showin={chiave == `risposta${value}` ? toggleEmail : console.log('nono')}>{ JSON.parse(localStorage.getItem(`${chiave}`))[3]}</span></nobr>
         <div class="toggled-content" >
           <div class="first oo" class:showing={chiave == `risposta${value}` ? toggleEmail : console.log('nono')}><div class="first-img w"></div> <div class="black-box">
             <nobr>Archivia</nobr>
           </div></div>
           <div class="second oo" class:showing={chiave == `risposta${value}` ? toggleEmail : console.log('nono')}><div class="second-img w"> <div class="black-box">
             <nobr>Elimina</nobr>
           </div></div></div>
           <div class="third oo" class:showing={chiave == `risposta${value}` ? toggleEmail : console.log('nono')}><div class="third-img w"> <div class="black-box">
             <nobr>Segna come da leggere</nobr>
           </div></div></div>
           <div class="fourth oo" class:showing={chiave == `risposta${value}` ? toggleEmail : console.log('nono')}><div class="fourth-img w"> <div class="black-box">
             <nobr>Posticipa</nobr>
           </div></div></div>
         </div></div>
         <div class="right-Space-shrunk"><span class='dobo' class:invisibile = {chiave == `risposta${value}` ? toggleEmail : console.log('nono')}>{ JSON.parse(localStorage.getItem(`${chiave}`))[3]}</span></div>
       </div>


  
  
  {/if}     {/each}
    
    
  <!--   -->
<!-- {hour}:{minutes}  on:click={console.log(value)}-->

<style>
  .frst{
    max-width: 100px;
  }
  .scnd{
    display: none;
  }
  .allungaWhitespace{
width:190px;
right:20px
}
.WhitespaceNormale{
width:150px;
right:60px;
}
  .invisible{
    visibility:hidden
  }
  .white-toggle{
    width:210px;

  }
  .w{
    position: relative;
    left:8px;
    top:8px
  }
    .oo{
      width:38px;
      height: 38px;
    border-radius: 100%;
    position: relative;
    left:16px;
    margin-right: 1px;
  }
  .second{
left:20px
  }
  .third{
    left:25px
  }
  .fourth{
    left:30px
  }
  .dob{
    display: flex;
    flex-direction:row ;
    font-size: 12px;
    position: relative;
left:70px;
    color:#666
  }

  .scritte{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    left:150px;
    bottom:10px
  }
  .whitespace{
  text-align: right;
height:24px;
  
    position: fixed;

    /* background-color: white; */
/* overflow: hidden; */
z-index:3;
background-color: #F2F6FC;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
transition:width 0.5s;
transition:right 0.5s

}
  .showin{
    visibility:hidden
  }
    .showing{
    visibility: visible;
  }
  .different-color{
    padding-left: 5px;
  }
  .primi-due{
    display: flex;
    flex-direction: row;
    position: relative;
 left:13px
  }
  .checkbox{
    background-image: url('/images/check_box_outline_blank_baseline_nv700_20dp.png');
    background-repeat: no-repeat;
    background-size: cover;
    opacity:0.25;
    height:20px;
    width:20px
  }
.email-text {
  display:flex;
  flex-direction: row;
  align-items: center;
  position: relative;
    left:80px;
 
    width:40vw;
    overflow-x: hidden;
    
  
}
.posta-in-arrivo{
  background-color: #ddd;
  color: #666;
  border: none;
    border-radius: 4px;
    box-sizing: border-box;
    height: 100%;
    padding: 2px 4px;
    font-size: 12px ;
    /* -webkit-font-smoothing: auto;
    font-size: .75rem;
    letter-spacing: normal;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    height: 18px;
    line-height: 18px;
    margin: 0 6px 0 0;
    outline: none;
    text-decoration: none; */
}
#email--container{
  display:flex;
  flex-direction: row;
  row-gap: 10px;
border-bottom:1px solid #d7d9dc;
max-width: 100%;
position: relative;
 height:38px;
overflow: hidden;
align-items: center;
background: #F2F6FC;

}


  .star{
    background-image: url('/images/star_baseline_nv700_20dp.png');
    background-repeat: no-repeat;
    background-size: contain;
    height:20px;
    min-width:20px;
    position: relative;
    opacity: 0.25;
    left:8px;
    z-index:10

  }
  .received-email{
    position: relative;
    left:40px;min-width: 150px;
 overflow-x: hidden;
 top:20px;


 
  }
  .selected{
    background-image: url('/images/stella-gialla.png');
  }
  .first-img{
background-image: url('/images/email-content-first.png');
background-repeat: no-repeat;
background-size: cover;
height:20px;
width:20px;

  }
  .second-img{
    background-image: url('/images/bin-email-content.png');
background-repeat: no-repeat;
background-size: cover;
height:20px;
width:20px;

  }
  .third-img{
    background-image: url('/images/mail-email-content.png');
background-repeat: no-repeat;
background-size: cover;
height:20px;
width:20px;


  }
  .fourth-img{
    background-image: url('/images/schedule_baseline_nv700_20dp.png');
background-repeat: no-repeat;
background-size: cover;
height:20px;
width:20px;


  }
  
  .oo:hover{
    background-color:#d7d9dc

  }
  .toggled-content{
    display:flex;
    flex-direction: row;
    visibility: hidden;
    position: relative;
    right:80px;
    align-items: center;

  }
  .dobo{
    display: none;
  }
  .toggled{

border:1px solid #f6f8fc;
border-bottom: 2px solid #f6f8fc;
box-shadow: 0px 2px 9px -2px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 2px 9px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 2px 9px -2px rgba(0,0,0,0.75);
z-index:2
}
@media screen and ( max-width:1175px){
     .whitespace{
    height:28px;
background-color: inherit;

  }   
}
@media screen and (max-width:836px) {
   .invisible{
    max-height: 0;
    border:0
  } 
  #email--container {
    height:80px;
 
  }
  .whitespace{
    position: absolute;
    top:20px;
    left:355px;
background-color: transparent;
    width:100px
  }
  .email-text{
  
 position: relative;
width:510px;
right:20px;
left:-10px;bottom:10px;
display: flex;
justify-content: space-between;



  }
.dopo{
  position: relative;
  right:202px;
  top:14px
}
  .posta-in-arrivo{
position: relative;
left:150px
  }
  .frst{
    top:0;
    left:28px
  }
  .prima-pt{
    display:flex;
    flex-direction: column;
    position: relative;
top:10px;
    right:25px;

  }
.scnd{
   display: block; 
position: relative;
top:3px;
left:28px

}
.dob{
left:100px;
bottom:14px;

}
    .star{
  left:385px;
  top:22px;
  
}
.checkbox{
  position: relative;
  bottom:20px
}
.posta-in-arrivo{
  position: relative;
  top:14px;
  left:160px;
  z-index: 20;
}
  }
   @media screen and (max-width:780px) {
.invisibile{
opacity: 0;
}
    .whitespace{
    position: absolute;
    top:10px;
    right:50px;
    height: 18px;

  }
    .right-Space-shrunk{
      display: flex;

      position: absolute;
      right:20px
    }
    .dob{
      display: none;
    }
.dobo{
  display: block;
  position: relative;
  top:-20px;
 
  left:5px;
  z-index: 9;
  font-size: 12px;  color:#666
}
.toggled-content{
  z-index:13;
  background-color: #F2F6FC;
}
  } 
</style>