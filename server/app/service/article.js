const Service = require('egg').Service;

class ArticleService extends Service {
  async create(params) {
    const { app } = this;
    try{
      console.log('ffffffffffffffffff', params)
      const result = await app.mysql.insert('article', params);
      return result;
    }catch(err){
      console.log(err)
      return null
    }
  }

  async lists() {
    const { app } = this;
    try{
      const result = await app.mysql.select('article')
      return result;
    }catch(err){
      console.log(err)
      return null
    }
  }

  async detail(id) {
    const { app } = this;
    if(!id){
      console.log('id无效')
      return null
    }
    try {
      const result = await app.mysql.get('article', {id})
      return result
    } catch(err){
      console.log(err)
      return null
    }
  }

}

module.exports = ArticleService;