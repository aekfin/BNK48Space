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
  import * as firebase from 'firebase'
  export default {
    data () {
      return {
        input: ''
      }
    },
    mounted () {
      this.$store.getters.firestore.collection('user').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc)
        })
      })
    }
  }
</script>

<style>

</style>

