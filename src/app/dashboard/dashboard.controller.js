(function () {
	angular
		.module('app.dashboard')
		.controller('Dashboard', Dashboard);

	Dashboard.$inject = ['product.dataservice'];

	function Dashboard(productDataservice) {

		var vm = this;

		vm.addToCart = addToCart;
		vm.indexOf = indexOf;
		vm.order = {};
		vm.order.itens = [];
		vm.order.total = 0;

		vm.products = productDataservice.products; 
		
		function addToCart(product) {
			var index = indexOf(product);

			if (index !== -1) {
				item = vm.order.itens[index];
				item.quantity++;
			} else {
				vm.order.itens.push({quantity: 1, product: product});
			}

			addTotal();
		}

		function addTotal() {
			vm.order.total = vm.order.total !== 0 ? ++vm.order.total : 1;
		}

		function indexOf(product) {
			for (var i = 0; i < vm.order.itens.length; i++) {
				if (vm.order.itens[i].product.name === product.name) {
					return i;
				}
			}

			return -1;
		}
	}
})();