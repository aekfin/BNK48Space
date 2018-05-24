<template>
  <div id="income">
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="12" v-for="td in tableData" :key="td.name">
          <el-card>
            <div slot="header">
              <h2>{{td.title}}</h2>
            </div>
            <el-table
              :data="td.data"
              height="500"
              style="width: 100%">
              <el-table-column prop="date" label="Date" width="180"></el-table-column>
              <el-table-column prop="name" label="Name" width="180"></el-table-column>
              <el-table-column prop="address" label="Address"></el-table-column>
            </el-table>
          </el-card>
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
      tableData: [
        { title: 'Expenditure',
          data: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }] 
        },
        { title: 'Income',
          data: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }] 
        },
      ]
    }
  }
}
</script>

<style lang="scss">
  #income {
    h2 {
      margin: 0px;
      font-weight: normal;
    }
  }
</style>
