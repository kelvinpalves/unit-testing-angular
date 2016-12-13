(function () {
	'use strict';

	angular
		.module('app.product')
		.factory('product.dataservice', dataservice);

	function dataservice() {
		var products = [
				{name: 'Apple'},
				{name: 'Beans'},
				{name: 'Coffee'},
				{name: 'Meat'},
				{name: 'Milk'},
				{name: 'Potato'},
				{name: 'Rice'},
				{name: 'Soda'},
				{name: 'Turkey'}
			];

		var service = {
			products: products
		};

		return service;
	}

})();