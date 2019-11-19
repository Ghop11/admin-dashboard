

<script>
    // CommitChart.js
    import VueCharts from 'vue-chartjs';
    import {mapState, mapGetters, mapActions} from 'vuex'


    export default {
        extends: VueCharts.Bar,
        computed: {
            ...mapGetters(['getReports']),
            ...mapState(['reports']),
            ...mapActions([]),
        },
        mounted () {
            // Overwriting base render method with actual data.

            // TODO: get data from state and put it in an array
            // TODO: Labels =
            let orderLabels = [];
            let orderCostData = [];

            let mockData = this.$store.getters.getReports;

            mockData.forEach((data ) => {
                orderLabels.push(data.clientNumber);
                orderCostData.push((parseFloat(data.orderQty) * parseFloat(data.costPerUnit)).toFixed(2) );
            });

            this.renderChart({
                labels: orderLabels,
                datasets: [
                    {
                        fontColor: 'red',
                        backgroundColor: 'rgba(100,149,237, 0.8)',
                        borderColor: 'rgba(0,0,139, 1)',
                        data: orderCostData,
                        label: 'Total Cost Of Order',
                    },
                ]
            }, {
                responsive: true,
                maintainAspectRatio: false,
            })
        }
    }

</script>

