import angular from 'angular';

import '../style/app.css';

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
  'phoneList'
])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;