let person = {
    firstName: "",
    lastName: "",
    getFullName: function () { return `${this.firstName} ${this.lastName}` }
}



document.getElementById("firstName").addEventListener('keypress', (e) => {
    person.firstName = e.target.value;
    changeUiValues();
})
document.getElementById("firstName").addEventListener('change', (e) => {
    person.firstName = e.target.value;
    changeUiValues();
})

document.getElementById("lastName").addEventListener('keypress', (e) => {
    person.lastName = e.target.value;
    changeUiValues();
})
document.getElementById("lastName").addEventListener('change', (e) => {
    person.lastName = e.target.value;
    changeUiValues();
})
function changeUiValues() {
    document.getElementById("firstName").value = person.firstName;
    document.getElementById("firstName2").value = person.firstName;
    document.getElementById("lastName").value = person.lastName;
    document.getElementById("lastName2").value = person.lastName;
    document.getElementById("fullName").innerText = person.getFullName();
    document.getElementById("fullName2").innerText = person.getFullName();
}