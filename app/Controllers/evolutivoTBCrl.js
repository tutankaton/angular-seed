'use strict';
angular.module('evolutivoTBCrl', [])


.controller('evolutivoTBCrl',  [function() {

setTimeout(function(){ 
	$('#containerTB').highcharts({
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
	            data: [{y: 95000, color:'#D3D2D2'}, {y: 90000, color:'#D3D2D2'}, {y: 98000, color:'#D3D2D2'}, {y: 125000, color:'#D3D2D2'}, {y: 146000, color:'#D3D2D2'}, {y: 177000, color:'#D3D2D2'}, {y: 105000, color:'#D3D2D2'}, {y: 98000, color:'#D3D2D2'}, {y: 90000, color:'#D3D2D2'}, {y: 95000, color:'#D3D2D2'}, {y: 100000, color:'#D3D2D2'}, {y: 105000, color:'#D3D2D2'}]

	        }, {
	            name: 'Repro',
	            data: [{y: 80000, color:'#FFFFFE'}, {y: 75000, color:'#FFFFFE'}, {y: 95000, color:'#FFFFFE'}, {y: 110000, color:'#FFFFFE'}, {y: 130000, color:'#FFFFFE'}, {y: 156000, color:'#FFFFFE'}, {y: 115000, color:'#FFFFFE'}, {y: 110000, color:'#FFFFFE'}, {y: 115000, color:'#FFFFFE'}, {y:  95000, color:'#FFFFFE'}, {y: 90000, color:'#FFFFFE'}, {y: 102000, color:'#FFFFFE'}]

	        }]
	    });
}, 100);
	    


}]);