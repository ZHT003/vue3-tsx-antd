import { defineComponent, PropType, ref } from "vue";
import menuItem from "../menuItem";
import subMenuItem from "../subMenuItem";

type MenuList = {
  key: string
  icon?: string
}

interface CustomMenuProps {
  // selectedKeys: string[]
  // collapsed: boolean,
  menuList: MenuList[]
}

const customMenu = (props: CustomMenuProps) => {
  console.log(props)
  const selectedKeys = ref<string[]>(['1'])
  const collapsed = ref<boolean>(false)
  const renderMenuItem = ():JSX.Element[] => (
    props.menuList.map((item) => {
      return <subMenuItem icon={item.icon} key={item.key}  />
    })
  )
  return () => {
    return (
      <a-menu v-model={[selectedKeys.value, 'selectedKeys']} theme="dark" mode="inline">
        {renderMenuItem()}
      </a-menu>
    )
  }
}

export default defineComponent({
  name: 'CustomMenu',
  components: {
    menuItem,
    subMenuItem
  },
  props:{
    menuList: {
      type: Array as PropType<MenuList[]>,
      default: ():MenuList[] => []
    },
  },
  setup: customMenu,
})