import * as Highcharts from 'highcharts';

angular.module('ncCharts', [])
  // Directive for generic chart, pass in chart options
  .directive('hcChart', function () {
    return {
      restrict: 'E',
      template: '<div></div>',
      scope: {
        options: '=',
        chart: '=',
      },
      link: function (scope, element) {
        var chart = Highcharts.chart(element[0], scope.options);

        scope.$watch('options', function (newVal) {
          if (newVal) {
            chart.update(scope.options);
          }
        }, true);

      }
    };
  })
  // Directive for pie charts, pass in title and data only    
  .directive('hcPieChart', function () {
    return {
      restrict: 'E',
      template: '<div></div>',
      scope: {
        title: '@',
        data: '=',
        chart: '@',
      },
      link: function (scope, element) {
        var chart = Highcharts.chart(element[0], {
          chart: {
            type: 'pie'
          },
          title: {
            text: scope.title
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
            }
          },
          series: [{
            data: scope.data
          }]
        });

        scope.$watch('options', function (newVal) {
          if (newVal) {
            chart.update(scope.options);
          }
        }, true);

        
      }
    };
  })
