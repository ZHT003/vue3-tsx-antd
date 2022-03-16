import { defineComponent } from "vue";

const index = () => {
  return () => <router-view></router-view>
}

export default defineComponent({
  name: 'Index',
  setup: index
})