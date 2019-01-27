'use strict';

// import * as Highcharts from 'highcharts';
import * as Highcharts from 'highcharts/highstock';

// Register `chart` component, along with its associated controller and template
angular.
module('chart').
component('chart', {
  bindings: {
    id: '@',
  },
  template: require('./chart.template.html'),
  controller: function chartController() {

    

    var self = this;

    this.series = null;

    this.Cid = `chart-container-${(new Date()).getTime()}`
    console.log(this.Cid);
    

    this.data = (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -10; i <= 0; i += 1) {
        data.push([
          time + i * 1000,
          Math.round(Math.random() * 100)
        ]);
      }
      return data;
    }());

    this.randAdd = function () {
      let time = (new Date()).getTime()

      var x = (new Date()).getTime(), // current time
        y = Math.round(Math.random() * 100);
      // this.series.addPoint([x, y], true, true);
      // this.chartOptions.series[0].addPoint([x, y], true, true);
      this.chart.series[0].addPoint([x, y], true, true);
      console.log(self.series, this.chartOptions.series)
    };


    this.chartOptions = {
      chart: {
        events: {
          load: function () {
            // set up the updating of the chart each second
            var series = this.series[0];
            self.series = series;
            // setInterval(function () {
            //   var x = (new Date()).getTime(), // current time
            //     y = Math.round(Math.random() * 100);
            //   series.addPoint([x, y], true, true);
            // }, 1000);
          }
        }
      },

      time: {
        useUTC: false
      },

      rangeSelector: {
        buttons: [{
          count: 1,
          type: 'minute',
          text: '1M'
        }, {
          count: 5,
          type: 'minute',
          text: '5M'
        }, {
          type: 'all',
          text: 'All'
        }],
        inputEnabled: false,
        selected: 0
      },

      title: {
        text: 'Live random data'
      },

      exporting: {
        enabled: false
      },

      series: [{
        name: 'Random data',
        data: self.data,
      }]
    };
    
    this.$onInit = function () {

      // wait some staff 
      setTimeout(() => {
        self.chart = Highcharts.stockChart(self.Cid, self.chartOptions);
      }, 0);

    };



  }
});
