// Menambahkan interaktivitas pada tombol "Beli Sekarang"
const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productInfo = button.parentElement.querySelector('p').textContent;
        alert('Anda telah memilih untuk membeli: ' + productInfo);
    });
});