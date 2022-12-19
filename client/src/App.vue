<template>
  <div id="app">
    <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossorigin="anonymous"
    >
    <div>
      <PostComponent />
      <main>
        <data-table v-bind="parameters" />
      </main>

    </div>




  </div>
</template>

<script>
import PostComponent from "./components/PostComponent.vue";
import ActionButtons from "./components/ActionButtons";
import users from "./assets/users";
export default {

  name: "App",
  components: {
    PostComponent,
  },
  computed: {

    parameters() {
      return {
        data: users,
        lang: "pt-br",
        actionMode: "single",
        columns: [
          {
            key: "rank",
            title: "rank"
          },
          {
            key: "name",
            title: "Nome"
          },
          {
            key: "email",
            title: "Endereço de email"
          },
          {
            key: "phone",
            title: "Telefone",
            sortable: false
          },
          {
            key: "country",
            title: "País"
          },
          {
            key: "ActionButtons",
            component: ActionButtons,
            sortable: false
          }
        ]
      };
    }
  },
  methods: {
    handleAction(action, payload) {
      console.log(action, payload)
      window.alert("check out the console to see the data logged");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
