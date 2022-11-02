<script>
import { question , impostazioni, grid, cerchio} from '../iconservice'


</script>

<div class="header-right-side">
  <div class="svg-box question">
    
    {@html question}
    <div class="black-box">
      <nobr>Assistenza</nobr>
    </div>
  </div>
  <div class="svg-box impostazioni">
    
    {@html impostazioni}
    <div class="black-box">
      <nobr>Impostazioni</nobr>
    </div>
  </div>
  <div class="svg-box nineCircles">
    
 {@html grid}
 <div class="black-box">
  <nobr>App Google</nobr>
</div>
  </div>
  <div class="circle-with-name">
{@html cerchio}
<div class="black-box special">
<nobr>Account Google</nobr><br>
<nobr><span class='greyish'>Samuele Rinaldi</span></nobr>
<nobr><span class='greyish'>samuelee.rinaldi@gmail.com</span></nobr>
</div>
  </div>
</div>


<style>

  .svg-box{
    height:44px;
    width:44px;
    border-radius: 100%;
    cursor: pointer;

  }
.svg-box:hover{
  background-color: #d7d9dc;
}

.header-right-side{
display: flex;
padding-left: 20px;
/* padding-right: 20px; */
z-index: 3;
}
.circle-with-name{
  cursor: pointer;
}
@media screen and (min-width: 1180px) {
  .header-right-side{
    position: fixed;
    right:15px
  }
}

.question:hover .black-box{
  visibility: visible;
  opacity: 0.9;
  position:relative;
  right:17px;
  top:7px
}
.impostazioni:hover .black-box{
  visibility: visible;
  opacity: 0.9;
  position:relative;
  right:25px;
  top:7px
}
.nineCircles:hover .black-box{
  visibility: visible;
  opacity: 0.9;
  position:relative;
  right:25px;
  top:3px
}
.special{
  visibility: 1;
  display: none;
  text-align: left;
}
.circle-with-name:hover .special{
  visibility: visible;
  opacity: 0.9;
  display: block;
  position:absolute;
  right: 20px;
}
.circle-with-name{
  cursor: pointer;
}
.greyish{
  color:#F6F8FC
}
</style>
