<template>
  <div>
      <Nav></Nav>
    <div class="container">
      <template v-if="questions">
        <div v-if="questions.length">
          <ol>
            <div v-for=" question in questions" v-bind:key="question.questionId">
              <div v-if="question.questionType === 'Text'">
                <b-card class="text-center">
                  <li class="text-left">
                    <b>{{question.questionName}}</b>
                    <br>
                    <p>{{question.questionContent}}</p>
                    <br>
                    <p>{{question.answerOptions}}</p>
                  </li>

                  <b-card class="float-right" style="width:728px;height:200px">
                    <label class="float-left">Categories:</label>
                    
                    <select
                      class="form-control"
                      style="width:200px"
                      v-model="question.questionCategory"
                    >
                      <option
                        v-for="category in categories"
                        v-bind:key="category.cid"
                      >{{category.cname}}</option>
                    </select>
                    <br>
                    <label class="float-left">Difficulty:</label>
                    
                    <select
                      class="form-control"
                      style="width:200px"
                      v-model="question.questionDifficulty"
                    >
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </select>
                     <button
                      class="btn btn-primary"
                      v-bind:value="question"
                      v-on:click="accept(question)"
                    >Accept</button>
                    <button
                      class="btn btn-danger"
                      v-bind:value="question.questionId"
                      v-on:click="reject(question.questionId)"
                    >Reject</button>
                  </b-card>
                </b-card>
              </div>

              <div v-if="question.questionType === 'Image'">
                <b-card>
                  <li class="text-left">
                    <b>{{question.questionName}}</b>
                  </li>
                  <img class="float-left" style="width:300px" v-bind:src="question.questionContent">
                  <br>
                  <p>{{question.answerOptions}}</p>

                  <b-card style="width:728px;height:200px">
                    <label class="float-left">Categories:</label>
                    
                    <select
                      class="form-control"
                      style="width:200px"
                      v-model="question.questionCategory"
                    >
                      <option
                        v-for="category in categories"
                        v-bind:key="category.cid"
                      >{{category.cname}}</option>
                    </select>
                    <br>
                    <label class="float-left">Difficulty:</label>
                    
                    <select
                      class="form-control"
                      style="width:200px"
                      v-model="question.questionDifficulty"
                    >
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </select>
                    <!-- <input type="checkbox" v-bind:value="question" v-model="accepted">
                    <input type="checkbox" v-bind:value="question" v-model="rejected">-->
                    <!-- <b-checkbox style="left:20px;" v-bind:value="question" v-model="accepted">Accept</b-checkbox>
                    <b-checkbox style="left:20px" v-bind:value="question" v-model="rejected">Reject</b-checkbox>-->
                    <button
                      class="btn btn-primary"
                      v-bind:value="question"
                      v-on:click="accept(question)"
                    >Accept</button>
                    <button
                      class="btn btn-danger"
                      v-bind:value="question.questionId"
                      v-on:click="reject(question.questionId)"
                    >Reject</button>
                  </b-card>
                </b-card>
              </div>

              <div v-if="question.questionType === 'Video'">
                <b-card>
                  <li class="text-left">
                    <b>{{question.questionName}}</b>
                  </li>
                  <embed
                    class="float-left"
                    style="width:300px;height:200px"
                    :src="question.questionContent"
                  >
                  <br>
                  <p>{{question.answerOptions}}</p>

                  <b-card style="width:728px;height:200px">
                    <label class="float-left">Categories:</label>
                    
                    <select
                      class="form-control"
                      style="width:200px"
                      v-model="question.questionCategory"
                    >
                      <option
                        v-for="category in categories"
                        v-bind:key="category.cid"
                      >{{category.cname}}</option>
                    </select>
                    <br>
                    <label class="float-left">Difficulty:</label>
                    
                    <select
                      class="form-control"
                      style="width:200px"
                      v-model="question.questionDifficulty"
                    >
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </select>
                    <button
                      class="btn btn-primary"
                      v-bind:value="question"
                      v-on:click="accept(question)"
                    >Accept</button>
                    <button
                      class="btn btn-danger"
                      v-bind:value="question.questionId"
                      v-on:click="reject(question.questionId)"
                    >Reject</button>
                  </b-card>
                </b-card>
              </div>
            </div>
          </ol>
        </div>
      </template>
      <h4 id="questionStatus" style="text-align:center; margin-top:20px; font-family:sans-serif"></h4>
      <div v-if="isLoading">
        <h2>Loading......</h2>
        <img src="https://cdn.cssauthor.com/wp-content/uploads/2018/06/Animated-Loading-%C3%97-1.gif">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import nav from "@/components/NavBar"
export default {
    components:{
        Nav : nav
    },
  data() {
    return {
      isLoading: false,
      accepted: [],
      rejected: [],
      questions: [],
      categories: [
        {
          cid: "1",
          cname: "Books"
        },
        {
          cid: "2",
          cname: "Politics"
        },
        {
          cid: "3",
          cname: "Sports"
        }
      ]
    };
  },
  mounted() {
    this.isLoading = true;
    axios.get("http://10.177.7.91:8000/screening/selectAll").then(response => {
      this.questions = response.data.response;
      this.isLoading = false;
      if (this.questions.length == 0) {
        document.getElementById("questionStatus").innerHTML =
          "No questions to screen!";
      }
      console.log(this.questions);
    });
  },
  methods: {
    accept(question) {
      this.accepted = question;
      console.log(this.accepted);
      axios
        .post(
          "http://10.177.7.91:8080/screeningoutput/addQuestion",
          this.accepted
        )
        .then(response1 => {
          console.log(response1.data);
          window.location.reload();
        });
    },
    reject(questionId) {
      this.rejected = questionId;
      axios
        .delete(
          "http://10.177.7.91:8000/screening/deleteByQuestionId?questionId=" +
            this.rejected
        )
        .then(response2 => {
          console.log(response2.data);
          window.location.reload();
        });
    }
  }
};
</script>