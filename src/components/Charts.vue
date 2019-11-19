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
                <v-list-item-title  class="py-3 m-0 font-weight-bold text-primary">Area Chart</v-list-item-title>
            </v-list-item>
            <div class="card-body">
              <div class="chart-area">
                <canvas id="myAreaChart"></canvas>
              </div>
              <v-divider></v-divider>
              <span>testing</span>
            </div>
          </v-card>
        <br>
          <v-card  class="card mb-4" min-height="275px"  elevation="10">
            <v-list-item class="card-header">
                <v-list-item-title  class=" py-3 m-0 font-weight-bold text-primary">Bar Chart</v-list-item-title>
            </v-list-item>
            <div class="card-body">
              <div class="chart-bar">
                <canvas id myBarChart></canvas>
              </div>
              <v-divider></v-divider>
              <span>testing</span>
            </div>
          </v-card>

      </v-col>
      <v-col cols="xl-4 lg-5">
        <v-card  min-height="275px" class="card" elevation="10">
          <v-list-item class="card-header">
              <v-list-item-title  class="py-3 m-0 font-weight-bold text-primary">Donut Chart</v-list-item-title>
          </v-list-item>
          <div class="card-body">
            <div class="chart-pie pt-4">
              <canvas id="myPieChart"></canvas>
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
    export default {
        name: "Charts2.vue"
    }
</script>

<style scoped>

</style>