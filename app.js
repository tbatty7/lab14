// I have http-server installed through npm to run this on a quick server.
// to call server, type this in the console: http-server -c-1

var app = angular.module('myModule', []);

app.controller('myController', function($scope){
	$scope.projects = [
		{ name: 'project1',	src: "http://placehold.it/200x200", date: 050117, collaborators: ['Roger', 'Ellie']	},
		{ name: 'project2',	src: "http://placehold.it/200x200", date: 050217, collaborators: ['Roger', 'Tina']	},
		{ name: 'project3',	src: "http://placehold.it/200x200", date: 050317, collaborators: ['Billy', 'Ellie']	},
		{ name: 'project4',	src: "http://placehold.it/200x200", date: 050417, collaborators: ['Tommy', 'Ellie']	},
		{ name: 'project5',	src: "http://placehold.it/200x200", date: 050517, collaborators: ['Billy', 'Ellie']	},
	]
	$scope.popup = function(){
		alert("Hi");
	};

	$scope.border = "grey"

});

app.directive('myDirective', function(){
	return {
		restrict: 'E',
		templateUrl: 'project.html',
		link: function(scope, elem, attrs) {
			elem.on('click', function(){
				scope.$apply(scope.border = 'red');  // The .$apply() only works with scope. scope.border- 
				// is referenced in the project.html snippet connected by templateUrl:
			});
			elem.on('mouseenter', function(){
				scope.$apply(scope.border = 'black');
			});
			elem.on('mouseleave', function(){
				scope.$apply(scope.border = 'grey');
			});
		}
	};

});