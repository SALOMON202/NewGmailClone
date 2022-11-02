<script>

export let classe = 'black-box'

</script>


<div class="black-box">
 <nobr>  {classe} ciao </nobr>

</div>




<style>

.black-box{
  background-color: rgba(0,0,0,0.8);
  border-radius: 6px;
  position: relative;
  width:fit-content;
  height:fit-content;
  color:white;
  text-align: center;
  padding-top:8px;
  padding-bottom:8px;
  padding-left: 4px;
  padding-right: 4px;
  font-size: x-small;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
 

}


</style>