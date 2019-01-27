'use strict';

import * as Highcharts from 'highcharts';

// Register `phoneList` component, along with its associated controller and template
angular.
module('phoneList').
component('phoneList', {
  template: require('./phone-list.template.html'),
  //templateUrl: `asdadasdasd2222222222222`,
  controller: function PhoneListController() {

    Highcharts.chart('chart-container', {

      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
  });

    // this.chartConfig = {
    //   chart: {
    //     renderTo: 'container',
    //     type: 'bar'
    //   },
    //   title: {
    //     text: 'Fruit Consumption'
    //   },
    //   xAxis: {
    //     categories: ['Apples', 'Bananas', 'Oranges']
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Fruit eaten'
    //     }
    //   },
    //   series: [{
    //     name: 'Jane',
    //     data: [1, 0, 4]
    //   }, {
    //     name: 'John',
    //     data: [5, 7, 3]
    //   }]
    // }


    this.chartConfig = {
      options: {
        chart: {
          type: 'area'
        }
      },

      title: {
        text: 'Network Usage - Last 60 Minutes'
      },
      yAxis: {
        title: {
          text: 'Throughput MBit/s'
        }
      },
      xAxis: {
        title: {
          text: 'Minutes'
        },
        categories: ['-55', '-50', '-45', '-40', '-35', '-30',
          '-25', '-20', '-15', '-10', '-05', '0'
        ]
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: true
        }
      },
      series: [{
        name: 'Inbound',
        data: [29.9, 71.5, 25.4, 43.2, 37.0, 33.0, 35.6, 48.5, 21.4, 19.1, 16.6, 54.4]
      }, {
        name: 'Outbound',
        data: [19.3, 56.3, 23.1, 38.5, 32.9, 27.0, 30.6, 42.3, 17.4, 12.0, 9.1, 34.0]
      }]
    };




  this.today = function () {
    this.dt = new Date();
  };
  this.today();

  this.clear = function () {
    this.dt = null;
  };

  this.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  this.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  this.toggleMin = function () {
    this.inlineOptions.minDate = this.inlineOptions.minDate ? null : new Date();
    this.dateOptions.minDate = this.inlineOptions.minDate;
  };

  this.toggleMin();

  this.open1 = function () {
    this.popup1.opened = true;
  };

  this.open2 = function () {
    this.popup2.opened = true;
  };

  this.setDate = function (year, month, day) {
    this.dt = new Date(year, month, day);
  };

  this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  this.format = this.formats[0];
  this.altInputFormats = ['M!/d!/yyyy'];

  this.popup1 = {
    opened: false
  };

  this.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  this.events = [{
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (var i = 0; i < this.events.length; i++) {
        var currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return this.events[i].status;
        }
      }
    }

    return '';
  }

  this.alerts = [{
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.'
    }
  ];


  this.oneAtATime = true;

  this.groups = [{
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  this.items = ['Item 1', 'Item 2', 'Item 3'];

  this.addItem = function () {
    var newItemNo = this.items.length + 1;
    this.items.push('Item ' + newItemNo);
  };

  this.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };


  this.addAlert = function () {
    this.alerts.push({
      msg: 'Another alert!'
    });
  };

  this.closeAlert = function (index) {
    this.alerts.splice(index, 1);
  };


  this.phones = [{
    name: 'Nexus S',
    snippet: 'Fast just got faster with Nexus S.'
  }, {
    name: 'Motorola XOOM™ with Wi-Fi',
    snippet: 'The Next, Next Generation tablet.'
  }, {
    name: 'MOTOROLA XOOM™',
    snippet: 'The Next, Next Generation tablet.'
  }];
}
});
