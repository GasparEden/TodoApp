const todos = [
    "Apprendre Laravel",
    "Faire le menage",
];

function render() {
    document.getElementById("todos").innerHTML = todos.map((v) => {
        return `<p class="w-full mb-2">${v}</p>`;
    }).join('');
}

render();