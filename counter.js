window.onload = function() {
    let counter = 0;
    const counterElement = document.getElementById('counter');
    const currentCount = parseInt(counterElement.textContent, 10) || 0;
    counterElement.textContent = currentCount + 1;
}
