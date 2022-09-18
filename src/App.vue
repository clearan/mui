<template>
  <m-button>自定义按钮</m-button>
  <m-button type="success">自定义按钮</m-button>
  <m-button type="warn">自定义按钮</m-button>
  <m-input v-model:val="value"></m-input>
  <p>{{value}}</p>
</template>

<script setup>
// import {MInput} from "clear-mui";
import {ref} from 'vue'
const value = ref("")
</script>