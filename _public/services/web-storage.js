function saveData() {
    localStorage.setItem("data_name", inputField.value);
}

function retrieveData() {
    var data = localStorage.getItem("data_name");
}