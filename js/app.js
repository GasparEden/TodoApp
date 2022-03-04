var todos = [
    {
        id: 1,
        name: "Apprendre Laravel"
    },
    {
        id: 2,
        name: "Faire le menage"
    },
];
var idIncrement = 3;
var state = "all";
var checked = [];
var input = document.querySelector('input');
var btns = document.querySelectorAll('#btns > button');
var render = function () {
    document.getElementById("todos").innerHTML = todos.map(function (v, idx) {
        if (state == "all") {
            return "<p class=\"w-full mb-2\"><input ".concat(checked.includes(v['id']) ? "checked " : "", "onchange=\"editTodo(this, ").concat(v['id'], ")\" type=\"checkbox\" class=\"mr-2\" />").concat(v['name'], "<svg onclick=\"removeTodo(").concat(v['id'], ")\" class=\"ml-2 inline-block cursor-pointer\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" fill=\"#ff0000\" height=15><path d=\"M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z\"/></svg></p>");
        }
        else if (state == "todo") {
            if (!checked.includes(v['id'])) {
                return "<p class=\"w-full mb-2\"><input onchange=\"editTodo(this, ".concat(v['id'], ")\" type=\"checkbox\" class=\"mr-2\" />").concat(v['name'], "<svg onclick=\"removeTodo(").concat(v['id'], ")\" class=\"ml-2 inline-block cursor-pointer\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" fill=\"#ff0000\" height=15><path d=\"M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z\"/></svg></p>");
            }
        }
        else if (state == "done") {
            if (checked.includes(v['id'])) {
                return "<p class=\"w-full mb-2\"><input checked onchange=\"editTodo(this, ".concat(v['id'], ")\" type=\"checkbox\" class=\"mr-2\" />").concat(v['name'], "<svg onclick=\"removeTodo(").concat(v['id'], ")\" class=\"ml-2 inline-block cursor-pointer\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" fill=\"#ff0000\" height=15><path d=\"M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z\"/></svg></p>");
            }
        }
    }).join('');
};
var addTodo = function () {
    todos.push({
        id: idIncrement,
        name: input.value
    });
    idIncrement++;
    input.value = "";
    render();
};
var removeTodo = function (id) {
    todos.splice(todos.indexOf(todos.find(function (i) { return i['id'] == id; })), 1);
    render();
};
var editTodo = function (elem, index) {
    if (elem.checked) {
        checked.push(index);
    }
    else {
        checked.splice(checked.indexOf(index), 1);
    }
    render();
};
document.querySelector('#btn-add').addEventListener('click', function (evt) {
    addTodo();
});
input.addEventListener('keyup', function (evt) {
    if (evt.key == "Enter") {
        addTodo();
    }
});
btns.forEach(function (elem) {
    elem.addEventListener('click', function (evt) {
        console.log('ref');
        btns.forEach(function (e) {
            e.classList.remove('bg-slate-500');
            e.classList.add('bg-slate-700');
        });
        elem.classList.remove('bg-slate-700');
        elem.classList.add('bg-slate-500');
        state = elem.getAttribute('data-state');
        render();
    });
});
render();
