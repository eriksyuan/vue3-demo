<template>
  <div>
    {{x}}----{{y}}
  </div>
</template>

<script>
import UseMousePosition from "./useMousePosition"
export default {
  setup() {
    const { x, y } = UseMousePosition()
    return {
        x,y
    }
  },
}
</script>

<style lang="scss" scoped></style>
