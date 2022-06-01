<template>
  <div>
    <Card>
      <Space>
        <AButton type="primary" @click="testMenuList">Get Menu List</AButton>
        <AButton type="danger">danger</AButton>
        <AButton type="warning">warning</AButton>
        <AButton type="success">success</AButton>
      </Space>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import { Space, Card } from 'ant-design-vue';
  import { AButton } from '@/components/basic/button';
  import { getMenuList } from '@/api/test/menu.api';
  defineOptions({
    name: 'DemoButton',
  });
  async function testMenuList() {
    const menu = await getMenuList();
    console.log('menu :>>', menu);
  }
</script>
