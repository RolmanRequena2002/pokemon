var pokemon= angular.module("pokemon",[])
pokemon.controller("pokedex",function($scope,$rootScope,$http){
	$http({
		method:"GET",
		url:"https://pokeapi.co/api/v2/pokemon/35"
	}).then(function callbackSuccess(y){
		console.log(y);
	})
});