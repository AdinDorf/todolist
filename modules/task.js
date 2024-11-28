export function createTask(baseNode) {
    const prioDiv = document.createElement("div");
    prioDiv.classList.add(prioDiv);

    const prioInput = document.createElement("input");
    prioInput.setAttribute("type", "number");

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "deleteButton");

    const textDiv = document.createElement("div");
    
    const noteTitle = document.createElement("h1");
    const noteContent = document.createElement("p");

    const completeButton = document.createElement("button");
    completeButton.setAttribute("id", "completeButton");

    baseNode.appendChild(prioDiv);
    prioDiv.appendChild(prioInput);
    prioDiv.appendChild(deleteButton);
    baseNode.appendChild(textDiv);
    textDiv.appendChild(noteTitle);
    textDiv.appendChild(noteContent);
    baseNode.appendChild(completeButton);

}