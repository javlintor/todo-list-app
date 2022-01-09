const form = document.querySelector("#new-task-form")
const input = document.querySelector("#new-task-text")
const task_list = document.querySelector(".task-list")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    task = input.value;

    if (task === "") {
        alert("Por favor, introduzca alguna tarea.");
        return false;
    }  

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const content_el = document.createElement("div");
    content_el.classList.add("content");

    const text_input_el = document.createElement("input");
    text_input_el.classList.add("task-content");
    text_input_el.value = task;
    text_input_el.type = "text";
    text_input_el.setAttribute("readonly", "readonly");

    content_el.appendChild(text_input_el);

    const actions_el = document.createElement("div");
    actions_el.classList.add("actions");
    
    const edit_save_button = document.createElement("button");
    edit_save_button.classList.add("edit-button");
    edit_save_button.dataset.type = "edit";

    const edit_icon = document.createElement("span");
    edit_icon.classList.add("iconify");
    edit_icon.dataset.icon = "uil:edit-alt";

    const save_icon = document.createElement("span");
    save_icon.classList.add("iconify");
    save_icon.dataset.icon = "ant-design:save-outlined";

    edit_save_button.appendChild(edit_icon);
    
    const del_button = document.createElement("button");
    del_button.classList.add("delete-button");
    
    const del_icon = document.createElement("span");
    del_icon.classList.add("iconify");
    del_icon.dataset.icon = "akar-icons:trash-bin";
    del_button.appendChild(del_icon);

    actions_el.appendChild(edit_save_button);
    actions_el.appendChild(del_button);

    task_el.appendChild(content_el);
    task_el.appendChild(actions_el);
    
    task_list.appendChild(task_el);

    input.value = '';

    edit_save_button.addEventListener("click", () => {

        if (edit_save_button.dataset.type === "edit") {
            console.log("cliked edit");
            edit_save_button.innerHTML = "";
            edit_save_button.appendChild(save_icon);
            edit_save_button.classList.remove("edit-button");
            edit_save_button.classList.add("save-button");
            edit_save_button.dataset.type = "save";
            text_input_el.removeAttribute("readonly");
            text_input_el.classList.add("edit-text");
            text_input_el.focus();
        } else {
            console.log("cliked save");
            edit_save_button.classList.remove("save-button");
            edit_save_button.classList.add("edit-button");
            edit_save_button.innerHTML = "";
            edit_save_button.appendChild(edit_icon);
            edit_save_button.dataset.type = "edit";
            text_input_el.setAttribute("readonly", "readonly");
            text_input_el.classList.remove("edit-text");
        }
    });

    del_button.addEventListener("click", () => {
        task_list.removeChild(task_el)
    });

})

