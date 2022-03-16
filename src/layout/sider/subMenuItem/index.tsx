import { defineComponent, SetupContext } from "vue";
import menuItem from '../menuItem'
interface SubMenuItemProps{
  key: string
  icon?: string
}

const subMenuItem = (props: SubMenuItemProps, {slots}: SetupContext) => {
  const item = Array.from({length:10}).map((item, i) => ({
    key: `${i}`,
  }))
  const renderItem = ():JSX.Element[] => (
    item.map((item,i) => {
      return <menuItem key={item.key} />
    })
  )
  const subMenuSlots = {
    title: () => (<span>
      <span>
        <i-icon name="icon" />
      </span>
      <span>User</span>
    </span>)
  }
  return () => {
    return ( 
      <a-sub-menu key={props.key} v-slots={subMenuSlots}>
        {renderItem()}
      </a-sub-menu>
    )
  }
}

export default defineComponent({
  name: 'SubMenuItem',
  components: {
    menuItem
  },
  props: {
    key: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  setup: subMenuItem
})