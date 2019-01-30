<template>
<div>
    <Nav></Nav>
  <b-container class="margin">
     <b-row>
      <b-col md="4" offset-md="4" style="text-align:center; font-size:180%">Select the Type of Contest</b-col>
    </b-row>
  <b-row class="spacing">
      <b-col md="6" offset-md="3">
        Type:
        <select name="Type" class="form-control" v-model="type">
          <option v-for="(option,i) in types" v-bind:key="i">{{option.type}}</option>
        </select>
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
import nav from "@/components/NavBar"

export default {
    components: {
    Nav: nav
  },
data(){
  return {
    type:"",
    types: [{ type: "dynamic" }, { type: "static" }]
  }
},
methods: {
  check : function(){
    if(this.type=='static')
    {
      this.$router.push('/createconteststart')
    }
    else{
      this.$router.push('/createcontestdynamic')
    }
  }
}
}
</script>
<style scoped>
.margin {
  margin-top: 80px;
}
.spacing {
  margin-top: 20px;
}
</style>