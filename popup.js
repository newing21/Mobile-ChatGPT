document.addEventListener('DOMContentLoaded', function() {
  const queryInput = document.getElementById('query');
  const submitButton = document.getElementById('submit');
  const outputDiv = document.getElementById('output');
  const suggestionsDiv = document.getElementById('suggestions');

  submitButton.addEventListener('click', async () => {
    const query = queryInput.value;
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'xxxxxxx'
      },
      body: JSON.stringify({
        "model": "text-davinci-002",
        "prompt": query,
        "temperature": 0.7,
        "max_tokens": 256,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
      })
    });

    const data = await response.json();
    const answer = data.choices[0].text;
    outputDiv.innerHTML = `<ul><li>${answer}</li></ul>
                            <button id="copy">Copy Text</button>`;

    const copyButton = document.getElementById('copy');
    copyButton.addEventListener('click', () => {
      const textToCopy = outputDiv.innerText;
      navigator.clipboard.writeText(textToCopy);
    });

    const suggestionsResponse = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bxxxxx'
      },
      body: JSON.stringify({
        "model": "text-davinci-002",
        "prompt": `Suggested searches for "${query}"`,
        "temperature": 0.5,
        "max_tokens": 32,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "stop": ["\n"]
      })
    });

    const suggestionsData = await suggestionsResponse.json();
    const suggestions = suggestionsData.choices[0].text.split(';');

    suggestionsDiv.innerHTML = `<p>Suggested searches:</p><ul>`;
    suggestions.forEach(suggestion => {
      suggestionsDiv.innerHTML += `<li>${suggestion.trim()}</li>`;
    });
    suggestionsDiv.innerHTML += `</ul>`;
  });
});
