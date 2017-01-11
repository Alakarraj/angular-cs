var appCS = angular.module('computerSolutions',['ngRoute']);

appCS.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
    .when('/',{    
        templateUrl: 'main.html',
        controller: 'mainCtrl'
    })
    .when('/about',{    
        templateUrl: 'about.html',
        controller: 'mainCtrl'
    })
    .when('/services',{    
        templateUrl: 'services.html',
        controller: 'servicesCtrl'
    })
    .when('/contact',{    
        templateUrl: 'contact.html',
        controller: 'contactCtrl'
    });
});

appCS.controller('mainCtrl', ['$scope', function($scope){
   $scope.name = 'Alakar Raj';
    console.log($scope);
}]);

appCS.controller('servicesCtrl', ['$scope','$http', function($scope, $http){
   $http.get('services.json').then(function(response){
       //console.log(response.data); 
       $scope.services = response.data;
   });
}]);

appCS.controller('contactCtrl', ['$scope','$http', function($scope, $http){
   $http.get('contact.json').then(function(response){
       //console.log(response.data); 
       $scope.contacts = response.data;
   });
}]);