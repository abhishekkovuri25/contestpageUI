<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <div
        style="text-align:center; margin-top:80px; margin-bottom:30px; font-size:150%"
      >VIDEO BASED QUESTIONS</div>
      <div style="text-align:center; margin-bottom:40px; font-size:150%">Select Any {{ limiter }}</div>
      <b-card>
        <div v-for="item in items" :key="item.qid">
          <b-form-checkbox :value="item" v-model="selectedParks">
            <label>
              {{item.name}} ||
              <b-embed type="iframe" aspect="16by9" :src="item.questionContent" allowfullscreen></b-embed>
              || {{ item.answer }}
            </label>
          </b-form-checkbox>
          <b-dd-divider></b-dd-divider>
        </div>
        <button class="btn btn-info buttonColor" @click="createContest">Next</button>
        <br>
      </b-card>
    </div>
  </div>
</template>

<script>
import nav from "@/components/NavBar";
import Axios from "axios"
export default {
  components: {
    Nav: nav
  },
  data() {
    return {
      limiter: localStorage.getItem("number") * 0.2,
      items: [
      ],
      selectedParks: []
    };
  },
  methods: {
    createContest: function() {
      var limit = localStorage.getItem("number");
      var names = JSON.parse(localStorage.getItem("array"));
      limit = 0.2 * limit;
      if (this.selectedParks.length == limit) {
        for (var i = 0; i < this.selectedParks.length; i++) {
          names.push(this.selectedParks[i]);
        }
        localStorage.setItem("array", JSON.stringify(names));
        alert(" The questions have been submitted");
        this.$router.push("/createcontestaudio");
      } else {
        alert("Please select " + limit + " questions!");
      }
    }
  },
  mounted() {
      Axios.get(
        "http://10.177.7.91:8080/screeningoutput/"+localStorage.getItem("categoryId")+"/getByQuestionType/Video",
        {}
      )
        .then(response => {
          this.items = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
          console.log("FAILED !!!")
        });
    }
};
</script>
