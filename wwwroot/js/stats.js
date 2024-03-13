document.addEventListener('DOMContentLoaded', cargar());


function cargar(){
var ctx = document.getElementById('canvas1').getContext('2d');
var meses = ["junio","julio","agosto", "septiembre", "octubre","noviembre"];
var ganancias = ["5000","10000", "9800", "11200", "10900", "7000"];
/* 
var datosVenta = {
    label: "Ventas por mes",
    data:[1000, 900, 400, 900],
    backgroundColor: 'rgb(52,162,235)',
    borderColor: 'rgb(54,162,235)',
    tension:0.4,
};

var ctx1 = new Chart(ctx, {
    type:'line',
    data:{
        labels:meses,
        datasets:[datosVenta,]
    },
    options: {
        scales:{
            y:{
                beginAtZero: true
            },
        }
    },
}); */

const MyChart = new Chart(ctx, {
    type:'line',
    data:{
        labels: meses,
        datasets: [{
            label: 'ganancias',
            data: ganancias,
            borderColor: [ 
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 3
        }]
    },
    options:{
        responsive: true,
        scales:{
            y:{
                beginAtZero:true,
                max: 15000
            }
        }
    }
})
}