angular.module('myApp').controller('loginCtrl', function($scope,$location,$http) {


	// $scope.login=function(user){
	// 	 $http({
 //    url: '/adduser',
 //    method: 'post',
 //    headers: {
 //       'Content-Type': 'application/json; charset=utf-8'
 //    }
 //  }).then(function (response) {
 //    $scope.userlist = response.data;
 //  });
	// }

  // var userData ={
  //   firstname : "",
  //   lastname : "",
  //   username : ""
  // }
  // console.log(userData);

	

$scope.login=function(user){
  var userData = {
     firstname: user.firstname,
     lastname: user.lastname,
     username: user.username
  }
  console.log(userData);

	debugger
 $http({
    url: '/adduser',
    method: 'post',
    data : userData,
    headers: {
       'Content-Type': 'application/json; charset=utf-8'
    }
  }).then(function (response) {
    $scope.userlist = response.data;
    console.log($scope.userlist);
  });

};





});