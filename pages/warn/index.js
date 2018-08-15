// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionText:"拍摄/相册",
    picUrls:[],
    checkboxValue:[],
    itemsValue:[{
      value:"私锁私用",
      checkde:false,
      color:"#b9dd08"
    }, {
      value: "车牌缺损",
      checkde: false,
      color: "#b9dd08"
      }, {
        value: "轮胎坏了",
        checkde: false,
        color: "#b9dd08"
    }, {
      value: "车锁坏了",
      checkde: false,
      color: "#b9dd08"
      }, {
        value: "违规乱停",
        checkde: false,
        color: "#b9dd08"
    }, {
      value: "密码不对",
      checkde: false,
      color: "#b9dd08"
      }, {
        value: "刹车坏了",
        checkde: false,
        color: "#b9dd08"
    }, {
      value: "其他故障",
      checkde: false,
      color: "#b9dd08"
    }],
    btnColor: "#f2f2f2"
  },
  changeCheckbox:function(e) {
    console.log(e);
    var _value = e.detail.value;
    if(_value.length == 0){
      this.setData({
        btnColor: "#f2f2f2",
        checkboxValue:[]
      })
    }else{
      this.setData({
        btnColor:"#b9dd08",
        checkboxValue:_value,
      })
    }
  },
  clickPhoto:function() {
      wx.chooseImage({
        success: (res)=> {
          var _picUrls = this.data.picUrls;
          var _tfs = res.tempFilePaths;
          for(let temp of _tfs) {
            _picUrls.push(temp);
            this.setData({
              picUrls : _picUrls,
              actionText: "+"
            })
          }
        },
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})