import Vue from 'vue'


const graphsApi = {
    getRetentionGraphData: () => {
        return Vue.$axios.get("/retention-graph")
    }
}

export default graphsApi
