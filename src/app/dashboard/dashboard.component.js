'use strict';

// Register `dashboard` component, along with its associated controller and template
angular.
module('dashboard').
component('dashboard', {
  template: require('./dashboard.template.html'),
  controller: function DashboardController() {

    this.charts = [];

    this.addNewChart = function () {
      this.charts.push({
        id: (new Date()).getTime()
      })
    }

    this.onCloseChart = function(index, id) {
      let indx = this.charts.findIndex(el => el.id === id)
      this.charts.splice(indx, 1);
    }
  }
});
