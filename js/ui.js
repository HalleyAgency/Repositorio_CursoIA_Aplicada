document.addEventListener('DOMContentLoaded', () => {
    // --- Dark Mode Toggle --- //
    const toggleButton = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    toggleButton.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    // --- Dropdown Menu (from reference) --- //
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    }

    // --- Collapsible Sections --- //
    // This part needs to run after the content is rendered.
    // We will use a MutationObserver to detect when the dynamic content is added.
    const mainContent = document.getElementById('main-content');
    const observer = new MutationObserver((mutationsList, observer) => {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const headers = mainContent.querySelectorAll('h2');
                headers.forEach(header => {
                    // Prevent adding listener twice
                    if (header.classList.contains('collapsible-header')) return;

                    header.classList.add('collapsible-header');
                    const content = header.nextElementSibling;
                    if(content) {
                        content.classList.add('collapsible-content');

                        header.addEventListener('click', () => {
                            header.classList.toggle('collapsed');
                            content.classList.toggle('collapsed');
                        });
                    }
                });
            }
        }
    });

    observer.observe(mainContent, { childList: true, subtree: true });
});
