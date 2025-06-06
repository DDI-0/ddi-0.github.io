// Tab switching functionality
function switchTab(targetTab) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show target tab content
    document.getElementById(targetTab).classList.add('active');

    // Add active class to clicked tab button
    document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
}

// Add click event listeners to tab buttons
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        switchTab(targetTab);
    });
});

// Updated theme toggle functionality for new toggle switch
function toggleTheme() {
    const body = document.body;
    const toggleSwitch = document.getElementById('switch');

    if (toggleSwitch.checked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}

// Add event listener to the new toggle switch
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('switch');

    // Set initial state
    switchTab('projects');

    // Add change event listener to toggle switch
    toggleSwitch.addEventListener('change', toggleTheme);

    // Check if user prefers dark mode initially
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleSwitch.checked = true;
        document.body.classList.add('dark-theme');
    }
});