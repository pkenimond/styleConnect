angular.module('stylistApp.controllers', [])

//top view controller
.controller('AppCtrl', function($scope, $rootScope, $state) {
  
  $rootScope.user = {};

  $scope.logout = function(){
    $rootScope.user = {};
    $state.go('app.start')
  };

})

// This controller is bound to the "app.account" view
.controller('AccountCtrl', function($scope, $rootScope) {
  
  //readonly property is used to control editability of account form
  $scope.readonly = true;

  // #SIMPLIFIED-IMPLEMENTATION:
  // We act on a copy of the root user
  $scope.accountUser = angular.copy($rootScope.user);
  var userCopy = {};

  $scope.startEdit = function(){
    $scope.readonly = false;
    userCopy = angular.copy($scope.user);
  };

  $scope.cancelEdit = function(){
    $scope.readonly = true;
    $scope.user = userCopy;
  };
  

  $scope.saveEdit = function(){
    $scope.readonly = true;
    $rootScope.user = $scope.accountUser;
  };

})


.controller('LoginCtrl', function ($scope, $state, $rootScope) {


  $scope.login = function(){

    $rootScope.user = {
      email : "JohnDoe@test.com",
      name : "John Doe",
      address : "123 Main Street",
      city : "Americaville",
      zip  : "12345",
      avatar : 'sampledata/images/avatar.jpg'
    };

    $state.go('app.welcome');
  };
  
})


// Feeds controller.
.controller('FeedsCtrl', function($scope, BackendService) {

  $scope.doRefresh = function(){
      BackendService.getFeeds()
      .success(function(newItems) {
        $scope.feeds = newItems;
      })
      .finally(function() {

        $scope.$broadcast('scroll.refreshComplete');
      });
  };


  $scope.doRefresh();

})



// Welcome controller.
.controller('welcomeCtrl', function($scope, $ionicActionSheet, BackendService) {
  

  $scope.doRefresh = function(){
      BackendService.getProducts()
      .success(function(newItems) {
        $scope.products = newItems;
      })
      .finally(function() {
      $scope.$broadcast('scroll.refreshComplete');
      });
  };
  
  

  // private method to add a product to cart
  var addProductToCart = function(product){
    $scope.cart.products.push(product);
    CartService.saveCart($scope.cart);
  };

  // method to add a product to cart via $ionicActionSheet
  $scope.addProduct = function(product){
    $ionicActionSheet.show({
       buttons: [
         { text: '<b>Add to cart</b>' }
       ],
       titleText: 'Buy ' + product.title,
       cancelText: 'Cancel',
       cancel: function() {
          // add cancel code if needed ..
       },
       buttonClicked: function(index) {
         if(index == 0){
           addProductToCart(product);
           return true;
         }
         return true;
       }
     });
  };

  //trigger initial refresh of products
  $scope.doRefresh();

})
