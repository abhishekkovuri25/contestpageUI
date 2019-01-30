<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <div
        style="text-align:center; margin-top:80px; margin-bottom:30px; font-size:150%"
      >TEXT BASED QUESTIONS</div>
      <div style="text-align:center; margin-bottom:40px; font-size:150%">Select Any {{ limiter }}</div>
      <b-card>
        <div v-for="item in items" :key="item.questionId">
          
          <b-form-checkbox :value="item" v-model="selectedParks">
            <label>{{item.questionName}} </label>
          </b-form-checkbox>
          <b-dd-divider></b-dd-divider>
        </div>
        <button class="btn btn-info buttonColor" @click="createContest">Next</button>
        <br>
        {{ selectedParks}}
      </b-card>
    </div>
  </div>
</template>

<script>
import nav from "@/components/NavBar";
import Axios from 'axios'

export default {
  components: {
    Nav: nav
  },
  data() {
    return {
      limiter: localStorage.getItem("number") * 0.4,
      items: [
        {
          answerType: "",
          duration: 0, 
          questionId: "",
          questionName: "",
        
        }
      ],
      selectedParks: []
    };
  },
  methods: {
    createContest: function() {
      var limit = localStorage.getItem("number");
      limit = 0.4 * limit;
      if (this.selectedParks.length == limit) {
        var names = [];
        for (var i = 0; i < this.selectedParks.length; i++) {
          names.push(this.selectedParks[i]);
        }
        localStorage.setItem("array", JSON.stringify(names));
        console.log(names);
        alert("Questions have been submitted!");
        this.$router.push("/createcontestimage");
      } else {
        alert("Please select " + limit + " questions!");
      }
    }
  },
  mounted() {
      Axios.get(
        "http://10.177.7.91:8080/screeningoutput/"+localStorage.getItem("categoryId")+"/getByQuestionType/Text",
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

<style>
.buttonColor {
  background-color: #28a745;
}
</style>