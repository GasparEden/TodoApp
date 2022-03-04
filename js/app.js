var todos = [
    "Apprendre Laravel",
    "Faire le menage",
];
function render() {
    document.getElementById("todos").innerHTML = todos.map(function (v) {
        return "<p class=\"w-full mb-2\">".concat(v, "</p>");
    }).join('');
}
render();
