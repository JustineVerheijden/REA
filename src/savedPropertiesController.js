function SavedPropertiesController(dataService){
    let vm = this;
    dataService.getSavedProperties(vm);
}


export default SavedPropertiesController;

