<template>
<div>
    <Nav></Nav>
  <b-container class="margin" required>
    <b-row>
      <b-col md="4" offset-md="4" style="text-align:center; font-size:180%">Create Dynamic Contest</b-col>
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
        Start Time:
        <input
          type="time"
          name="contestName"
          class="form-control"
          v-model="startTime"
        >
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
import nav from "@/components/NavBar"
export default {
    components: {
    Nav: nav
  },
  data() {
    return {
      contestName: "",
      startTime:"",
      userId: "admin",
    };
  },
  methods: {
    check: function() {
      if (
        this.contestName == ""||
        this.time == ""
      ) {
        alert("Fill all the fields");
      } else {
        localStorage.setItem("number", this.numberOfQuestions);
          Axios.post(
            "http://10.177.7.115:8080/contests/",
            {
              request: {
                active: true,
                contestId: "",
                contestName: this.contestName,
                startTime:0,
                type: 'dynamic'
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
