import angular from 'angular';

import 'angular-animate';
import 'angular-touch';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-bootstrap'

import '../style/app.css';
import './drag-module/drag-module.module'
import './chart/ncCharts.directive'

import 'highcharts-ng';

import 'angularjs-color-picker/dist/angularjs-color-picker.min.css'
import 'angularjs-color-picker/dist/themes/angularjs-color-picker-bootstrap.min.css'
import 'tinycolor2/dist/tinycolor-min.js'
import 'angularjs-color-picker/dist/angularjs-color-picker.min.js'

import './dashboard/dashboard.module'
import './dashboard/dashboard.component'

import './chart/chart.module'
import './chart/chart.component'


let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {}
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
    // init
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap',
    'color.picker',
    'highcharts-ng',

    //view components 
    'dashboard',
    'chart',

    // test
    // 'ncCharts',
    // 'dragModule',
  ])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
