describe('Dashboard', function () {

	beforeEach(module('app'));

	var $controller;

	var product01 = {
  		name: 'Item test'
  	};

  	var product02 = {
  		name: 'Item test 02'
  	};

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));

	describe('Add a product to cart', function () {		

		it ('Sum to total of itens', function() {
			var $scope = {};
      		var controller = $controller('Dashboard', { $scope: $scope });

	      	controller.addToCart(product01);
	      	expect(controller.order.total).toBe(1);

	      	controller.addToCart(product01);
	      	controller.addToCart(product02);
	      	controller.addToCart(product01);
	      	expect(controller.order.total).toBe(4);
		});

		it ('Add a product to item list', function () {
			var $scope = {};

	      	var controller = $controller('Dashboard', { $scope: $scope });

	      	controller.addToCart(product01);
	      	controller.addToCart(product01);

	      	expect(controller.order.itens.length).toBe(1);

	      	controller.addToCart(product02);
	      	controller.addToCart(product02);
	      	controller.addToCart(product02);
	      	controller.addToCart(product02);

	      	expect(controller.order.itens.length).toBe(2);
		});

		it ('Sum to quantity of item', function () {
			var $scope = {};

	      	var controller = $controller('Dashboard', { $scope: $scope });

	      	controller.addToCart(product01);
	      	controller.addToCart(product01);
	
			expect(controller.order.itens[controller.indexOf(product01)].quantity).toBe(2);

	      	controller.addToCart(product02);
	      	controller.addToCart(product02);
	      	controller.addToCart(product02);
	      	controller.addToCart(product02);

	      	expect(controller.order.itens[controller.indexOf(product02)].quantity).toBe(4);
		});

	});
});