<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <div
        style="text-align:center; margin-top:80px; margin-bottom:30px; font-size:150%"
      >IMAGE BASED QUESTIONS</div>
      <div style="text-align:center; margin-bottom:40px; font-size:150%">Select Any {{ limiter }}</div>
      <b-card>
        <div v-for="item in items" :key="item.qid">
          <b-form-checkbox :value="item" v-model="selectedParks">
            <label>
              {{item.questionName}} ||
              <img :src="item.questionContent" width="150px" height="100px">
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
      items:[],
      limiter: localStorage.getItem("number") * 0.2,
      selectedParks: []
    };
  },
  methods: {
    createContest: function() {
      var limit = localStorage.getItem("number");
      var names = JSON.parse(localStorage.getItem("array"));
      console.log(names + " This is the girst");
      limit = 0.2 * limit;
      if (this.selectedParks.length == limit) {
        for (var i = 0; i < this.selectedParks.length; i++) {
          names.push(this.selectedParks[i]);
        }
        // console.log(names + " After the loop")
        localStorage.setItem("array", JSON.stringify(names));
        alert(" The questions have been submitted");
        this.$router.push("/createcontestvideo");
      } else {
        alert("Please select " + limit + " questions!");
      }
    }
  },
  mounted() {
      Axios.get(
        "http://10.177.7.91:8080/screeningoutput/"+localStorage.getItem("categoryId")+"/getByQuestionType/Image",
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