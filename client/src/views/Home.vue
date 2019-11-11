<template>
  <div class="home">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item.id"
        @click="lookDetail(item.id)"
      >
        <div class="item">
          <div class="left">
            <img class="item-image" :src="item.img"/>
          </div>
          <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="create-time">{{item.createTime}}</div>
          </div>
        </div>
      </van-cell>
      
    </van-list>
  </div>
</template>

<script>
import { List, Cell } from 'vant'
import moment from 'moment'
export default {
  name: 'Home',
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  watch: {},
  data() {
    return {
      finished: false,
      loading: false,
      list: []
    }
  },
  methods: {
    onLoad() {
      fetch('/article/lists')
        .then(res => res.json())
        .then(res => {
          if(res.status === 200) {
            this.loading = false
            this.finished = true
            this.list = res.data.map((item) => {
              if(item.createTime) {
                item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')
              }
              return item;
            })
          } else{
            Toast.fail(ers.errMsg)
          }
        })
    },
    lookDetail(id) {
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  .home
    margin-top: 30px
    .item
      display: flex
      flex-direction: row
      .item-image
        width: 150px
        height: 100px
      .right
        margin-left: 20px
        display: flex
        flex-direction: column
        justify-content: space-between
        .title
          font-size: 20px
        .create-time
          font-size: 12px
          color: #9e9e9e
</style>