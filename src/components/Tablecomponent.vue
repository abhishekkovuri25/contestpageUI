<template>
  <div class="container">
      <br>
      <br>
    <div class="float-right" style="color:white">
      <b-card title="Running Contests" tag="article" style="max-width: 20rem;" class="mb-2 bg-success">
        <p class="text-left" style="font-size:70px">48</p>
      </b-card>
    </div>
    <div style="width:800px" v-for="(item,i) in items" v-bind:key="i">
      <b-table bordered hover :items="items[i]"></b-table>
    </div>
  </div>
</template>

<script>
var i;
const items = [
  [
    { Contestname: "name", no_of_persons_registered: 2, Details: "" },
    { Contestname: "name", no_of_persons_registered: 2, Details: "e" },
    { Contestname: "name", no_of_persons_registered: 3, Details: "" },
    { Contestname: "name", no_of_persons_registered: 4, Details: "" },
    { Contestname: "name", no_of_persons_registered: 6, Details: "" },
    { Contestname: "name", no_of_persons_registered: 2, Details: "h" },
    { Contestname: "name", no_of_persons_registered: 3, Details: "g" },
    { Contestname: "name", no_of_persons_registered: 4, Details: "" },
    { Contestname: "name", no_of_persons_registered: 6, Details: "" }
  ]
];

export default {
  data() {
    return {
      items: items
    };
  }
};
</script>