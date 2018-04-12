import angular from 'angular';
import dataService from './dataService';
import ResultsController from './resultsController';
import "../bootstrap/css/bootstrap.css";
import '../css/selectProperties.css';

var moduleName = 'REA';

let app = angular.module(moduleName,[dataService.name]);

ResultsController.$inject = ['dataService'];

app.controller('ResultsController',ResultsController);

export default moduleName;