const mutations = {
    getRetentionGraphDataSuccess(state, data){
        state.weeklyRetentionGraphData = data
    },
    getRetentionGraphDataFailure(state, error){
        state.error = error
    },
}

export default mutations
