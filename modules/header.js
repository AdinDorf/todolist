export function createNavBar(baseNode) {

    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");

    const navButtons = document.createElement("div");
    const addButton = document.createElement("button")
    addButton.setAttribute("id", "addButton");
    addButton.textContent = "Add";
    const exportButton = document.createElement("button");
    exportButton.setAttribute("id", "exportButton");
    exportButton.textContent = "Export";
    const importButton = document.createElement("button");
    importButton.setAttribute("id", "importButton");
    importButton.textContent = "Import";

    const title = document.createElement("label");
    title.classList.add("title");


    baseNode.appendChild(navbar);
    navbar.appendChild(navButtons);
    navButtons.appendChild(addButton);
    navButtons.appendChild(exportButton);
    navButtons.appendChild(importButton);
    navbar.appendChild(title);

}