<template>
    <div id="app">
        <link
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
                integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                crossorigin="anonymous"
        >
        <div>
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
    components: {},
    data() {
      return {
        posts: [],
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
              title: "rank",
              type: "number"
            },
            {
              key: "PTS",
              title: "PTS",
              type: "number"
            },
            {
              key: "nick",
              title: "Ник",
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

<style type="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
 /*
    body {
        margin: 0;
        background: linear-gradient(45deg, #49a09d, #5f2c82);
        font-family: sans-serif;
        font-weight: 100;
    }

   .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    table {
        width: 800px;
        border-collapse: collapse;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    th,
    td {
        padding: 15px;
        background-color: rgba(255, 255, 255, 0.2);
        color: #fff;
    }

    th {
        text-align: left;
    }

    thead {
        th {
            background-color: #55608f;
        }
    }

    ;

    tbody {
        tr {
            &:hover {
                background-color: rgba(255, 255, 255, 0.3);
            }
        }

        td {
            position: relative;

            &:hover {
                &:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: -9999px;
                    bottom: -9999px;
                    background-color: rgba(255, 255, 255, 0.2);
                    z-index: -1;
                }
            }
        }
    }


    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        text-align: left;
    }

    #app h1 {
        text-align: center;
    }

    main {
        padding: 32px;
    }*/
    .data-table {
        display: grid;
        width: 100%;
        grid-template-columns: 25% 25% 25% 25%;
        &> div {
            margin-top: 1rem;
            max-width: 100%;
        }
        & > .data-table-search-filter, .data-table-pagination, .data-table-export-data {
            margin-left: auto
        }
        @media (min-width: 1401px) {
            grid-template-areas:
            "perPage search search search"
            "table table table table"
            "info pagination pagination download";
        }
        @media (min-width: 1051px) AND (max-width: 1400px) {
            grid-template-areas:
            "perPage search search search"
            "table table table table"
            "info pagination pagination pagination"
            ". . download download";
        }
        @media (min-width: 851px) AND (max-width: 1050px) {
            grid-template-areas:
            "perPage search search search"
            "table table table table"
            "pagination pagination pagination pagination"
            "info info download download";
        }
        @media (max-width: 800px) {
            & > .data-table-pagination {
                flex-wrap: wrap;
            }
        }
        @media (min-width: 651px) AND (max-width: 850px) {
            grid-template-areas:
            "perPage search search search"
            "table table table table"
            "pagination pagination pagination pagination"
            "info info info info"
            "download download download download";
        }
        @media (max-width: 650px) {
            grid-template-areas:
            "search search search search"
            "perPage perPage perPage perPage "
            "table table table table"
            "pagination pagination pagination pagination"
            "info info info info"
            "download download download download";
            & > .data-table-per-page {
                margin-left: auto
            }
        }
    }
</style>
