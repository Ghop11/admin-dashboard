<template>
  <div>
    <!-- Page Heading -->
    <h1> Header</h1>
    <p>Description</p>
    <!-- Page Heading -->

    <!-- Content Row -->
    <v-row>
      <v-col cols="xl-8 lg-7" >
          <v-card  class="card mb-4" min-height="275px" elevation="10">
            <v-list-item class="card-header">
                <v-list-item-title  class="py-3 m-0 font-weight-bold text-primary">Recent Orders - Cost</v-list-item-title>
            </v-list-item>
            <div class="card-body">
              <div class="chart-area">
<!--                <canvas id="myAreaChart">-->
                  <barChart id="myAreaChart"></barChart>
<!--                </canvas>-->
              </div>
              <v-divider></v-divider>
              <span>Total cost per order by client id. Shows recent orders from all clients.</span>
            </div>
          </v-card>
        <br>
          <v-card  class="card mb-4" min-height="275px"  elevation="10">
            <v-list-item class="card-header">
                <v-list-item-title  class=" py-3 m-0 font-weight-bold text-primary">Recent Orders - Order Quantity</v-list-item-title>
            </v-list-item>
            <div class="card-body">
              <div class="chart-bar">
<!--                <canvas id myBarChart>-->
                  <NumberOfOrdersChart id="myBarChart"></NumberOfOrdersChart>
<!--                </canvas>-->
              </div>
              <v-divider></v-divider>
              <span>testing</span>
            </div>
          </v-card>

      </v-col>
      <v-col cols="xl-4 lg-5">
        <v-card  min-height="275px" class="card" elevation="10">
          <v-list-item class="card-header">
              <v-list-item-title  class="py-3 m-0 font-weight-bold text-primary">Monthly Goal - Sales Tracker</v-list-item-title>
          </v-list-item>
          <div class="card-body">
            <div class="chart-pie pt-4">
<!--              <canvas id="myPieChart">-->
                <TotalGoalChart id="myPieChart"></TotalGoalChart>
<!--              </canvas>-->
            </div>
            <v-divider></v-divider>
            <span>testing</span>
          </div>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
  import barChart from "./barChart.vue";
  import NumberOfOrdersChart from "./NumberOfOrdersChart";
  import TotalGoalChart from "./TotalGoalChart";


    export default {
        name: "Charts2.vue",
        components: {
            barChart,
            NumberOfOrdersChart,
            TotalGoalChart
        },
        data() {
            return {
                test: 'value'
            }
        },
    }
</script>

<style scoped>

</style>