function SavedPropertiesController($rootScope, $scope, dataService, constants){
    let vm = this;

    dataService.getSavedProperties(vm);
    
    $scope.removeSavedProperty = (id)=>{
        vm.savedData = vm.savedData.filter((index)=>{
            //only keep properties that weren't passed in to this function
            return index.id !== id;
        })
    }

    $rootScope.$on('addSavedProperty', (event, propertyToBeSaved) => {
        //sends call to controller function this call was made by somewhere else in the application
        vm.addSavedProperty(propertyToBeSaved);
    });

    vm.addSavedProperty = (propertyData)=>{
        let propertyToBeSaved ={};
        Object.assign(propertyToBeSaved, propertyData);
        //create complete copy of the property to be altered and potentially added to the saved properties
        let reTest = new RegExp(constants.RESULT_INDICATOR,'g');
        propertyToBeSaved.id = propertyToBeSaved.id.replace(reTest, '');
        //ensure property to be potentially added to the saved properties has a unique id 
        vm.processProperty(propertyToBeSaved);
    }
    
    vm.propertyExistsInSaved = (id)=>{
        let exists = vm.savedData.filter((index)=>{
            return index.id === constants.SAVED_INDICATOR+id;
        });
        return exists.length!==0;
    }
    
    vm.processProperty = (propertyToBeSaved) => {
        if (!vm.propertyExistsInSaved(propertyToBeSaved.id)){
            //don't allow property to be displayed multiple times in the 'saved' column
            vm.savedData.push(propertyToBeSaved);
        } else{
            throw new Error(constants.PROPERTY_EXISTS_ERROR);
            // Unsure of requirements regarding what to do if user clicks on add button more than once, need to check with users
        }
    }
}


export default SavedPropertiesController;

