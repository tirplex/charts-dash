'use strict';

import * as Highcharts from 'highcharts';
// import * as Highcharts from 'highcharts/highstock';

import sensors from '../mock-data/sensors.js';

// Register `chart` component, along with its associated controller and template
angular.
module('chart').
component('chart', {
  bindings: {
    id: '@',
  },
  template: require('./chart.template.html'),
  controller: function chartController() {

    this.sensors = sensors;
    console.log(sensors);

    let self = this;

    this.Cid = `chart-container-${(new Date()).getTime()}`
    this.data = []
    this.selectedSensor = 0;

    this.color = '#ff0000';
    this.colorPickerOptions = {
      format: 'hexString'
    }

    this.chartOptions = {
      chart: {
        events: {
          load: function () {
            // set up the updating of the chart each second
            // var series = this.series[0];
            // self.series = series;
            // setInterval(function () {
            //   var x = (new Date()).getTime(), // current time
            //     y = Math.round(Math.random() * 100);
            //   series.addPoint([x, y], true, true);
            // }, 1000);
          }
        }
      },

      time: {
        useUTC: true
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

      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%e. %b',
          year: '%b'
        },
        title: {
          text: 'Date'
        }
      },

      // series: [{
      //   name: '',
      //   data: [],
      // }]
    };

    this.onAddSeries = function () {
      let sensor = this.sensors.find(el => el.id === +this.selectedSensor)
      let nameIndex = this.chart.series.findIndex(el => el.name === sensor.name)
      console.log(this.chart.series);


      if (sensor != undefined && nameIndex == -1) {
        this.chart.addSeries({
          type: sensor.type,
          id: sensor.id,
          name: sensor.name,
          data: sensor.data,
        })
        this.chart.reflow();
      }
    }

    this.onRemoveChartSeries = function (seria) {
      let index = this.chart.series.findIndex(el => el.userOptions.id === seria.userOptions.id)
      if (index != -1) {
        this.chart.series[index].remove();
      }
    }

    this.$onInit = function () {

      // wait some staff 
      setTimeout(() => {
        self.chart = Highcharts.chart(self.Cid, self.chartOptions);
      }, 0);

    };



  }
});



// chart.series[0].options.color = "#008800";
// chart.series[0].update(chart.series[0].options);