<template>
  <b-container class="margin">
    <b-row>
      <b-col md="4" offset-md="4" style="text-align:center; font-size:180%">Create Contest</b-col>
    </b-row>
    <b-row class="spacing">
      <b-col md="6" offset-md="3">
          Category:
        <select name="Category" class="form-control" v-model="category">
          <option v-for="(option,i) in options" v-bind:key="i">{{option.value}}</option>
        </select>
      </b-col>
    </b-row>
    <b-row class="spacing">
      <b-col md="6" offset-md="3">
          Number of Questions:
        <select name="numberOfQuestions" class="form-control" v-model="numberOfQuestions">
          <option v-for="(option,i) in number" v-bind:key="i">{{option.num}}</option>
        </select>
      </b-col>
    </b-row>
    <b-row class="spacing">
      <b-col md="6" offset-md="3">
          Number of Allowed Skips:
        <input type="text" name="Category" class="form-control" v-model="numberOfSkips">
      </b-col>
    </b-row>
    <b-row class="spacing">
      <b-col md="6" offset-md="3">
          Difficulty Level:
        <select name="difficultyLevel" class="form-control" v-model="difficultyLevel">
          <option v-for="(option,i) in difficulty" v-bind:key="i">{{option.level}}</option>
        </select>
      </b-col>
    </b-row>
    <b-row class="spacing">
      <b-col md="6" offset-md="3">
          <input type="submit" @click="check">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
        category:"",
        numberOfQuestions:"",
        numberOfSkips:"",
        difficultyLevel:"",
      options: [
        {
          value: "Sports",
          text: "Sports"
        },
        {
          value: "Music",
          text: "Music"
        }
      ],
      number: [
          {num:10},
          {num:20}
      ],
      difficulty: [
          {level:"High"},
          {level:"Medium"},
          {level:"Low"}
      ]
    };
  },
  methods: {
      check: function(){
          console.log(this.category)
          console.log(this.numberOfQuestions)
          console.log(this.numberOfSkips)
          console.log(this.difficultyLevel)
          var number
          localStorage.setItem(number,this.numberOfQuestions)
          var x=localStorage.getItem(number)
          console.log(x)
      }
  }
};
</script>


<style scoped>
.margin {
  margin-top: 80px;
}
.spacing{
    margin-top:20px
}
</style>