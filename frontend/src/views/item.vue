/* eslint-disable import/prefer-default-export*/
/* eslint-disable */

<template>
  <div class="item">
    <h1>{{item.name}} Check</h1>
    <div><video ref="video" id="video" width="640" height="480" autoplay muted="muted"></video></div>
    <div><button id="snap" v-on:click="capture()">Snap Photo</button></div>
    <div id="finish" v-bind:class="{ hidden: !currentItem.checked }" v-on:click="returnToList()" >
      <p>Great!! Image has been recognized.</p>
      <p>Return to List.</p>
    </div>
    <ul>
      <li v-for="c in captures" :key="c.id">
        <img v-bind:src="c" height="50" />
      </li>
    </ul>
    <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
  </div>
</template>

<script>
/* eslint-disablet*/
export default {
  name: 'ItemView',
  props: {
    item: {
      type: Object,
          default: () => {
            return {};
          }
      }
  },
  data() {
    return {
      captures: [],
      currentItem: this.$store.state.items[this.item.name]
    }
  },
  async mounted() {
    this.video = this.$refs.video
    var enumeratorPromise = await navigator.mediaDevices.enumerateDevices();
    console.log(enumeratorPromise[0].kind) 
    let videoInput = [];
    for (let element of enumeratorPromise) {
      if (element.kind === "videoinput") {
        videoInput.push(element.kind);
      }
    }
    let type = "environment";
    if (videoInput.length == 1) {
      type = "user";
    }
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
       await navigator.mediaDevices.getUserMedia({video: { 
            facingMode: type 
          } }).then( stream => {
          this.video.srcObject = stream
          this.video.play()
      }).catch( err => console.debug( err ) );
    }
  },
  methods: {
    capture() {
      const canvas = this.$refs.canvas;
      const video = this.$refs.video;
      const context = canvas.getContext(`2d`).drawImage( video, 0, 0, 640, 480 );
      this.captures.push(canvas.toDataURL(`image/png`));
      let obj = {};
      obj.captures = this.captures;
      obj.name = this.currentItem.name;
      this.$store.dispatch('newImage', obj );
    },
    returnToList() {
      this.$router.push({ name: 'list', });
    }
  },
}
</script>

<style>
body {
    background-color: #333;
}
#app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
#video {
    background-color: #000000;
    border-radius: 20px;
}
#canvas {
    visibility:hidden;
}
li {
    display: inline;
    padding: 5px;
}

.hidden {
    visibility:hidden;
}

.fine {
    
}

#finish {
  display: inline-block;
  width: 50%;
  background-color: green;
  color: white;
  padding: 14px 28px 10px 10px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  margin: 20px 0 20px 0;
  border-radius: 8px;
}
</style>