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
            type="datetime-local"
            name="contestName"
            class="form-control"
            v-model="startTime"
          >
        </b-col>
      </b-row>

      <b-row class="spacing">
        <b-col md="6" offset-md="3">
          <input type="submit" value="Next" @click="check">
        </b-col>
      </b-row>
    </b-container>
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
      contestName: "",
      startTime: "",
      userId: "admin"
    };
  },
  methods: {
    check: function() {
      if (this.contestName == "" || this.startTime == "") {
        alert("Fill all the fields");
      } else {
        localStorage.setItem("number", this.numberOfQuestions);
        console.log(this.contestName);
        console.log(Date.parse(this.startTime));

        var date = new Date(Date.parse(this.startTime));

        console.log(date.toString("MMM dd"));
        Axios.post(
          "http://10.177.7.115:8080/contests/",
          {
            request: {
              active: true,
              contestId: "",
              contestName: this.contestName,
              startTime: Date.parse(this.startTime),
              type: "dynamic"
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
            localStorage.setItem(
              "contestIdDynamic",
              response.data.response.contestId
            );
            this.$router.push("/createcontestdynamicquestions");
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
