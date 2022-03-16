import { defineComponent } from "vue";
import customMenu from './customMenu'
interface SiderProps {
  collapsed: boolean
}
const sider = (props: SiderProps) => {
  
  return () => {
    const item = Array.from({length:10}).map((item, i) => ({
      key: `${i}`,
    }))
    return (
      <a-layout-sider v-model={[props.collapsed, 'collapsed']}>
          <div class="logo" />
          <customMenu menuList={item} />
        </a-layout-sider>
    )
  }
}

export default defineComponent({
  name: 'Sider',
  components: {
    customMenu,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
    // nowRoutes: {
    //   type: Array as PropType<RouteLocationMatched[]>,
    //   default: [] as RouteLocationMatched[],
    // },
  },
  setup: sider
})