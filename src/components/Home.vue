<template>
  <div>
    <Nav></Nav>
    <div>
      <div class="float-right" style="color:white ;margin-top:100px;">
        <b-card title="Running Contests" tag="article" class="mb-2 bg-success">
          <p class="text-left" style="font-size:70px">{{ items.length }}</p>
        </b-card>
      </div>
      <b-container fluid style="width:900px;margin-top:70px; margin-left:50px" class="float-left">
        <b-row>
          <b-col md="6" class="my-1">
            <b-form-group horizontal label="Filter" class="mb-0">
              <b-input-group>
                <b-form-input v-model="filter" placeholder="Type to Search"/>
                <b-input-group-append>
                  <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6" class="my-1">
            <b-form-group horizontal label="Per page" class="mb-0">
              <b-form-select :options="pageOptions" v-model="perPage"/>
            </b-form-group>
          </b-col>
        </b-row>

        <b-table
          show-empty
          stacked="md"
          :items="items"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          @filtered="onFiltered"
          style="width:900px"
          id="tlen"
        >
          <template slot="Contest_Name" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>

          <template slot="actions" slot-scope="row">
            <b-button
              size="sm"
              @click.stop="info(row.item, row.index, $event.target)"
              class="mr-1"
            >Info modal</b-button>
          </template>
          <!-- <template slot="row-details" slot-scope="row">
            <b-card>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
              </ul>
            </b-card>
          </template>-->
        </b-table>

        <b-row>
          <b-col md="6" class="my-1">
            <b-pagination
              :total-rows="totalRows"
              :per-page="perPage"
              v-model="currentPage"
              class="my-0"
            />
          </b-col>
        </b-row>

        <b-modal size="lg" id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
          <h1>{{ modalInfo.content}}</h1>
        </b-modal>
      </b-container>
    </div>
  </div>
</template>

<script>
import nav from "@/components/NavBar";
import Axios from "axios";

const items = [];
const individualContests = [];
export default {
  components: {
    Nav: nav
  },
  data() {
    return {
      items: items,
      individualContests: individualContests,
      fields: [
        {
          key: "contestName",
          label: "Contest Name",
          sortDirection: "desc"
        },
        {
          key: "subscriberCount",
          label: "No_Of_Persons_registered",
          class: "text-center"
        },
        { key: "type", lable: "Type" },
        { key: "actions", label: "Actions" }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      modalInfo: { title: "", content: "" }
    };
  },
  computed: {
    sortOptions() {
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  methods: {
    info(item, index, button) {
      Axios.get(
        "http://10.177.7.118:8000/getReport/" + item.contestId + "/leaderboard",
        {}
      )
        .then(response => {
          console.log(response.data);
          this.modalInfo.title = `Leader`;
          this.modalInfo.content = "Name: "+
            response.data[0].contestName + " || Score: " + response.data[0].score;
          this.$root.$emit("bv::show::modal", "modalInfo", button);
        })
        .catch(error => {
          console.log(error);
          console.log("FAILED !!!");
        });
    },
    resetModal() {
      this.modalInfo.title = "";
      this.modalInfo.content = "";
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  mounted() {
    Axios.get("http://10.177.7.118:8000/getReport/contestReport", {})
      .then(response => {
        this.items = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
        console.log("FAILED !!!");
      });
  }
};
</script>