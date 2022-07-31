// components/tabs/tabs.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        //tabs数据
        listData:[],
        //记录选中
        active:0,
    },

    /**
     * 组件的方法列表
     * 组件中的方法必须定义到methods选择中
     */
    methods: {
        loadTabsData(){
            //模拟接收数据
            var jsonData = require("../../data/tabs.data");
            this.setData({
                listData:jsonData.dataList,
                active:0
            })
        },

        //监听用户点击
        onItemClick(e){
            //用户下标
            const {index} = e.target.dataset;
            //修改选中项
            this.setData({
                active:index
            })
            //
        }
    },
    /**
     * 生命周期函数列表
     */
    lifetimes:{
        /**
         * 绝大多数工作在attached中进行
         */
        attached (){
            this.loadTabsData()
        }
    },
    //数据监听器
    observers:{
        //key:要监听的数据
        //value：数据变化时，调用的函数
        active:function(val){
            const { id } = this.data.listData[val]
            console.log(id)
            //把id传递给list组件
            this.triggerEvent('change',{
                id:id
            })
        }
    }
})
