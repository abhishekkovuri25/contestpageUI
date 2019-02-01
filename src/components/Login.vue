<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <div style="margin-top:90px;">
        <b-card class="text-center" style="background-color:#ededed">
          <h2>Admin Login</h2>
          <h4 id="adminAllow" style="color:red"></h4>
          <center>
            <!-- <h1 v-if="loginMethod"><b-alert show variant="danger">your email or password is incorrect</b-alert></h1>
            <h1 v-else></h1>-->
            <center>
              <i class="far fa-envelope"></i>
              
              <input
                type="email"
                style="height:40px;"
                id="emailId"
                class="text-line"
                v-model="email"
                required
                placeholder="Email"
              >
              <p id="validateEmail"></p>
            </center>
            <br>
            <center>
              <i class="fas fa-unlock"></i>
              <input
                type="password"
                style="height:40px;"
                id="password"
                class="text-line"
                v-model="password"
                required
                placeholder="Password"
                v-on:keyup="validate"
              >
            </center>
            <br>
          </center>
          <button class="btn" style="background-color:#28a745; color:white" @click="login">Login</button>
        </b-card>
      </div>
    </div>
  </div>
</template> 

<style>
.text-line {
  width: 25%;
  color: black;
  outline: none;
  outline-style: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid #eeeeee 1px;
  padding: 3px 10px;
}
</style>

 <script>
import axios from "axios";
import nav from "@/components/NavBarLoginVue";
export default {
  components: {
    Nav: nav
  },
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      token: "",
      details: ""
    };
  },
  methods: {
    login() {
      if (this.email === "" && this.password === "") {
        alert("email and password is required");
      } else if (this.email == "") {
        alert("email is required");
      } else if (this.password === "") {
        alert("password is required");
      } else {
        // this.$store.dispatch('loginMethod',{
        // email:this.email,
        // password:this.password
        //     })

        axios
          .post("http://10.177.7.82:8080/login", {
            userName: this.email,
            password: this.password
          })
          .then(response => {
            console.log(response.data);
            localStorage.setItem("authId", response.data.Authorization);
          })
          .catch(response => {
            console.log("error login");
          });

        axios
          .get("http://10.177.7.82:8080/users/getData?userName=" + this.email, {
            headers: {
              Authorization: localStorage.getItem("authId")
            }
          })
          .then(response => {
            console.log(response.data);
            console.log(response.data.role);
            if (response.data.role != "admin") {
              document.getElementById("adminAllow").innerHTML =
          "Don't try to sneak in!";
            } else {
              this.$router.push("/home");
              localStorage.setItem("name", JSON.stringify(response.data));
            }
          })
          .catch(response => {
            console.log("error response");
          });
      }
    },
    validate() {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(this.email) == false) {
        alert("Inavlid Email");
      }
    }
  }

  // computed:{
  //     ...mapGetters(['loginMethod']),
  // }
};
</script>