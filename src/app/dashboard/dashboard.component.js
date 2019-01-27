'use strict';

// Register `dashboard` component, along with its associated controller and template
angular.
module('dashboard').
component('dashboard', {
  template: require('./dashboard.template.html'),
  controller: function DashboardController() {

    this.tasks = [{id:1,'name':'test1'}, {id:2,'name':'test2'}, {id:3,'name':'test3'}];
    
    this.removeTask = function(taskId){
      alert("Task Id is "+taskId);
    };

    this.charts = [];

    this.addNewChart = function () {

      this.charts.push({
        id: (new Date()).getTime()
      })
    }

    this.onCloseChart = function(index, id) {
      console.log(index, id);
      
      let indx = this.charts.findIndex(el => el.id === id)
      this.charts.splice(indx, 1);
    }

    // this.$on('close', function( event, arrayOfNumbers ){
    //   arrayOfNumbers.forEach(function(number){
    //     console.log(number);
    //   });
    // });

  }
});
