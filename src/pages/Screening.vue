<template>
    <div class="container">
        <ol>
        <div v-for=" question in questions" v-bind:key="question.questionId">
            
            <div v-if="question.questionType === 'Text'">
                <b-card class="text-center">
            
            <li class="text-left"><b>{{question.questionName}}</b><br>
                <p>{{question.questionContent}}</p><br>
                <p>{{question.answerOptions}}</p>
            </li>

           <b-card class="float-right" style="width:728px;height:200px">
                    
                        
                        <label class="float-left">Categories:</label>
                        
                                <select class="form-control" style="width:200px" v-model="question.questionCategory">
                                    <option v-for="category in categories" v-bind:key="category.cid">
                                        {{category.cname}}
                                    </option>
                                </select>
                                <br>
                                <label class="float-left">Difficulty:</label>

                                <select class="form-control" style="width:200px" v-model="question.questionDifficulty">
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>
                                <!-- <input type="checkbox" v-bind:value="question" v-model="accepted">
                                <input type="checkbox" v-bind:value="question" v-model="rejected">  -->
                                <b-checkbox style="left:20px;" v-bind:value="question" v-model="accepted">Accept</b-checkbox>
                                <b-checkbox style="left:20px" v-bind:value="question" v-model="rejected">Reject</b-checkbox>
                    </b-card>
            </b-card>
        </div>

            <div v-if="question.questionType === 'Image'">
            <b-card>
                <li class="text-left">
                    <b>{{question.questionName}}</b>
                </li>
                <img class="float-left" style="width:300px" v-bind:src="question.questionContent"/>
                <br>
                <p>{{question.answerOptions}}</p>

                <b-card style="width:728px;height:200px">
                    
                        
                        <label class="float-left">Categories:</label>
                        
                                <select class="form-control" style="width:200px" v-model="question.questionCategory">
                                    <option v-for="category in categories" v-bind:key="category.cid">
                                        {{category.cname}}
                                    </option>
                                </select>
                                <br>
                                <label class="float-left">Difficulty:</label>

                                <select class="form-control" style="width:200px" v-model="question.questionDifficulty">
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>
                                <!-- <input type="checkbox" v-bind:value="question" v-model="accepted">
                                <input type="checkbox" v-bind:value="question" v-model="rejected">  -->
                                <b-checkbox style="left:20px;" v-bind:value="question" v-model="accepted">Accept</b-checkbox>
                                <b-checkbox style="left:20px" v-bind:value="question" v-model="rejected">Reject</b-checkbox>
                    </b-card>
            </b-card>
        </div>

            <div v-if="question.questionType === 'Video'">
            <b-card>
                    <li class="text-left"><b>
                        {{question.questionName}}
                        </b>
                    </li>
                    <embed class="float-left" style="width:300px;height:200px" :src="question.questionContent"/>
                    <br>
                    <p>{{question.answerOptions}}</p>
                    
                    <b-card style="width:728px;height:200px">
                    
                        
                        <label class="float-left">Categories:</label>
                        
                                <select class="form-control" style="width:200px" v-model="question.questionCategory">
                                    <option v-for="category in categories" v-bind:key="category.cid">
                                        {{category.cname}}
                                    </option>
                                </select>
                                <br>
                                <label class="float-left">Difficulty:</label>

                                <select class="form-control" style="width:200px" v-model="question.questionDifficulty">
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>
                                <!-- <input type="checkbox" v-bind:value="question" v-model="accepted">
                                <input type="checkbox" v-bind:value="question" v-model="rejected">  -->
                                <b-checkbox style="left:20px;" v-bind:value="question" v-model="accepted">Accept</b-checkbox>
                                <b-checkbox style="left:20px" v-bind:value="question" v-model="rejected">Reject</b-checkbox>
                    </b-card>
            </b-card>
        </div>
        
        </div>
        
        <span>accepted: {{accepted}}</span>
        <span>rejected: {{rejected}}</span>
        </ol>
        
    </div>   
</template>

<script>
import Navbarcomponent from '@/components/Navbarcomponent'
    export default{
        data(){
            return{
                accepted:[],
                rejected:[],
                questions:[
                    // {
                    //     qid:"123",
                    //     qname:"Read the Following",
                    //     questionCategory:"politcians",
                    //     questionDifficulty:"Hard",
                    //     questionType:"Text",
                    //     questionContent: "who is the prime minister of india",
                    // },
                    // {
                    //     qid:"124",
                    //     qname:"Name the monument",
                    //     questionCategory:"politcians",
                    //     questionDifficulty:"Easy",
                    //     questionType:"Image",
                    //     questionContent: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg"
                    // },
                    // {
                    //     qid:"125",
                    //     qname:"which mobile is in the video",
                    //     questionCategory:"Book",
                    //     questionDifficulty:"Medium",
                    //     questionType:"Video",
                    //     questionContent:"http://techslides.com/demos/sample-videos/small.mp4"
                    // }
                ],
                categories:[
                    {
                        cid:"1",
                        cname:"Books"
                    },
                    {
                        cid:"2",
                        cname:"Politics"
                    },
                    {
                        cid:"3",
                        cname:"Sports"
                    }
                ]
            }
        },
        mounted(){
          axios.get('http://demo5229735.mockable.io/screening/selectAll')
          .then(response => {
              this.questions = response.data;
              console.log(this.questions);
      })
     }
    }
</script>