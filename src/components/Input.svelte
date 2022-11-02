<script>
export let label
export let value
export let etichetta 
let state = false
const stateChanger = () => {
state = true
}
const changerState = () => {
  state = false
}

$: value
 $: value===' ' ? state==false: state ==true

</script>



 <div class="input-container">
  <div class="input-field col s12">  
    <input  bind:value id='input' name={label}  {...$$restProps} 
    class="input" class:transformed ={state} on:focus={stateChanger} on:blur={changerState} > 
   <div id='inside-input'
   class:transform ={state} >{etichetta}</div> 
  </div></div>

 <style>




.input-container {

  width:370px;
  height:55px;
  position:relative;
  bottom:55px;
/* border-color:#d7d9dc ; */
border:1px solid #d7d9dc;
border-radius: 4px;
background: inherit;

  }
  .input{
    border-radius: 4px;
    width:360px;
  height:50px;
border:none;
position: relative;
text-indent: 14px;
background-color: transparent;
 z-index: 2;
  }
  .input:focus{
    border:2px solid #1a73e8;
  }

  .input:focus-visible {
    outline: none;
}
#inside-input{
  position: relative;
  bottom:33px;
  left:16px;
  cursor: text;

  z-index: 0;
  transition: all 150ms cubic-bezier(0.4,0,0.2,1)


}
.transform{
  transform: scale(0.75) translate(-48px , -42px) ;
z-index: 3;
color: #1a73e8;
background-color: #F6F8FC;
width:fit-content;
text-align: center;
padding-left: 10px;
padding-right: 10px;
margin-left: 5px;
transition: all 150ms cubic-bezier(0.4,0,0.2,1)

}
.transformed{
  z-index: 0;
}


 </style>
