<template>
  <div class="form-input">
    <label>{{labelText}}</label>
    <input type="text" v-model="value" v-on:input="onChange"/>
  </div>
</template>
<script src="./FormTextInputScript.js"></script>
<style lang="scss" src="./FormTextInputStyle.scss" scoped=""></style>
