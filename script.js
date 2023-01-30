const body = document.body;
const div_main = document.createElement('div');
const div_form = document.createElement('div');
const form = document.createElement('form');
const div_title = document.createElement('div');
const input = document.createElement('input');
const btn = document.createElement('button');
const ul = document.createElement('ul');
const complited = document.createElement('span');
const total = document.createElement('span');
let i = 0;
let j = 0;

div_main.className = 'main';
div_form.className = 'div_form';
div_title.className = 'ToDoTitle';
form.className = 'add';
input.className = 'adding__input'
btn.className = 'btn'
total.className = 'total'
complited.className = 'complited'
input.placeholder = 'Add a task';
div_title.textContent = 'ToDoList';
btn.textContent = 'add';

body.append(div_main);
div_main.append(div_form);
div_form.append(form);
div_main.prepend(div_title);
form.append(input);
form.append(btn);
div_main.append(ul);

body.style.backgroundImage = 'url("дерево_темный.jpg")';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.marginTop = '10%';
div_form.style.width = '100%';
div_form.style.marginBottom = '5%';
form.style.display = 'flex';
form.style.justifyContent = 'center';
// div_main.style.background = 'green'
div_main.style.borderRadius = '10px';
div_main.style.width = '40%';
div_main.style.height = '27em';
div_main.style.flexDirection = 'column';
div_main.style.display = 'flex';
div_main.style.justifyContent = 'start';
div_main.style.alignItems = 'center';
div_title.style.display = 'flex';
div_title.style.justifyContent = 'center';
div_title.style.alignItems = 'center';
div_title.style.fontSize = '50px';
div_title.style.color = 'white';
div_title.style.margin = '40px';
complited.style.color = 'white';
complited.style.marginLeft = '5%';
total.style.color = 'white';
total.style.marginLeft = '5%';
input.style.width = '70%';
input.style.height = '30px';
input.style.margin = '10px 0px 10px 0px';
input.style.borderRadius = '10px 0px 0px 10px';
input.style.border = '0px';
input.style.padding = '0px 0px 0px 10px';
btn.style.background = 'grey';
btn.style.fontSize = '120%';
btn.style.width = '20%';
btn.style.height = '30px';
btn.style.marginTop = '10px';
btn.style.borderRadius = '0px 10px 10px 0px';
btn.style.border = '0px';
ul.style.width = '80%';
ul.style.padding = '0';
ul.style.color = 'white';
ul.style.overflow = 'auto';

form.addEventListener(('submit'), (e) => {
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.margin = '15px';
    li.style.fontSize = '16px';
    const checkbox = document.createElement('input');
    const btn_delete = document.createElement('button');

    checkbox.type = 'checkbox';
    e.preventDefault();
    if (input.value) {
        li.textContent = input.value;
        input.value = '';
        i++;
        ul.append(li);
        li.prepend(checkbox);
        li.append(btn_delete);
        div_form.prepend(complited);
        div_form.prepend(total);
        total.textContent = `Total: ${i}`;

        btn_delete.textContent = 'x';
        checkbox.addEventListener(('click'), () => {
            if (checkbox.checked) {
                j++;
                li.style.color = 'grey';
                complited.textContent = `Complited: ${j}`;
            } else {
                li.style.color = 'white';
                j--;
                complited.textContent = `Complited: ${j}`;
            }
        });
        btn_delete.addEventListener(('click'), (e) => {
            e.target.parentElement.remove();
            i--;
            total.textContent = `Total: ${i}`;
            if (checkbox.checked) {
                j--;
                complited.textContent = `Complited: ${j}`;
            }
        });
    };
});