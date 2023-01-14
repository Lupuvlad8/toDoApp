var saveButton = document.getElementsByClassName("form-button-save")[0];
var clearButton = document.getElementsByClassName("form-button-clear")[0];
let listId = 0;


function saveForm() {
    const inputTitle = document.getElementsByClassName("form-input")[0].value;
    const inputDescription = document.getElementsByClassName("form-description")[0].value;

    if (inputTitle.length > 0 && inputDescription.length > 0) {

        const listContainer = document.getElementsByClassName("list-container")[0];
        const list = document.createElement("li");
        const title = document.createElement("p")
        const titleText = document.createElement("span");
        const deleteButton = document.createElement("button");
        const description = document.createElement("p")

        list.setAttribute("class", "list-item");
        list.setAttribute("id", `parent${listId}`);
        title.setAttribute("class", "title");
        titleText.setAttribute("class", "title-text");
        deleteButton.setAttribute("class", "delete");
        deleteButton.setAttribute("title", "Delete");
        description.setAttribute("class", "description");
        deleteButton.setAttribute("id", listId);

        deleteButton.addEventListener("click", function() {
            deleteList(this.id)
        }, false);

        const titleTexts = document.createTextNode(inputTitle);
        const deleteTexts = document.createTextNode("X");
        const descriptionTexts = document.createTextNode(inputDescription);

        titleText.appendChild(titleTexts);
        deleteButton.appendChild(deleteTexts);
        description.appendChild(descriptionTexts);

        deleteButton.addEventListener("click", function(){
            deleteList(this.id);
        }, false);

        title.append(titleText, deleteButton);
        list.append(title, description);

        listContainer.appendChild(list);
        listId++;
        }

    else {
        alert('Input fields cannot be empty.')
    }
}

function clearForm() {
    const inputTitle = document.getElementsByClassName("form-input")[0].value = "";
    const inputDescription = document.getElementsByClassName("form-description")[0].value = "";
}


function deleteList(listId) {
    document.getElementById(`parent${listId}`).remove();
}

saveButton.addEventListener("click", saveForm);
clearButton.addEventListener("click", clearForm);
