import graphsApi from "../../../api/graph";
const actions = {

    getRetentionGraphData({ commit }){
        graphsApi.getRetentionGraphData()
            .then((response)=>{
                commit('getRetentionGraphDataSuccess',response.data.data)
            })
            .catch((error)=>{
                commit('getRetentionGraphDataSuccess',error)
            })
    },
}

export default actions
