<template>
  <div>
  <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#EDE2A3"
      text-color="#4F4822"
      active-text-color="#2D2A1A">
      <el-menu-item index="1">BNK48 SPACE</el-menu-item>
      <el-menu-item index="2">รายรับ-รายจ่าย</el-menu-item>
      <el-submenu index="3">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <nuxt/>
  </div>
</template>

<script>  
  export default {
  }
</script>

<style lang="scss">

body {
  font-family: 'Mitr', sans-serif !important;
  background-color: whitesmoke;
  margin: 0px;
}
</style>
