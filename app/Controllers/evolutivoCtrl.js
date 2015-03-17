'use strict';
angular.module('evolutivoCrl', [])


.controller('evolutivoCtrl',  [function() {

setTimeout(function(){ 
	$('#containerRR').highcharts({
	        chart: {
	            type: 'column',
	            height: 140,
	            style: {
		            fontFamily: 'Telefonica',
		            paddingLeft: '2px'
		        },
		        title: {
					text: ''
				},
				backgroundColor: '#35A8E1',
		        spacingTop: 0,
		        spacingLeft: 0,
		        spacingUp: 0,
		        spacingButtom: 0,
		        marginTop : 5,
		        className: "chartevolutivo",
		        plotBackgroundColor : '#35A8E1'
	        },
	        exporting:{
	        	enabled:false
	        },
	        title: {
	        	text: ''
	        },
	        legend:{
	        	enabled: false
	        },
	        subtitle: {
	        },
	        xAxis: {
	            title: {
					text: ''
				},
				categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
				labels:{
					padding: 0,
					style: {
	                    "fontSize" : "9px",
	                    color: 'white'
	                }
				}
	        },
	        yAxis: {
	        	lineWidth: 0,
	            labels: {
	            	padding: 0,
	            	enabled: true,
	            	style: {
	                    fontSize : "9px",
	                    color: 'white',
	                    paddingLeft: '10px'
	                }
	            },
	            title: {
					text: ''
				}
	        },
	        tooltip: {
	            formatter: function () {
		            return "<div 'class=tooltip'><div class='tooltipblock'><div class='tooltipfloatleft'>Repro</div><div class='tooltipfloatright'>43.454</div></div> <div class='tooltipblock'><div class='tooltipfloatleft'>Var.A/A</div><div class='tooltipfloatright'>4%</div> </div><div class='tooltipblock'><div class='tooltipfloatleft'>Cump</div><div class='tooltipfloatright'>220%</div> </div> </div>";
		        },
		        backgroundColor: '#565656',
		        borderColor: '#565656',
		        borderRadius: 10,
		        useHTML: true,
		        style: {
 					color: '#FFFFFF',
 					fontSize: '9px'
				}
	        },
	        plotOptions: {
		        column: {
		            pointPadding: 0.2,
		            borderWidth: 0,
		            dataLabels: {
		                enabled: false
		            }
		        }
		    },
	        credits: {
		        enabled: false
		    },
	        series: [{
	            name: 'Equipo',
	            data: [{y: 65000, color:'#D3D2D2'}, {y: 60000, color:'#D3D2D2'}, {y: 68000, color:'#D3D2D2'}, {y: 75000, color:'#D3D2D2'}, {y: 76000, color:'#D3D2D2'}, {y: 77000, color:'#D3D2D2'}, {y: 75000, color:'#D3D2D2'}, {y: 68000, color:'#D3D2D2'}, {y: 60000, color:'#D3D2D2'}, {y: 65000, color:'#D3D2D2'}, {y: 70000, color:'#D3D2D2'}, {y: 75000, color:'#D3D2D2'}]

	        }, {
	            name: 'Repro',
	            data: [{y: 80000, color:'#FFFFFE'}, {y: 75000, color:'#FFFFFE'}, {y: 95000, color:'#FFFFFE'}, {y: 110000, color:'#FFFFFE'}, {y: 100000, color:'#FFFFFE'}, {y: 110000, color:'#FFFFFE'}, {y: 115000, color:'#FFFFFE'}, {y: 110000, color:'#FFFFFE'}, {y: 115000, color:'#FFFFFE'}, {y:  95000, color:'#FFFFFE'}, {y: 90000, color:'#FFFFFE'}, {y: 102000, color:'#FFFFFE'}]

	        }]
	    });
}, 100);
	    


}]);