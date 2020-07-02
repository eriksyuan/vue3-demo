<template>
  <div>
    <p>state:{{ state.count }}</p>
    <p>double:{{ state.double }}</p>
    <button @click="increment">add</button>
  </div>
</template>

<script>
import { reactive, computed } from "vue"
export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    })
    function increment() {
      state.count++
    }
    return {
      state,
      increment,
    }
  },
}
</script>
