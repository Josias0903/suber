let button = document.getElementById("handleSubmit");
button.onclick = async function () {
    let title = document.getElementById("email").value;
    let data = { email };
    const response = await fetch('http://localhost:3008/api/store/suber', {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(data)
    });
    let content = await response.json();
    if (content.success) {
        alert("Sucesso");
    } else {
        alert('Nothing here but us, chickens');
    }
}