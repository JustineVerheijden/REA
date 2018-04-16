import angular from 'angular';
import constants from './constants';
import dataService from './dataService';
import ResultsController from './resultsController';
import "../dist/bootstrap/css/bootstrap.css";
import '../dist/css/selectProperties.css';

var moduleName = 'REA';

let app = angular.module(moduleName,[constants.name, dataService.name]);

ResultsController.$inject = ['dataService'];

app.controller('ResultsController',ResultsController);

export default moduleName;