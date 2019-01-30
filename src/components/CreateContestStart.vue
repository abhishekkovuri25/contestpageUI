<template>
<div>
    <Nav></Nav>
  <b-container class="margin" required>
    <b-row>
      <b-col md="4" offset-md="4" style="text-align:center; font-size:180%">Create Static Contest</b-col>
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
        Contest Name:
        <input
          type="text"
          name="contestName"
          class="form-control"
          v-model="contestName"
        >
      </b-col>
    </b-row>
    <b-row class="spacing">
      <b-col md="6" offset-md="3">
        Number of Questions:
        <select
          name="numberOfQuestions"
          class="form-control"
          v-model="numberOfQuestions"
        >
          <option v-for="(option,i) in number" v-bind:key="i">{{option.num}}</option>
        </select>
      </b-col>
    </b-row>
    <b-row class="spacing">
      <b-col md="6" offset-md="3">
        Number of Allowed Skips:
        <input
          type="text"
          name="Category"
          class="form-control"
          v-model="numberOfSkips"
        >
      </b-col>
    </b-row>
    <b-row class="spacing">
      <b-col md="6" offset-md="3">
        Difficulty Level:
        <select
          name="difficultyLevel"
          class="form-control"
          v-model="difficultyLevel"
        >
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
</div>
</template>

<script>
import Axios from "axios";
import nav from "@/components/NavBar";

export default {
  name: "app",
  components: {
    Nav: nav
  },
  data() {
    return {
      category: "",
      numberOfQuestions: "",
      numberOfSkips: "",
      difficultyLevel: "",
      contestName: "",
      userId: "admin",
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
      requester: {
        request: {
          active: true,
          categoryId: this.category,
          contestId: "",
          difficulty: this.difficultyLevel,
          name: this.contestName,
          noOfQuestions: Number(this.numberOfQuestions),
          skips: this.numberOfSkips,
          subscribed: false,
          type: "static"
        },
        userId: this.userId
      },
      number: [{ num: 10 }, { num: 20 }],
      difficulty: [{ level: "High" }, { level: "Medium" }, { level: "Low" }]
    };
  },
  methods: {
    check: function() {
      if (
        this.category == "" ||
        this.numberOfQuestions == "" ||
        this.numberOfSkips == "" ||
        this.difficultyLevel == ""
      ) {
        alert("Fill all the fields");
      } else {
        localStorage.setItem("number", this.numberOfQuestions);
        Axios.post(
          "http://10.177.7.120:8080/contests/",
          {
            request: {
              active: true,
              categoryId: this.category,
              contestId: "",
              difficulty: this.difficultyLevel,
              name: this.contestName,
              noOfQuestions: Number(this.numberOfQuestions),
              skips: this.numberOfSkips,
              subscribed: false,
              type: "static"
            },
            userId: this.userId
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
          .then(response => {
            console.log(response.data);
            this.$router.push("/createcontesttext");
          })
          .catch(error => {
            console.log("cannot create contest");
            console.log(error);
            //this.$router.push('/Admin/login')
          });
      }
    }
  }
};

</script>



<style scoped>
.margin {
  margin-top: 80px;
}
.spacing {
  margin-top: 20px;
}
</style>