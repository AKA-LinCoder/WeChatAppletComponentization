// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
      tabSelectId:'-1',
  },
  onTabChange(e){
      //父组件接收到的子组件传来的id
      const { id } = e.detail;
      console.log(`父组件接收到的id: ${id}`);
      //传递给list组件
      this.setData({
          tabSelectId:id
      })

  }
 
})
