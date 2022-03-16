import { defineComponent, ref } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import styles from './index.module.less'
import { Layout, LayoutSider, LayoutContent, LayoutHeader } from "ant-design-vue";

const layout = () => {
  const selectedKeys = ref<string[]>(['1'])
  const collapsed = ref<boolean>(false)
  return () => {
    return (
      <Layout class={styles['layout']}>
        <LayoutSider v-model={[collapsed.value,'collapsed']} class={styles['layout-sider']} trigger={null} collapsible>
          <div class={styles['logo']} />
          <a-menu v-model={[selectedKeys.value, 'selectedKeys']} theme="dark" mode="inline">
            <a-menu-item key="1">
              <user-outlined />
              <span>nav 1</span>
            </a-menu-item>
            <a-menu-item key="2">
              <video-camera-outlined />
              <span>nav 2</span>
            </a-menu-item>
            <a-menu-item key="3">
              <upload-outlined />
              <span>nav 3</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <a-menu-item key="4">Tom</a-menu-item>
              <a-menu-item key="5">Bill</a-menu-item>
              <a-menu-item key="">Alex</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </LayoutSider>
        <a-layout class={styles['layout-container']}>
        <LayoutHeader class={styles['layout-header']}>
          {collapsed.value ? <menu-unfold-outlined
            class={styles['trigger']}
            onClick={() => (collapsed.value = !collapsed.value)}
          /> : <menu-fold-outlined class={styles['trigger']} onClick={() => (collapsed.value = !collapsed.value)} />
          }
          
          </LayoutHeader>
          <LayoutContent
            class={styles['layout-content']}
          >
            <a-button type="primary">Primary Button</a-button>
          </LayoutContent>
      </a-layout>
    </Layout>
    )
  }
}

export default defineComponent({
  name:'Layout',
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup: layout
})