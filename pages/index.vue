<template>
  <div>
    <el-container v-loading="isLoading">
      <el-main>
        <el-row>
          <el-col :xs="24" :sm="8" :md="6" :lg="4" :xl="2">
            <el-select v-model="selected" placeholder="Select" style="width: 100%">
              <el-option
                v-for="sel in selects"
                :key="sel"
                :label="sel.toUpperCase()"
                :value="sel">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
              <el-carousel height="500px" :interval="10000" type="card" arrow="hover">
                <el-carousel-item v-for="image in images[selected]" :key="image" :style="getSlideStyle(image)">
                </el-carousel-item>
              </el-carousel>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <!-- <el-row>
          <el-col :span="8" :offset="16">
            <el-card class="box-card">
              <el-tooltip class="item" effect="dark" :content="logo.name" placement="top" v-for="logo in poweredBy" :key="logo.name">
                <img style="cursor: pointer;" :src="logo.image" width="50px" height="50px" />
              </el-tooltip>
            </el-card>
          </el-col>
        </el-row> -->
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import * as firebase from 'firebase'
  export default {
    data () {
      return {
        images: [],
        selects: [],
        selected: null,
        poweredBy: [],
        isLoading: true
      }
    },
    mounted () {
      this.$store.getters.firestore.collection('images').get().then((querySnapshot) => {
        querySnapshot.forEach(image => {
          this.selected = image.id
          this.selects.push(image.id)
          this.images[image.id] = []
          image.data().urls.forEach(img => {
            this.images[image.id].push(img)
            this.isLoading = false
          })
        })
      })
      this.$store.getters.firestore.collection('poweredBy').get().then((querySnapshot) => {
        querySnapshot.forEach(logo => {
          this.poweredBy.push(logo.data())
        })
      })
    },
    methods: {
      getSlideStyle (image) {
        return {
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center'
        }
      }
    }
  }
</script>

<style lang="scss">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__button {
    background-color: #89313D!important;
  }
</style>

