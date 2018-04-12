function ResultsController(dataService){
    let vm = this;
    dataService.getResultsProperties(vm);
}


export default ResultsController;

