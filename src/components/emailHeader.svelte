
<script>
import {  ThreeDots} from '../iconservice'
export let allungamento 
$:{Object.keys(sessionStorage).length}

</script>


<!-- favourites bold -->

<div class='mail-header'>
  <div class="first-mail-elem">
<div class="checked"></div>
<div class="minifreccia"></div>
  </div>
  <div class="second-mail-elem">
<div class="refresh"></div>
  </div>
  <div class='third-mail-elem'>
  <div class="threedots"></div>
  </div>
  <div class="fourth-mail-elem">
  
    <div class="darkspace" class:whitespaceLungo ={allungamento} class:whitespaceCorto ={!allungamento} >
      <div class="whitespace" class:whitespaceLungo ={allungamento} class:whitespaceCorto ={!allungamento} > 
        <div class="numbers">1 - {Object.keys(sessionStorage).length} di {Object.keys(sessionStorage).length}</div>
        <div class="frecce">
          <div class="first-arrow"></div>
          <div class="second-arrow"></div>
        </div>
        <div class="i"></div>
        <div class="imbuto"></div>
      </div>
    </div>
  </div>
</div>

<style>

.whitespaceLungo{
width:326px;
right:20px
}
.whitespaceCorto{
width:285px;
right: 61px;
}

  .numbers{
    font-size:13px;
    position:relative;
    top:18px;
  }

  .frecce{
    display: flex;
    flex-direction: row;
    position: relative;
    top:15px;
    left:38px
  }
      .imbuto{      height:20px;
      width:20px;
      background-image: url('/images/imbuto.png');
      background-repeat: no-repeat;
      background-size: cover;
      position:relative;
      left:120px;
      top:16px


    } 
    .i{
      height:15px;
      width:15px;
      background-image: url('/images/info.png');
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      left:85px;
      top:18px
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
      position: relative;
      left:20px
    }


.mail-header{
  display:flex;
  flex-direction: row;
  /* width:100%; */
z-index: 10;
position: static;
  height:48px;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
 border-bottom: 2px solid #f6f8fc;
 /* min-width:420px; */

}
.first-mail-elem{
  display:flex;
  flex-direction: row;
  padding-left: 12px;
}
.second-mail-elem{
  position:relative;
  left:33px;
  top:2px
}
.third-mail-elem{
  position:relative;
  left:57px;
  top:2px;

}
.whitespace{
  height:46px;

      position: fixed;

top:62px;
      background-color: white;
  overflow: hidden;
  z-index:2;
display: flex;
flex-direction: row;
  border-top-right-radius: 10px;
}
.darkspace{
  background-color: #F6F8FC;
  height:46px;

      position: fixed;

top:62px;

  overflow: hidden;
  z-index:2;

}
@media screen and (max-width:780px) {
    .whitespace{
  right:0;
  position: relative;
    }
    .darkspace{
display: none;
    }
  }

.checked{
  height:20px;
  width:20px;
  background-image: url('/images/check_box_outline_blank_baseline_nv700_20dp.png');
  background-repeat: no-repeat;
  background-size: cover;
  position:relative
}
.minifreccia{
  height:20px;
  width:20px;
  background-image: url('/images/minifreccia.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.refresh{
  height:20px;
  width:20px;
  background-image: url('/images/refresh.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  right:8px
}
.threedots{
  height:20px;
  width:20px;
  background-image: url('/images/threedots.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  right:8px
}
</style>

