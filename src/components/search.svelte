<script>
// import {fade} from 'svelte/transition'
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher()
import { lente, ricerca } from "../iconservice";
let active = false
const switcher = () => {
active = !active
}
const searchInput = document.querySelector('.searcher')
const watchInput = (e) => {
  const value = e.target.value

  dispatch('inputValue' , value)
}
// const selectSearching = document.querySelector('.searching-box');
// function activate() {
//   selectSearching.classList.add('selected');
// }
// function deActivate() {
//   selectSearching.classList.remove('selected');
// }

</script>

<div class="search-box {active ? 'active' : ''}" >

  <div class="svg-box-lente">
    {@html lente}
    <div class="black-box">
      <nobr>Ricerca</nobr>
    </div>
  </div>
  <input type='search' class='searcher'  placeholder="Cerca nella Posta" on:mousedown={switcher} on:blur={switcher} on:input={watchInput} >
  <div class="ricerca-box">
    {@html ricerca}
    <div class="black-box">
      <nobr>Mostra Opzioni di Ricerca</nobr>
    </div>
  </div>
</div>

<style>





.svg-box-lente{
  height:40px;
  width:40px;
  cursor: pointer;
  border-radius: 100%;
  position: relative;
  left:10px;
  top:4px;
  z-index:20;
}
.svg-box-lente:hover{
  background-color: #d7d9dc;
}
.search-box{
  display:flex;
  width:64vw;
 min-width:320px;
max-width: 720px;

 /* width:50%; */
  height: 46px;
  background-color: #EAF1FB;
  border-radius:10px;
align-items: center;
  justify-content: space-between;
  transition: background 100ms ease-in,width 100ms ease-out;
}
.searcher{

  height:46px;
  background-color: transparent;
  border: none;
  position: relative;
left:0;
  width:100%;

  font-size: 16px;
}
.searcher:focus-visible {
    outline: none;
}
 .active{background-color: white;
  box-shadow: 0px 0.5px 2.5px 0.5px grey;}
.ricerca-box{
  height:40px;
  width: 40px;
  z-index:20;
  border-radius: 100%;
  margin-right: 10px;
}
.ricerca-box:hover{
    background:#d7d9dc;
}
.svg-box-lente:hover .black-box{
  visibility: visible;
  opacity: 1;
  position:relative;
}
.ricerca-box:hover .black-box{
  visibility: visible;
  opacity: 1;
  position:relative;
  right:65px;
  top:10px
}
</style>
<!--  background-color: #C2E7FF; -->