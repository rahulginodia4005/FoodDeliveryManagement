// Add functionality to search input
const searchInput = document.querySelector('input');
searchInput.addEventListener('input', function() {
	const searchTerm = this.value.toLowerCase();
	const products = document.querySelectorAll('.restaurant');
	for (let i = 0; i < products.length; i++) {
		const productName = products[i].querySelector('h3').textContent.toLowerCase();
		if (productName.includes(searchTerm)) {
			products[i].style.display = 'flex';
		} else {
			products[i].style.display = 'none';
		}
	}
});
