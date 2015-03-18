'use strict';
angular.module('cakeParqueRCtrl', [])


.controller('cakeParqueRCtrl', [function() {
	
	setTimeout(function(){ 


		$(document).ready(function () {

	      $('#containerPR').highcharts({
	        chart: {
	            type: 'column',
	            height: 120,
	            width: 220,
	            style: {
		            fontFamily: 'Telefonica',
		            paddingLeft: '2px'
		        },
		        title: {
					text: ''
				},
				backgroundColor: '#35A8E1',
		        spacingTop: 0,
		        spacingLeft: 10,
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
				lineWidth: 0,
			   minorGridLineWidth: 0,
			   lineColor: 'transparent',
			   labels: {
			       enabled: false
			   },
			   minorTickLength: 0,
			   tickLength: 0
	        },
	        yAxis: {
	        	gridLineWidth: 0,
                minorGridLineWidth: 0,
	        	labels: {
	            	padding: 0,
	            	enabled: false
	            },
	            title: {
	                text: ''
	            },
	            plotLines: [{
	                value: 0,
	                width: 0,
	                color: '#FFFFFF'
	            }]
	        },
	        plotOptions: {
		        column: {
		            pointPadding: 0.2,
		            borderWidth: 0,
		            dataLabels: {
		                enabled: false
		            },
		            showInLegend: false
		        }
		    },
	        credits: {
		        enabled: false
		    },
	        series: [{
	            name: 'Control',
	            data: [{y: 95000, color:'#D3D2D2'}, {y: 90000, color:'#D3D2D2'}, {y: 98000, color:'#D3D2D2'}, {y: 115000, color:'#D3D2D2'}, {y: 126000, color:'#D3D2D2'}, {y: 127000, color:'#D3D2D2'}, {y: 105000, color:'#D3D2D2'}, {y: 98000, color:'#D3D2D2'}, {y: 90000, color:'#D3D2D2'}, {y: 95000, color:'#D3D2D2'}, {y: 100000, color:'#D3D2D2'}, {y: 105000, color:'#D3D2D2'}]

	        }, {
	            name: 'Prepago',
	            data: [{y: 80000, color:'#FFFFFE'}, {y: 75000, color:'#FFFFFE'}, {y: 95000, color:'#FFFFFE'}, {y: 100000, color:'#FFFFFE'}, {y: 110000, color:'#FFFFFE'}, {y: 106000, color:'#FFFFFE'}, {y: 115000, color:'#FFFFFE'}, {y: 110000, color:'#FFFFFE'}, {y: 115000, color:'#FFFFFE'}, {y:  95000, color:'#FFFFFE'}, {y: 90000, color:'#FFFFFE'}, {y: 102000, color:'#FFFFFE'}]

	        }]
	    });

	$('#containerPRP').highcharts({
	        chart: {
	            type: 'column',
	            height: 120,
	            width: 220,
	            style: {
		            fontFamily: 'Telefonica',
		            paddingLeft: '2px'
		        },
		        title: {
					text: ''
				},
				backgroundColor: '#35A8E1',
		        spacingTop: 0,
		        spacingLeft: 10,
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
				lineWidth: 0,
			   minorGridLineWidth: 0,
			   lineColor: 'transparent',
			   labels: {
			       enabled: false
			   },
			   minorTickLength: 0,
			   tickLength: 0
	        },
	        yAxis: {
	        	gridLineWidth: 0,
                minorGridLineWidth: 0,
	        	labels: {
	            	padding: 0,
	            	enabled: false
	            },
	            title: {
	                text: ''
	            },
	            plotLines: [{
	                value: 0,
	                width: 0,
	                color: '#FFFFFF'
	            }]
	        },
	        plotOptions: {
		        column: {
		            pointPadding: 0.2,
		            borderWidth: 0,
		            dataLabels: {
		                enabled: false
		            },
		            showInLegend: false
		        }
		    },
	        credits: {
		        enabled: false
		    },
	        series: [ {
	            name: 'Parque',
	            data: [{y: 80000, color:'#FFFFFE'}, {y: 75000, color:'#FFFFFE'}, {y: 95000, color:'#FFFFFE'}, {y: 100000, color:'#FFFFFE'}, {y: 110000, color:'#FFFFFE'}, {y: 106000, color:'#FFFFFE'}, {y: 115000, color:'#FFFFFE'}, {y: 110000, color:'#FFFFFE'}, {y: 115000, color:'#FFFFFE'}, {y:  95000, color:'#FFFFFE'}, {y: 90000, color:'#FFFFFE'}, {y: 102000, color:'#FFFFFE'}]

	        }]
	    });


		});

	}, 100);

}]);