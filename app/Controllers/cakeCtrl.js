'use strict';
angular.module('cakeCtrl', [])


.controller('cakeCtrl', [function() {
	
	setTimeout(function(){ 
		$(document).ready(function () {

	        // Build the chart
	        $('#containerRRR').highcharts({
	            chart: {
	                plotBackgroundColor: '#35A8E1',
	                plotBorderWidth: null,
	                plotShadow: false,
	                height: 145,
		            style: {
			            fontFamily: 'Telefonica',
			            paddingTop: '3px'
			        },
			        title: {
						text: ''
					},
					marginTop : 5,
					backgroundColor: '#35A8E1',
			        spacingTop: 0,
			        spacingLeft: 0,
			        spacingUp: 0,
			        spacingButtom: 0
	            },
	            exporting:{
	        		enabled:false
		        },
		        credits: {
			        enabled: false
			    },
		        title: {
		        	text: ''
		        },
		        legend:{
		        	enabled: false
		        },
	            tooltip: {
	            	footerFormat: '',
	            	headerFormat: '<span style="font-size: 10px">{point.key}</span></br>',
	                pointFormat: '<div style="padding-top: 10px">{series.name}: <b>{point.percentage:.1f}%</b></div>',
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
	                pie: {
	                	borderWidth : 0,
	                    allowPointSelect: true,
	                    cursor: 'pointer',
	                    dataLabels: {
	                        enabled: false
	                    },
	                    showInLegend: false
	                }
	            },
	            series: [{
	                type: 'pie',
	                name: 'Market Share',
	                data: [
	               		{
	                        name: 'Movistar',
	                        y: 43.6,
	                        sliced: true,
	                        selected: true,
	                        color:'#394A78'
	                    },
	                    {
	                        name: 'Claro',
	                        y: 42.8,
	                        color:'#4D6FA8'
	                    },
	                    {
	                        name: 'Personal',
	                        y: 13.6,
	                        color:'#7593BE'
	                    }
	                ]
	            }]
	        });
	    

			// Build the chart
	        $('#containerRRRR').highcharts({
	            chart: {
	                plotBackgroundColor: '#35A8E1',
	                plotBorderWidth: null,
	                plotShadow: false,
	                height: 145,
		            style: {
			            fontFamily: 'Telefonica',
			            paddingTop: '3px'
			        },
			        title: {
						text: ''
					},
					marginTop : 5,
					backgroundColor: '#35A8E1',
			        spacingTop: 0,
			        spacingLeft: 0,
			        spacingUp: 0,
			        spacingButtom: 0
	            },
	            exporting:{
	        		enabled:false
		        },
		        credits: {
			        enabled: false
			    },
		        title: {
		        	text: ''
		        },
		        legend:{
		        	enabled: false
		        },
	            tooltip: {
	            	footerFormat: '',
	            	headerFormat: '<span style="font-size: 10px">{point.key}</span></br>',
	                pointFormat: '<div style="padding-top: 10px">{series.name}: <b>{point.percentage:.1f}%</b></div>',
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
	                pie: {
	                	borderWidth : 0,
	                    allowPointSelect: true,
	                    cursor: 'pointer',
	                    dataLabels: {
	                        enabled: false
	                    },
	                    showInLegend: false
	                }
	            },
	            series: [{
	                type: 'pie',
	                name: 'Market Share',
	                data: [
	                	{
	                        name: 'Speedy',
	                        y: 66.7,
	                        sliced: true,
	                        selected: true,
	                        color: '#394A78'
	                    },
	                    {
	                        name: 'Fibertel',
	                        y: 17.4,
	                        color: '#5578AF'
	                    },
	                    {
	                        name: 'Telecentro',
	                        y: 10.2,
	                        color: '#4D6FA8'
	                    },
	                    {
	                        name: 'Otros',
	                        y: 5.7,
	                        color: '#7593BE'
	                    }
	                ]
	            }]
	        });
	    });
	}, 100);

}]);