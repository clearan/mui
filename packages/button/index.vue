<template>
  <div :class="mCLass">
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: 'MButton'
}
</script>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  }
})
console.log(props.type)
const mCLass = computed(() => {
  return ["m-button", `m-button-${props.type}`]
})
</script>

<style scoped lang="scss">
button {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
}
.m-button {
  button {
    padding: 12px 24px;
    border-radius: 4px;
    border: 1px solid #b4b0b0;
    &:hover {
      opacity: 0.8;
    }
  }
}
.m-button-default {
  button {
    background-color: #b4b0b0;
  }
}
.m-button-success {
  button {
    background-color: #0eac77;
  }
}
.m-button-warn {
  button {
    background-color: #E28717FF;
  }
}
</style>