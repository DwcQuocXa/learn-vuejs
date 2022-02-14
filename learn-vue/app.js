const app = Vue.createApp({
  //template: `<h1>Hello {{firstName}}</h1>`,
  data() {
    return {
      firstName: 'Johhhn',
      picture: 'https://randomuser.me/api/portraits/men/59.jpg',
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api');
      const { results } = await res.json;
      console.log(res);
      console.log(results);

      this.firstName = results[0]?.name?.first;
      this.picture = results[0]?.picture?.large;
    },
  },
});

app.mount('#app');
