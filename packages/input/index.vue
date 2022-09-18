<template>
  <div>
    <input type="text" :value="val" @input="updateVal">
  </div>
</template>

<script>
export default {
  name: "MInput"
}
</script>
<script setup>
const emit = defineEmits(['update:val'])
const props = defineProps({
  val: String | Number // 默认prop名字叫modelValue ，更新的事件名叫update:modelValue。对应vue2的是value,input事件

})

const updateVal = e => {
  console.log(e.target.value)
  emit('update:val', e.target.value)
}
</script>

<style scoped>

</style>