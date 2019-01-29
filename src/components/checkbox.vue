<template>
<div>
    <div v-for="item in parks" :key="item">
      <input type="checkbox" :value="item" v-model="selectedParks"/>
        <label> {{item.question}}</label>
    </div>
<span>Checked: {{selectedParks}}</span>
</div>
</template>

<script>
export default {
  data() {
    return{
    parks:[
      {
        question:"who is the pm?"
      },
      {
        question:"who is president?"
      },
      {
        question:"who is gandhi?"
      },
      {
        question:"who are you?"
      }
    ],
    selectedParks:[]
  }
  }
}
</script>
