describe('Dashboard', function () {

	beforeEach(module('app'));

	var $controller;

	var products = [
		{name: 'Apple'},
		{name: 'Beans'},
		{name: 'Coffee'},
		{name: 'Meat'},
		{name: 'Milk'},
		{name: 'Potato'},
		{name: 'Rice'},
		{name: 'Soda'},
		{name: 'Turkey'}];

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));

	describe('Add a product to cart', function () {		

		it ('Sum to total of itens', function() {
			var $scope = {};
      		var controller = $controller('Dashboard', { $scope: $scope });

	      	controller.addToCart(products[0]);
	      	expect(controller.order.total).toBe(1);

	      	controller.addToCart(products[0]);
	      	controller.addToCart(products[1]);
	      	controller.addToCart(products[2]);
	      	expect(controller.order.total).toBe(4);
		});

		it ('Add a product to item list', function () {
			var $scope = {};

	      	var controller = $controller('Dashboard', { $scope: $scope });

	      	controller.addToCart(products[0]);
	      	controller.addToCart(products[0]);

	      	expect(controller.order.itens.length).toBe(1);

	      	controller.addToCart(products[1]);
	      	controller.addToCart(products[1]);
	      	controller.addToCart(products[2]);
	      	controller.addToCart(products[3]);
	      	controller.addToCart(products[3]);
	      	controller.addToCart(products[3]);
	      	controller.addToCart(products[4]);

	      	expect(controller.order.itens.length).toBe(5);
		});

		it ('Sum to quantity of item', function () {
			var $scope = {};

	      	var controller = $controller('Dashboard', { $scope: $scope });

	      	controller.addToCart(products[0]);
	      	controller.addToCart(products[0]);
	
			expect(controller.order.itens[controller.indexOf(products[0])].quantity).toBe(2);

	      	controller.addToCart(products[1]);
	      	controller.addToCart(products[1]);
	      	controller.addToCart(products[1]);
	      	controller.addToCart(products[1]);

	      	expect(controller.order.itens[controller.indexOf(products[1])].quantity).toBe(4);
		});

	});
});