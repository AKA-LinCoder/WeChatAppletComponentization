// components/list/list.ts
Component({
    options:{
        //在当前组件中使用多个插槽
        multipleSlots:true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        tabId:String
    },

    /**
     * 组件的初始数据
     */
    data: {
        listData:[]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        loadListData(){
            //WX.REQUEST 模拟请求 
            var jsonData = require("../../data/list.data");
            this.setData({
                listData:jsonData.dataList
            })
            // this.setData({
            //     listData:[]
            // })
        }
    },
    observers:{
        tabId:function (val){
            if(val=="-1") return;
            console.log(`LIST接收到的id ${val}`)
            //数据请求操作，模拟根据tabId去获取对应的页面数据
            this.loadListData()
        }
    }
})
