'use strict';

define(['../app'], function(app){
  app.controller('HeaderController',
    function($scope){
    	$scope.login = function(){
    		require(["./widget/dialog"], function(Dialog){
    			var dialog = new Dialog();
    			dialog.show();
    		});
    	}
      	this.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
    }
  );
});