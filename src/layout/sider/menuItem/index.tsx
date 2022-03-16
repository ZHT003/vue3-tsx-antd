import { defineComponent } from "vue";

interface MenuItemProps{
  key: string
  icon?: string
}

const menuItem = (props: MenuItemProps) => {
  const renderIcon = ():JSX.Element | undefined => (
    props.icon ? <i-icon name={props.icon} /> : undefined
  )
  return () => {
    return ( 
      <a-menu-item >
        {renderIcon()}
        <span>nav 3</span>
      </a-menu-item>
    )
  }
}

export default defineComponent({
  name: 'MenuItem',
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
  setup: menuItem
})