<template>
    <div id="app">
        <link
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
                integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                crossorigin="anonymous"
        >
        <div>
<!--            <PostComponent/>-->
            <main>

                    <data-table v-bind="parameters"/>



            </main>

        </div>


    </div>
</template>

<script>
  import ActionButtons from "./components/ActionButtons";
  import PlayerService from "./PlayerService";
  import NickName from "./components/nickName";

  export default {
    name: "App",
    components: {
    },
    data() {
      return {
        posts:[],
        error: "",
        loading: false,
      };
    },
    computed: {
      parameters() {
        return {
          data: this.posts,
          error: "",
          lang: "pt-br",
          actionMode: "single",
          columns: [
            {
              key: "rank",
              title: "rank"
            },
            {
              key: "PTS",
              title: "PTS",
              type: "number"
            },
            {
              key: "nick",
              title: "Ник"
            },
            {
              key: "nickAction",
              component: NickName,
              sortable: false
            },
            {
              key: "Games",
              title: "Игр",
              sortable: false
            },
            {
              key: "wins",
              title: "Победы",
              sortable: false
            },
            {
              key: "leavers",
              title: "Ливы",
              sortable: false
            },
            {
              key: "lose",
              title: "Поражения",
              sortable: false
            },
            {
              key: "rmk",
              title: "RMK",
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
    async created() {
      try {
        this.posts = await PlayerService.getPosts();
      } catch (err) {
        this.error = err.message;
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
