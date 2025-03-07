// Theme switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    darkModeToggle.checked = savedTheme === 'dark';

    // Theme switch handler
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Background image switching logic
    const link = 'nature_2024_science_images/';
    let currentIndex = 0;

    function changeBackgroundImage() {
        document.querySelector('body').style.backgroundImage = `url(${link}${currentIndex + 1}.avif)`;
        currentIndex = (currentIndex + 1) % 19;
    }

    setInterval(changeBackgroundImage, 10000);
    changeBackgroundImage();
});
