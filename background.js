const apiKey = "xxxxx";
const apiUrl = "https://api.openai.com/v1/your-api-endpoint";

fetch(apiUrl, {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    // Your request payload here
  })
})
  .then(response => response.json())
  .then(data => {
    // Handle the API response here
  })
  .catch(error => {
    // Handle errors here
  });
