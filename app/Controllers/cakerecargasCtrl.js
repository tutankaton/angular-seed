'use strict';
angular.module('cakerecargasCtrl', [])


.controller('cakerecargasCtrl', [function() {
	setTimeout(function(){ 
	    $('#containerV').highcharts({
	    	chart: {
	            height: 130,
	            style: {
		            fontFamily: 'Telefonica'
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
		        plotBackgroundColor : '#35A8E1'
	        },
	        title: {
	        	text: ''
	        },
	        subtitle: {
	            text: '',
	        },
	        xAxis: {


	            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
	        tooltip: {
	        },
	        exporting:{
	        	enabled:false
	        },
	        credits: {
		        enabled: false
		    },
	        legend: {
	            enabled: false
	        },
	        series: [{
	            name: 'Montos de recargas',
	            data: [99000000, 98000000, 99000000, 98000000, 97000000, 99000000, 100000000, 101000000, 102000000, 101000000, 102000000, 102000000],
	            color: '#FFFFFF'
	        }]
	    });
	}, 100);

}]);