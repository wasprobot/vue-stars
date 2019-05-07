<template>
  <div>
    <h1>Details for {{ id }} and some sample text for width</h1>
    <GChart
      :settings="{packages: ['corechart', 'line']}"
      type="line"
      :data="chartData"
      :options="chartOptions"
      :createChart="(el, google) => new google.visualization.LineChart(el)"
      @ready="onChartReady"
    />
  </div>
</template>
<script>
export default {
  name: "Details",
  data() {
    return {
      id: this.$route.params.id,
      chartsLib: null,
      chartData: [
        ["Year", "2-Star", "3-Star", "4-Star", "5-Star"],
        ["2014", 0.67, 0.72, 0.83, 0.9],
        ["2015", 0.66, 0.71, 0.88, 0.97],
        ["2016", 0.73, 0.71, 0.85, 0.95],
        ["2017", 0.73, 0.7, 0.83, 0.95]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  },
  computed: {
    // chartOptions() {
    //   if (!this.chartsLib) return null;
    //   return this.chartsLib.charts.LineChart.convertOptions({
    //     hAxis: {
    //       title: "Year"
    //     },
    //     vAxis: {
    //       title: "Threshold"
    //     },
    //     series: {
    //       1: { curveType: "function" }
    //     }
    //   });
    // }
  },
  methods: {
    onChartReady(chart, google) {
      this.chartsLib = google;
    }
  }
};
</script>