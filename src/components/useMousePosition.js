import {ref,onMounted,onUnmounted} from 'vue'


const UseMousePosition = () => {
    const x = ref(0)
    const y = ref(0)

   const updateMouse = (e) => {
       x.value = e.pageX
       y.value = e.pageY
   }

    onMounted(()=>{
        window.addEventListener('mousemove',updateMouse)
    })
    onUnmounted(()=>{
        window.removeEventListener('mousemove',updateMouse)
    })
    return {x,y}
}

export default UseMousePosition