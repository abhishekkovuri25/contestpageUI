<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="success">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">DCMS Admin Dashboard</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->
          <b-navbar-nav style="font-size:large">
          <b-nav-item><b>ScreenQuestions</b></b-nav-item>
          <b-nav-item><b>CreateContest</b></b-nav-item>
          <b-nav-item><b>Leaderboard</b></b-nav-item>
          <p>{{name.name}}</p>
          <b-nav-item><b>Login</b></b-nav-item>
        </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:JSON.parse(localStorage.getItem("admindetails"))
    }
  }
}
</script>




