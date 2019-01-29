<template>
  <div class="container">
      <div style="text-align:center; margin-top:80px; margin-bottom:30px; font-size:150%">
            AUDIO BASED QUESTIONS 
      </div>
      <div style="text-align:center; margin-bottom:40px; font-size:150%"> Select Any {{ limiter }} </div>
    <b-card>
      <div v-for="item in parks" :key="item.qid">
        <b-form-checkbox :value="item" v-model="selectedParks">
          <label>{{item.name}} || <audio controls><source :src="item.description" type="audio/mpeg"></audio> || {{ item.answer }} 
  
   </label>
        </b-form-checkbox>
        <b-dd-divider></b-dd-divider>
      </div>
      <button class="btn btn-info" @click="createContest">submit</button>
      <br>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        limiter : localStorage.getItem("number")*0.2 ,
      parks: [
        {
          qid: 121,
          name: "Identify / xyz",
          description: "https://www.quizfreak.com/uploads/3319-35085.m4a",answer: "some answer"
        },
        {
          qid: 122,
          name: "Identify / xyz",
          description: "https://www.quizfreak.com/uploads/3319-35085.m4a",answer: "some answer"
        }
      ],
      selectedParks: []
    };
  },
  methods: {
    createContest: function() {
        var limit=localStorage.getItem("number");
        limit=0.2*limit;
      if (this.selectedParks.length == limit) {
        for (var i = 0; i < this.selectedParks.length; i++) {
          this.selectedParks[i] = this.selectedParks[i].qid;
          console.log(this.selectedParks[i]);
          
        }
        alert(" The contest was created");
        this.$router.push("/");
        }
      else{
          alert("Please select " + limit + " questions!");
      }
      }
    }
};
</script>