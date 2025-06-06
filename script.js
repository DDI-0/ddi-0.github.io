function switchTab(targetTab) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(targetTab).classList.add('active');

    document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
}

document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        switchTab(targetTab);
    });
});

function toggleTheme() {
    const body = document.body;
    const toggleSwitch = document.getElementById('switch');

    if (toggleSwitch.checked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('switch');

    switchTab('projects');

    toggleSwitch.addEventListener('change', toggleTheme);

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleSwitch.checked = true;
        document.body.classList.add('dark-theme');
    }
});
