/* eslint-disable import/prefer-default-export*/
/* eslint-disable */

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
/* eslint-disablet*/
export default {
  name: 'app',
  data() {
    return {
      captures: []
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
}
.block {
  display: block;
  width: 100%;
  border: none;
  background-color: #4CAF50;
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.block:hover {
  background-color: #ddd;
  color: black;
}
</style>
