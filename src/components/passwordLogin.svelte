<script>
import { Gmail } from '../iconservice';
 import Input from "./Input.svelte";


let username
let disattivo = true
let inputType = 'text' 


const attiva = () =>{disattivo = false}
const typeChanger = () => { 
  if (inputType === "text") {
    inputType = "password";
  } else {
    inputType = "text";
  }
}


</script>


<main>
  <div class="login-div">
    <div class="loadingBar" class:disattiva={disattivo}>
      <div class="movingpoint zero"></div>
    </div>
    <div class="row">  
      {@html Gmail}
    </div>  
    <h5>Samuele Rinaldi</h5>
    <div class="identifier">
      <div class="img"></div>
      <div class="email">samuelee.rinaldi@gmail.com</div>
      <div class="down"></div>
    </div>
    <form on:submit|preventDefault  on:submit={attiva} >
      <div class="input" >
        <Input etichetta ='Inserisci la password' class='ciao'label =' '  bind:value={username} type={inputType} required  />
      </div>
      <div class="check"><div class="checkbox-cont"><input type='checkbox' id='show' on:click={typeChanger}></div> <label for= 'show' >Mostra password</label></div>
      <div class="last-flex">
        <button class='not passwordforgot'>Password dimenticata?</button>
          <button class='avanti'>Avanti</button>
      </div>
    </form>
  </div>
</main>




<style>
  main{    
    font-family: roboto,"Noto Sans Myanmar UI",arial,sans-serif;
  }  
  .login-div{  
    margin: 0 auto;
    border:1px solid #d7d9dc;
    position: relative;
    top:6vh;
    width:450px;
    height:450px;
    border-radius: 10px;
    padding-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
  }  
  .avanti{
  width:90px;
  border:0;
  position: relative;
  left:110px;
  top:20px;
  cursor: pointer;
  border-radius: 6px;
  background-color:#1a73e8;
  color:white;
  padding:8px 12px;
  font-weight: bold;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  height:35px
}
.last-flex{
  display:flex;
  align-items: center;
}
.loadingBar{
  position:relative;
  height: 5px;
  width:430px;
  bottom:51px;
}
.movingpoint{
  height:6px;
  width:100px;
  position:relative;
  left:0;
  background-color: #1a73e8;
  animation-name: movingpoint;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
.zero{animation-name: zero;}

.disattiva{display:none}

.input{
position: relative;
top:20px
}

h5{
    font-size: 20px;
    text-align: center;
    position: relative;
    bottom:44px;
    font-weight: 200;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .identifier{
    width:276px;
    height: 32px;
    position:relative;
bottom:75px;
    border:1px solid #d7d9dc;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

  }
  .img{
   background-image: url(/images/unnamed.png); 
    height:22px;
    width:22px;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 20px;
  }
  .down{
background-image: url(/images/greater-than-symbol.png);
height:18px;
    width:18px;
    background-repeat: no-repeat;
    background-size: contain;
    transform: rotate(90deg);
  }
  #show{
    position: relative;
    bottom:22px;
    width: 18px;
    height: 18px;
    border: 2px solid currentColor;
  }
  label{
    position: relative;
    bottom:20px;
    height:18px
  }
  .check{
    display: flex;
    flex-direction: row;
  }
  .not{    border-radius: 4px;
    color: #1a73e8;
    display: inline-block;
    font-weight: 500;
    letter-spacing: .25px;
    outline: 0;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    font-size: inherit;
    padding: 0;
    text-align: left;
    border: 0;
 }
 .passwordforgot{
  position: relative;
  top:25px
 }

@keyframes zero{
  from { left : 0; }
  to { left : 100%; }
}

@media screen and (max-width:600px) {
  .login-div{
    width:unset;
    height:unset;
    border:none

  }
}


</style>

