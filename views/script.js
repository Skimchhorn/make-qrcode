// document.querySelector("form").addEventListener("submit", function(event) {
//     event.preventDefault();  // Prevent the default form submission
  
//     const form = event.target;  // The form element
//     const url = form.querySelector("input[name='url']").value; 

//     fetch("/submit", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: `url=${url}`
//     })
//     .then(response => {
//       })
//     .then(data => {
//         document.querySelector(".header").textContent = data.newText;   // Log the response from the server
//     })
//     .catch(error => console.error("Error:", error));
//   });