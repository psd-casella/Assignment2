angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
function($scope, Listings) {
   $scope.listings = Listings;
   $scope.detailedInfo = undefined;
   $scope.show = false;
   $scope.addForm = {};

   //Function to add new listing
   $scope.addListing = function() {
      $scope.listings.push($scope.addForm);
      $scope.addForm = {}
      $scope.show = !$scope.show;
   };

   //Function to delete listing
   $scope.deleteListing = function(listing) {
      let newListings = [];
      newListings = $scope.listings.filter(function(choice) {
         let deleteName = listing.name;
         let deleteCode = listing.code;
         if ( choice.name !== deleteName && choice.code !== deleteCode) {
            return listing;
         }
      });
      $scope.listings = newListings;
      $scope.detailedInfo = undefined;
   };

   //Function to show details of selected listing
   $scope.showDetails = function(listing) {
      $scope.detailedInfo = listing;
   };

   //Function for add building button
   $scope.onClick = function() {
      $scope.show = !$scope.show;
   };
}
]);
