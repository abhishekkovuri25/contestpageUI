<template>
  <div class="container">
    <div
      style="text-align:center; margin-top:80px; margin-bottom:30px; font-size:150%"
    >TEXT BASED QUESTIONS</div>
    <div style="text-align:center; margin-bottom:40px; font-size:150%">Select Any {{ limiter }}</div>
    <b-card>
      <div v-for="item in parks" :key="item.qid">
        <b-form-checkbox :value="item" v-model="selectedParks">
          <label>{{item.question}} || {{item.answer}}</label>
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
      limiter: localStorage.getItem("number") * 0.4,
      parks: [
        {
          qid: 121,
          question: "Some Question?",
          answer: "ANSWER"
        },
        {
          qid: 122,
          question: "Some other question?",
          answer: "ANSWER"
        },
        {
          qid: 123,
          question: "Some Question?",
          answer: "ANSWER"
        },
        {
          qid: 124,
          question: "Some Question?",
          answer: "ANSWER"
        },
        {
          qid: 125,
          question: "Some Question?",
          answer: "ANSWER"
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
        for(var i=0;i<this.selectedParks.length;i++)
        {
            names.push(this.selectedParks[i]);   
        }
        localStorage.setItem("array",JSON.stringify(names))
        console.log(names);
        alert("Questions have been submitted!");
        this.$router.push("/createcontestimage");
      } else {
        alert("Please select " + limit + " questions!");
      }
    }
  }
};
</script>