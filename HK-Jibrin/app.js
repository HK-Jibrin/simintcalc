new Vue ({
  el: '#app',
  data:{
    principal: null,
    rate: null,
    time: null,
  },
  methods:{
    result: function(){
      let simple= (this.principal*this.rate*this.time)/100;
      return simple;
    }
  }
})