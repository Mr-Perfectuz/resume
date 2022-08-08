import axios from "axios";

export default {
    actions: {
        fetchToken(context, data){
            axios.post("http://localhost:8505/api/users/auth", data)
                .then((response)=> {
                    console.log("Token olindi")
                    console.log(response)

                    context.commit('updateToken', response.data.token)
                })
                .catch(() =>{
                console.log("token olishda xato bor")
            })
                .finally(() =>{
                    console.log("Bu funksiya doim ishlaydi")
            })
        }
    },
    mutatuons: {
        updateToken(state, token){
            state.token = token
        },
    },
    state: {
        token: null
    },
    getters: {
        getToken(state){
            return state.token
        }
    }
}


