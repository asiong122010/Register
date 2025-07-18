function goToOtherPage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();
  const date = document.getElementById("date").value;

  if (name && password && date) {

    setTimeout(() => {
      window.location.href = "Profile.html";
    }, 2000); 
  } else {
    alert("Please fill in all fields!");
  }
  window.alert(`Name: ${name} Hello!.`)
}