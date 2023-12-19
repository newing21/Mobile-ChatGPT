document.addEventListener('DOMContentLoaded', function() {
  const queryInput = document.getElementById('query');
  const submitButton = document.getElementById('submit');
  const outputDiv = document.getElementById('output');
  const suggestionsDiv = document.getElementById('suggestions');

  submitButton.addEventListener('click', async () => {
    const query = queryInput.value.toLowerCase();
    let responseText = "";
    let suggestionsText = "";

    if (query.includes(" mobile") && query.includes("account")) {
      responseText = "To access your Mobile account, you can either download the My Mobile app, or go to mobile.com and click on the 'My Account' button in the top right corner. ";
      suggestionsText = "Some suggested account-related searches are: 'how to change my plan', 'how to check my  Mobile balance', and 'how to add a line to my  Mobile account'.";
    } else if (query.includes(" mobile") && (query.includes("phone activation") || query.includes("activate phone"))) {
      responseText = "To activate your  Mobile phone, you can either do it online at mobile.com/activate, or by calling  Mobile customer service at 1-888--4U. ";
      suggestionsText = "Some suggested activation-related searches are: 'how to activate my  Mobile phone without a SIM card', 'what to do if my  Mobile phone won't activate', and 'how long does it take to activate a  Mobile phone'.";
    } else if (query.includes(" mobile") && query.includes("troubleshooting")) {
      responseText = "If you're experiencing issues with your  Mobile device, a good place to start is by resetting it. You can also try updating your device software, or contacting  Mobile customer service at 1-888--4U for further assistance. ";
      suggestionsText = "Some suggested troubleshooting-related searches are: 'how to reset my  Mobile device', 'how to fix a  Mobile device that won't turn on', and 'how to troubleshoot  Mobile data connection issues'.";
    } else if (query.includes(" mobile") && query.includes("make a payment")) {
      responseText = "To make a payment on your  Mobile account, you can either do it online at mobile.com/payments, through the My  app, or by calling  Mobile customer service at 1-888--4U. ";
      suggestionsText = "Some suggested payment-related searches are: 'how to set up autopay on my  Mobile account', 'what to do if my  Mobile payment fails', and 'how to view my  Mobile payment history'.";
    } else {
      responseText = "I'm sorry, but I can only help with  Mobile specific questions. ";
      suggestionsText = "Some suggested  Mobile related searches are: 'how to contact  Mobile customer service', 'what  Mobile plans are available', and 'how to find a  Mobile store near me'.";
    }

    outputDiv.innerHTML = `<ul><li>${responseText}</li></ul>
                            <button id="copy">Copy Text</button>`;

    const copyButton = document.getElementById('copy');
    copyButton.addEventListener('click', () => {
      const textToCopy = outputDiv.innerText;
      navigator.clipboard.writeText(textToCopy);
    });

    suggestionsDiv.innerHTML = `<p>${suggestionsText}</p>`;
  });
});
