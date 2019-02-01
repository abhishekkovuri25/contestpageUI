<template>
<div>
    <Nav></Nav>
<div class="container" style="width:700px;margin-top:100px;">
 <b-table striped bordered hover :items="items" :fields="fields">

 </b-table>
</div>
</div>
</template>
​
<script>
import nav from "@/components/NavBar"
import Axios from "axios"

export default {
    components:{
        Nav :nav
    },
 data () {
  return {
   fields: [ 'userName', 'totalContestsPlayed', 'score' ],
   items: [
   ]
  }
 },
 mounted(){
     Axios.get(
        "http://10.177.7.118:8000/getReport/leaderboard",
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
}
</script>