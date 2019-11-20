<template>
  <div>
    <!-- Page Heading -->
    <h1>Header Add Reports</h1>
    <p>Description</p>
    <!-- Page Heading -->
    <v-content>
      <v-card elevation="5">
        <v-card-title>Create a new Report:</v-card-title>
        <v-card-text id="errorMessage" class="text-center red--text" v-if="error" >There was an error creating the report. Please try again.</v-card-text>
        <v-card-text id="successMessage" class="text-center green--text" v-if="success" >Report has been created.</v-card-text>
        <v-card-text class="px-3">
          <v-text-field label="Client Account Number" v-model="clientNumber"></v-text-field>
        </v-card-text>
        <v-menu class="px-3" ref="menu" @click="$refs.menu.save(date)" :close-on-content-click="false"  :return-value.sync="date" transition="scale-transition" offset-y max-width="290px" min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field class="px-3" v-model="date" label="Date" readonly v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
<!--            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>-->
            <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
        <v-card-text class="px-3">
          <v-text-field label="Order Quantity" v-model="order" :rules="inputNumberQty"> </v-text-field>
        </v-card-text>
        <v-card-text class="px-3">
          <v-text-field label="Cost Per Unit" v-model="cost" :rules="inputNumberCost"> </v-text-field>
        </v-card-text>
        <v-card-text class="px-3">
          <v-textarea label="Report Info" v-model="report"> </v-textarea>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-subheader>
          <v-btn color="primary" @click="addReport">Add Report</v-btn>
        </v-subheader>
        <v-card-text></v-card-text>
      </v-card>
    </v-content>
  </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        name: "Pages.vue",
        data() {
            return {
                clientNumber: '',
                orderNumber: '',
                date: '',
                report: '',
                order: '',
                cost: '',
                error: false,
                success: false,
                inputNumberQty: [
                    v => {
                        if(/^[\d.]+$/.test(v) || v == '' ){
                            return true
                        } else {
                            this.order = this.order.substring(0, this.order.length -1);
                            return 'This field only accept numbers'
                        }
                    }
                ],
                inputNumberCost: [
                  v => {
                      if(/^[\d.]+$/.test(v) || v == ''){
                          return true
                      } else {
                          this.cost = this.cost.substring(0, this.cost.length -1);
                          return 'This field only accept numbers'
                      }
                  }
                ],
            }
        },
        computed: {
            ...mapGetters(['getReports']),
            ...mapState(['reports']),
            ...mapActions([]),
        },
        methods: {

            addReport: function () {
                // Adding to client array reports - this data will be lost if page is refreshed
                // TODO: you should make a request to your database

                let data = {
                    "clientNumber": this.clientNumber,
                    'orderNumber': Math.floor((Math.random() * 10000000) + 10000).toString(),
                    "date" : this.date,
                    'orderQty': this.order,
                    'costPerUnit': this.cost,
                    "report": this.report
                };

                this.$store.dispatch('updateReports', data);


                // added to api call and run fix the if statement to match the correct outcome
                let err = false ;
                if(err){
                    // error
                    this.error = true;
                    setTimeout(() => { this.error = false }, 2000)
                } else {
                    // display success message
                    this.success = true;

                    //clear input values
                    this.clientNumber = '';
                    this.date = '';
                    this.report = '';
                    this.order = '';
                    this.cost = '';

                    setTimeout(() => { this.success = false; }, 2000)
                }


            }
        },
    }
</script>

<style scoped>

</style>