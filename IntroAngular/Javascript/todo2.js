var todoApp = angular.module('todoApp', []);
todoApp.controller('TodoCtrl',['$scope', function($scope){

    //init array of task
    $scope.taskSet=[
        {
            taskName: 'Faire le menage',
            done : false
        },{
            taskName: 'Ranger le courrier',
            done : false
        },{
            taskName: 'Promener le chien',
            done : false
        }];
    
    //method to ask task
    $scope.addTask = function(){
        if($scope.taskName !== ''){
        //add task to array
            $scope.taskSet.push({
                taskName: $scope.taskName,
                done: false
            });
        }
        //clear taskname value
        $scope.taskName='';
    };
    
}]);