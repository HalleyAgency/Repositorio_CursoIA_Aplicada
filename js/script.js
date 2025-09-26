document.addEventListener('DOMContentLoaded', function() {
    // Script para manejar el dropdown
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropdown) {
        // Opcional: Clic para mantener el menú abierto en móvil
        dropbtn.addEventListener('click', function(event) {
            if (window.innerWidth < 768) {
                event.preventDefault();
                const dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none';
                } else {
                    dropdownContent.style.display = 'block';
                }
            }
        });
    }
});
