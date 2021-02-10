var app = new Vue({
  el: '#app',
  data: {
    dischi: [],
    generi: ['All'],
    genereSelect: 'All'
  },
  mounted() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((result) => {
        this.dischi = result.data.response;
        this.dischi.forEach((item,i) =>{
          if(!this.generi.includes(item.genre)) {
            this.generi.push(item.genre);
          }
        });
      })
  }
  
});
