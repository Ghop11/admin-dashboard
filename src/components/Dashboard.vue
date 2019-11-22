<template>
  <div>
    <!-- Page Heading -->
    <h1>Header Dashboard</h1>
    <p >Description</p>
    <!-- Page Heading -->

    <v-row>
      <v-col xl="3" md="6" class="mb-4">
        <v-card class="card-body">
          <v-row class="no-gutters align-items-center">
            <v-col class="col mr-2">
              <div style="white-space: nowrap" class="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
              <div style="white-space: nowrap" class="mb-0 font-weight-bold text-gray-800" >{{monthlyEarnings}}</div>
            </v-col>
            <v-icon>mdi-calendar</v-icon>
          </v-row>
        </v-card>
      </v-col>

      <v-col xl="3" md="6" class="mb-4">
        <v-card class="card-body">
          <v-row class="no-gutters align-items-center">
            <v-col class="col mr-2">
              <div style="white-space: nowrap"  class="text-xs font-weight-bold text-success text-uppercase mb-1">Monthly Goal Tracker</div>
              <div style="white-space: nowrap" class="mb-0 font-weight-bold text-gray-800" >{{monthlyGoalTracker}}</div>
            </v-col>
            <v-icon>mdi-calendar</v-icon>
          </v-row>
        </v-card>
      </v-col>

      <v-col xl="3" md="6" class="mb-4">
        <v-card class="card-body">
          <v-row class="no-gutters align-items-center">
            <v-col class="col mr-2">
              <div style="white-space: nowrap" class="text-xs font-weight-bold text-info text-uppercase mb-1">Total Orders (Monthly)</div>
              <div style="white-space: nowrap" class="mb-0 font-weight-bold text-gray-800" >{{monthlyOrders}}</div>
            </v-col>
            <v-icon>mdi-calendar</v-icon>
          </v-row>
        </v-card>
      </v-col>


      <v-col xl="3" md="6" class="mb-4">
        <v-card class="card-body">
          <v-row class="no-gutters align-items-center">
            <v-col class="col mr-2">
              <div style="white-space: nowrap" class="text-xs font-weight-bold text-warning text-uppercase mb-1">All Pending Orders</div>
              <div style="white-space: nowrap" class="mb-0 font-weight-bold text-gray-800" >{{monthlyPendingOrders}}</div>
            </v-col>
            <v-icon>mdi-file-chart</v-icon>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=" lg-5">
        <v-card  min-height="275px" class="card" elevation="10">
          <v-list-item class="card-header">
            <v-list-item-title  class="py-3 m-0 font-weight-bold text-primary">Monthly Goal - Sales Tracker</v-list-item-title>
          </v-list-item>
          <div class="card-body">
            <div class="chart-pie pt-4">
              <!--              <canvas id="myPieChart">-->
              <NumberOfOrdersChart id="myBarChart"></NumberOfOrdersChart>
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
    import {mapState, mapGetters, mapActions} from 'vuex'
    import NumberOfOrdersChart from "./NumberOfOrdersChart";


    export default {
        name: "Dashboard.vue",
        components: {
            NumberOfOrdersChart
        },
        data() {
            return {
                monthlyEarnings: '$0',
                monthlyGoalTracker: '0%',
                monthlyOrders: '0',
                monthlyPendingOrders: 15

            }
        },
        computed: {
            ...mapGetters(['getReports']),
            ...mapState(['reports']),
            ...mapActions([]),
        },
        methods: {
            getData: function () {
                let reports = this.$store.getters.getReports;
                let earnings = 0;
                let tracker = 0;
                let orders = 0;

                reports.forEach((report ) => {
                    let amount = report.orderQty * report.costPerUnit;
                    earnings += amount;
                    orders += report.orderQty;
                });

                // goal is 1000 from TotalGoalChar.vue
                tracker = (parseFloat(earnings) / 1000).toFixed(4);

                this.monthlyOrders = orders;
                this.monthlyEarnings = "$" + earnings.toFixed(2);
                this.monthlyGoalTracker = (tracker * 100) + "%";

            }
        },
        mounted() {
            this.getData();
        }

    }
</script>

<style scoped>

</style>