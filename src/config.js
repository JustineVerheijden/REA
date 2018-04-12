import angular from 'angular';
import ResultsController from './resultsController';
import "../bootstrap/css/bootstrap.css";
import '../css/selectProperties.css';

var moduleName = 'REA';

let app = angular.module(moduleName,[]);
app.controller('ResultsController',[ResultsController]);

export default moduleName;