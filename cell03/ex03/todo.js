const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

window.onload = function () {
    const savedData = getCookie('ft_list');
    if (savedData) {
        try {
            const todos = JSON.parse(savedData);
            for (let i = todos.length - 1; i >= 0; i--) {
                createTodoElement(todos[i]);
            }
        } catch (e) {
            console.error("Failed to parse cookie", e);
        }
    }
};

function saveTodos() {
    const todoDivs = ftList.querySelectorAll('div');
    const todos = [];
    todoDivs.forEach(div => {
        todos.push(div.textContent);
    });
    setCookie('ft_list', JSON.stringify(todos), 365);
}

function createTodoElement(text) {
    const div = document.createElement('div');
    div.textContent = text;

    div.addEventListener('click', function () {
        if (confirm('Do you want to remove this TO DO?')) {
            div.remove();
            saveTodos();
        }
    });

    ftList.insertBefore(div, ftList.firstChild);
}

newBtn.addEventListener('click', function () {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim() !== '') {
        createTodoElement(text.trim());
        saveTodos();
    }
});

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return '';
}
