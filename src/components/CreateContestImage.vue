<template>
  <div class="container">
      <div style="text-align:center; margin-top:80px; margin-bottom:30px; font-size:150%">
            IMAGE BASED QUESTIONS 
      </div>
      <div style="text-align:center; margin-bottom:40px; font-size:150%"> Select Any {{ limiter }} </div>
    <b-card>
      <div v-for="item in parks" :key="item.qid">
        <b-form-checkbox :value="item" v-model="selectedParks">
          <label>{{item.name}} || <img :src="item.description" width="150px" height="100px"> || {{ item.answer }}  </label>
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
          description: "https://cdn.urldecoder.org/assets/images/url_fb.png"
          ,answer: "some answer"
        },
        {
          qid: 122,
          name: "Identify / xyz",
          description: "https://cdn.urldecoder.org/assets/images/url_fb.png"
          ,answer: "some answer"
        }
      ],
      selectedParks: []
    };
  },
  methods: {
    createContest: function() {
        var limit=localStorage.getItem("number");
        var names=JSON.parse(localStorage.getItem("array"))
        console.log(names + " This is the girst")
        limit=0.2*limit;
      if (this.selectedParks.length == limit) {
        for(var i=0;i<this.selectedParks.length;i++)
        {
          names.push(this.selectedParks[i]);
        }
        // console.log(names + " After the loop")
        localStorage.setItem("array",JSON.stringify(names))
        alert(" The questions have been submitted");
        this.$router.push("/createcontestvideo");
        }
      else{
          alert("Please select " + limit + " questions!");
      }
      }
    }
};
</script>