export function showToast(message, type) {
    const container = document.getElementById(`toast-container-${type}`);
    const duration = 2500
    const toast = document.createElement('div');
    toast.className = `toast-${type}`;
    toast.textContent = message;

    container.appendChild(toast);


    setTimeout(() => {
        toast.classList.add('show');
    }, 100); 

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => container.removeChild(toast), 500); // espera a la transición
    }, duration);
}
