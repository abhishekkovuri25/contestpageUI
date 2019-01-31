<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <div
        style="text-align:center; margin-top:80px; margin-bottom:30px; font-size:150%"
      >Select One Question</div>
      <div style="text-align:center; margin-bottom:40px; font-size:150%">Select Questions</div>
      <b-card>
        <div v-for="item in items" :key="item.questionId">
          <b-form-checkbox :value="item" v-model="selectedParks">
            <label>{{item.questionName}}</label>
          </b-form-checkbox>
          <b-dd-divider></b-dd-divider>
        </div>
        <button class="btn btn-info buttonColor" @click="createContest">Add one more Question</button>
        <button class="btn btn-info buttonColor" @click="finish">Finish</button>
        <br>
        {{ selectedParks }}
      </b-card>
    </div>
  </div>
</template>

<script>
import nav from "@/components/NavBar";
import Axios from "axios";

export default {
  components: {
    Nav: nav
  },
  data() {
    return {
      items: [],
      selectedParks: []
    };
  },
  methods: {
    createContest: function() {
      if (this.selectedParks.length == 1) {
        var names = [];
        alert("Questions have been submitted!");
        this.$router.push("/createcontest");
        Axios.post(
          "http://10.177.7.115:8080/contest/" +
            localStorage.getItem("contestIdDynamic") +
            "/questions/",
          {
            request: {
              contest: {
                active: false,
                contestId: localStorage.getItem("contestIdDynamic"),
                contestName: "",
                startTime: 0,
                type: "dynamic"
              },
              contestQuestionId: "",
              last: false,
              questionId: this.selectedParks[0].questionId,
              questionSequence: 0,
              startTime: 0
            },
            userId: "admin"
          }
        ).then(response => {
        console.log(response.data);
        this.$router.push("/createcontestdynamicquestions");
      })
      .catch(error => {
        console.log(error);
        console.log("FAILED !!!");
      });
      } else {
        alert("Please select 1 questions!");
      }
    },
    finish: function() {
        if (this.selectedParks.length == 1) {
        var names = [];
        alert("Questions have been submitted!");
        this.$router.push("/createcontest");
        Axios.post(
          "http://10.177.7.115:8080/contest/" +
            localStorage.getItem("contestIdDynamic") +
            "/questions/",
          {
            request: {
              contest: {
                active: false,
                contestId: localStorage.getItem("contestIdDynamic"),
                contestName: "",
                startTime: 0,
                type: "dynamic"
              },
              contestQuestionId: "",
              last: true,
              questionId: this.selectedParks[0].questionId,
              questionSequence: 0,
              startTime: 0
            },
            userId: "admin"
          }
        ).then(response => {
        console.log(response.data);
        this.$router.push("/createcontestdynamic");
      })
      .catch(error => {
        console.log(error);
        console.log("FAILED !!!");
      });
      } else {
        alert("Please select 1 questions!");
      }
    }
  },
  mounted() {
    Axios.get("http://10.177.7.115:8000/screeningoutput/getAll", {})
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

<style>
.buttonColor {
  background-color: #28a745;
}
</style>