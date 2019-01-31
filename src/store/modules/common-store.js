import commonApi from '@/api'
import router from '../../router';  

const state={
    loginDetails : null
}

const mutations={
    LOGIN_DETAILS : (state,value) => {
        state.loginDetails = value
        if(state.loginDetails == null){
            router.push({name:'login'})
        }
        else{
            router.push({name:'Homepage'})
        }
    },
}

const actions={
    loginMethod({commit},data){
        commonApi.postDataViaApi('/login',data,
        (response) => {
            commit('LOGIN_DETAILS',response.body)
            console.log(response)
        },
        (error) => {
            console.log(error)
            commit('LOGIN_DETAILS',null)
        }
        )
    },
}

const getters={
    loginMethod : (state) => {
        return state.loginDetails
    },
}


export default{
    state,
    mutations,
    actions,
    getters
}