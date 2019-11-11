<template>
  <div class="detail">
    <div class="title">{{currentArticle.title}}</div>
    <div class="summary">{{currentArticle.summary}}</div>
    <div class="content">{{currentArticle.content}}</div>
    <div class="create-time">{{currentArticle.createTime}}</div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Home',
  props: {
    id: null
  },
  data() {
    return {
      currentArticle: {},
    }
  },
  created(){
    const id = this.$route.query.id
    fetch(`article/detail/${id}`)
      .then(res => res.json())
      .then(res => {
        if(res.status === 200) {
          this.loading = false
          this.finished = true
          this.currentArticle = res.data
          const createTime = this.currentArticle.createTime
          if(createTime) {
            this.currentArticle.createTime = moment(createTime).format('YYYY-MM-DD HH:mm:ss')
          }
        } else{
          Toast.fail(ers.errMsg)
        }
      })
  },
  components: {},
  mounted(){}
}
</script>

<style lang="sass" scoped>
  .detail
    padding: 20px
    text-align: left
    .title
      font-size: 25px
    .summary
      text-indent: 2em
      margin: 10px 0
      padding: 10px 0
      font-size: 18px
      background: #e3e3e3
    .content
      text-indent: 2em
      line-height: 200%
    .create-time
      margin-top: 30px
      color: #3333337a
      float: right
</style>