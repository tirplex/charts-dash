import angular from 'angular';

import 'angular-animate';
import 'angular-touch';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-bootstrap'

import '../style/app.css';
import './drag-module/drag-module.module'
import './chart/ncCharts.directive'

import 'highcharts-ng';



import './drag-module/resize'
import './drag-module/resize2'

import 'ng-resize';

// import 'angular-resizable/angular-resizable.min.css'
// import 'angular-resizable/angular-resizable.min.js'

import './dashboard/dashboard.module'
import './dashboard/dashboard.component'

import './chart/chart.module'
import './chart/chart.component'


import './phone-list/phone-list.module.js'
import './phone-list/phone-list.component.js'


let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
    // init
    'ngAnimate',
    'ngTouch',
    'ngResize',
    'ui.bootstrap',

    //view components 
    'dashboard',
    'chart',
    'phoneList',

    // test

    'ncCharts',
    'highcharts-ng',
    // 'highcharts',
    'dragModule',
    'resizeModule',
    'mc.resizer'
    // 'angularResizable'
  ])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
