<template>
  <div class="add-box">
    <van-uploader v-model="fileList" :max-count="1" :after-read="afterRead" />
    <van-cell-group>
      <van-field type="text" v-model="addData.title" placeholder="文章标题" />
      <van-field type="text" v-model="addData.summary" placeholder="文章简介" />
      <van-field type="textArea" v-model="addData.content" placeholder="文章内容" />
    </van-cell-group>
    <van-button class="add-btn" type="primary" @click="handleClick">提交</van-button>
  </div>
</template>

<script>
import { Uploader, CellGroup, Field, Button } from 'vant'
export default {
  name: 'Home',
  components: {
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return {
      fileList: [],
      addData: {
        title: '',
        summary: '',
        content: '',
        img: ''
      }
    }
  },
  methods: {
    afterRead(file) {
      this.addData.img = file.content
    },
    handleClick() {
      fetch('article/create',{
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.addData)
      })
      .then(res => res.json())
      .then(res => {
        if(res.status === 200) {
          this.$toast.success('文章发布成功！')
          this.$router.push('/')
        } else {
          this.$toast.fail(res.errMsg)
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  .add-box
    margin-top: 30px
    .add-btn
      width: 100%
      position: absolute
      left: 0
      bottom: 88px
</style>
