<template>
  <div>
    <!-- Page Heading -->
    <h1>Header Update Reports</h1>
    <p>Description</p>
    <!-- Page Heading -->
    <v-content>
      <v-card>
        <v-card-title>
          Recent Reports
          <v-spacer></v-spacer>
          <v-text-field
                  v-model="search"
                  append-icon="mdi-search"
                  label="Search"
                  single-line
                  hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="reportData"
                :search="search"
        ></v-data-table>
      </v-card>
    </v-content>

  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'


    export default {
        name: "Update.vue",
        data() {
            return {
                allReports: [],
                search: '',
                headers: [
                    {text: 'Client Number', value: 'clientNumber'},
                    {text: 'Date', value: 'date'},
                    {text: 'Order Quantity', value: 'orderQty'  },
                    {text: 'Cost Per Unit', value: 'costPerUnit'},
                    {text: 'Total Cost', value: 'totalCost'},
                    {text:'Report', value: 'report'},
                    ]
            }
        },
        computed: {
            ...mapGetters(['getReports']),
            ...mapState(['reports']),
            ...mapActions([]),

            reportData(){
                let data = this.$store.getters.getReports;
                data.forEach((row) => {
                    let total = parseFloat(row.orderQty) * parseFloat(row.costPerUnit);
                    row.totalCost = total.toFixed(2);
                })

                return data;
            },
        }
    }
</script>

<style scoped>

</style>