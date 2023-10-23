// Select all the labels on the page
const labels = document.querySelectorAll('label');

// Iterate through each label and apply the code
labels.forEach(label => {
  label.innerHTML = label.innerText.split('').map((letters, i) => `<span style="transition-delay:${i*100}ms">${letters}</span>`).join('');
});