<template>
<div>
    <Nav></Nav>
  <div class="container">
      <div style="text-align:center; margin-top:80px; margin-bottom:30px; font-size:150%">
            AUDIO BASED QUESTIONS
      </div>
      <div style="text-align:center; margin-bottom:40px; font-size:150%"> Select Any {{ limiter }} </div>
    <b-card>
      <div v-for="item in items" :key="item.qid">
        <b-form-checkbox :value="item" v-model="selectedParks">
          <label>{{item.questionName}} <audio controls><source :src="item.questionContent" type="audio/mpeg"></audio>

   </label>
        </b-form-checkbox>
        <b-dd-divider></b-dd-divider>
      </div>
      <button class="btn btn-info buttonColor" @click="createContest">Submit</button>
      <br>
    </b-card>
  </div>
</div>
</template>

<script>
 import Axios from "axios";
import nav from "@/components/NavBar";

export default {
   components: {
    Nav: nav
  },
  data() {
    return {
        limiter : localStorage.getItem("number")*0.2 ,
      items: [
      ],
      selectedParks: []
    };
  },
  methods: {
    createContest: function() {
        var limit=localStorage.getItem("number");
        var names = JSON.parse(localStorage.getItem("array"))
        limit=0.2*limit;
      if (this.selectedParks.length == limit) {
        for (var i = 0; i < this.selectedParks.length; i++) {
            names.push(this.selectedParks[i])

        }
        localStorage.setItem("array",JSON.stringify(names));
        alert(" The contest was created");
        Axios.post("http://10.177.7.110:8080/contests/"+localStorage.getItem("contestId")+"/questions/",{
          request: JSON.parse(localStorage.getItem("array")),
  userId: "admin"
        })
        .then(response => {
          localStorage.clear();
          console.log(response.data);
        })
        .catch(error => {
          console.log("Failed!!!!");
        });
        this.$router.push("/createcontesttype");
        }
      else{
          alert("Please select " + limit + " questions!");
      }
      }
    },
    mounted() {
      Axios.get(
        "http://10.177.7.91:8080/screeningoutput/"+localStorage.getItem("categoryId")+"/getByQuestionType/Audio",
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
