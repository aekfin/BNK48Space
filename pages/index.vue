<template>
  <div>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="12">
            <h1>BNK48 SPACE</h1>
            <el-input placeholder="Please input" v-model="input"></el-input>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        input: ''
      }
    }
  }
</script>

<style>

</style>

