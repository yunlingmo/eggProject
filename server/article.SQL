create database egg_article;

use egg_article;

create table article(
  id int(10) not null auto_increment,
  img text default null comment '缩略图',
  title varchar(80) default null comment '文章标题',
  summary varchar(300) default null comment '文章简介',
  content text default null comment '文章内容',
  createTime timestamp default null comment '发布时间',
  primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '文章表';

insert into article(img, title, summary, content, createTime)
values('http://cdn.duitang.com/uploads/item/201603/22/20160322214908_wSYsj.thumb.700_0.jpeg','勇敢地离开，别回头','城里的人想出去，城外的人想进来。”《围城》里的这句话成为了当今职场者的共同心声。','艺术大师徐悲鸿曾经说过：“人不可有傲气，但不可无傲骨。”骨气对于做人确实很重要。我们中国人是有骨气的，古有文天祥“留取丹心照汗青”，现代有朱自清“不食嗟来之食”。站直了，别趴下，别被人看扁，呼来唤去的不是人，起码不是人格健全的人。','2019-02-06');