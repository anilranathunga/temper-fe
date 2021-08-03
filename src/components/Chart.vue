<template>
  <div class="chartElem">
    <div class="row">
      <highcharts class="chart" :options="chartOptions" :updateArgs="updateArgs"></highcharts>
    </div>
  </div>
</template>

<script>

  import {mapActions, mapState} from "vuex";
  export default {
    data () {
      return {
        title: '',
        points: [10, 0, 8, 2, 6, 4, 5, 5],
        chartType: 'Spline',
        seriesColor: '#6fcd98',
        colorInputIsSupported: null,
        animationDuration: 1000,
        updateArgs: [true, true, {duration: 1000}],
        chartOptions: {
          chart: {
            type: 'spline'
          },
          title: {
            text: 'Weekly stepwise users retention'
          },
          xAxis: {
            categories: [35, 40, 45, 50, 55, 60, 65, 95, 99, 100]
          },
          yAxis: {
            title: {
              text: '%'
            },
            labels: {
              formatter: function () {
                return this.value + '%';
              }
            }
          },
          series: []
        }
      }
    },
    methods:{
      ...mapActions( "graph", ["getRetentionGraphData"] ),
    },
    computed: {
      ...mapState( "graph", ["weeklyRetentionGraphData"] ),
    },
    watch:{
      weeklyRetentionGraphData: function (value){
        this.chartOptions.series = value
      }
    },
    mounted() {
      this.getRetentionGraphData();
    }
  }
</script>

<style scoped>
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  #colorPicker {
    border: 0;
    padding: 0;
    margin: 0;
    width: 30px;
    height: 30px;
  }
  .numberInput {
    width: 30px;
  }
</style>