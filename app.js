const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevents the page from reloading after an event has taken place
    const text = input.value;
    input.value = '';
    const li = document.createElement('li');
    li.textContent = text;
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
});

ul.addEventListener('change', (event) => {
    //console.log(event.target.checked);
    const checkbox = event.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;
    if (checked) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }
});