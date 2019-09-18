/* eslint-disable import/prefer-default-export*/
/* eslint-disable */

<template>
  <div id="list">
    <li v-for="item in items">
      <button v-bind:disabled="item.checked" v-bind:class="{ checked: item.checked }" v-on:click.prevent="Item1(item)" class="block">{{item.name}}</button>
    </li>
  </div>
</template>

<script>
/* eslint-disablet*/
export default {
  name: 'ListView',
  data() {
    return {
      items: this.$store.state.items,
      isItem2: true
    }
  },
  mounted() {
      if (this.$store.state.init) {
        this.$store.dispatch( 'getList' ).then( res => {
          this.items = this.$store.state.items;
          this.$store.state.init = false;
        });
      }
  },
  methods: {
    Item1: function(item) {
        let itemObj = {name: item.name };
        this.$router.push({name: 'item1', params: {item: itemObj}});
    }
  }
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100%;
    background: #007bff;
    background:  linear-gradient(to right, #33AEFF,  #0062E6);
}
#app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    align-content: center;
}

li {
    display: inline;
    padding: 5px;
    align-items: center;
}
.block {
  display: inline-block;
  width: 50%;
  border: 5px solid #e7e7e7;
  background-color: #555555;
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  margin: 0 0 20px 0;
  border-radius: 8px;
}

.checked {
  background-color: #4CAF50;
  cursor: not-allowed;
}

.block:hover {
  background-color: #ddd;
  color: black;
}

</style>