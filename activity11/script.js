function pickRandomName() {
    const input = document.getElementById("nameInput").value;
    const names = input.split(/[\n,]+/).map(name => name.trim()).filter(name => name !== "");
    if (names.length === 0) {
        document.getElementById("infoDisplay").innerText ="";
        document.getElementById("nameDisplay").innerText = "Please enter atleast one name";
        return;
    }
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];

    document.getElementById("infoDisplay").innerHTML = `
    Total names entered: <strong>${names.length}</strong><br>
    Random Number picked: <strong>${randomIndex + 1}</strong>
    `;
    document.getElementById('nameDisplay').innerText = randomName;
}

function clearNames() {
    document.getElementById("nameInput").value = "";
    document.getElementById("infoDisplay").innerText = "";
    document.getElementById("nameDisplay").innerText = "";
}