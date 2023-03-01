const BASE_URL = window.location.origin;

const form = document.getElementById("form");
const loremInput = document.getElementById("lorem-input");
const loremButton = document.getElementById("lorem-button");

const bitcoinCZK = document.getElementById("bitcoin-czk");
const bitcoinEUR = document.getElementById("bitcoin-eur");
const bitcoinUSD = document.getElementById("bitcoin-usd");

const eurCZK = document.getElementById("eur-czk");
const usdCZK = document.getElementById("usd-czk");

const currencyURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1";

// Get latest bitcoin value in different currencies
document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(`${currencyURL}/latest/currencies/btc.min.json`);
  const data = await response.json();

  const {
    btc: { czk, usd, eur },
  } = data;

  bitcoinCZK.textContent = czk;
  bitcoinEUR.textContent = eur;
  bitcoinUSD.textContent = usd;
});

// EUR to CZK
document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(`${currencyURL}/latest/currencies/eur/czk.json`);
  const data = await response.json();
  const { czk } = data;

  eurCZK.textContent = czk;
});

// USD to CZK
document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(`${currencyURL}/latest/currencies/usd/czk.json`);
  const data = await response.json();
  const { czk } = data;

  usdCZK.textContent = czk;
});

// Lorem Ipsum
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  loremInput.textContent = "Text se generuje...";
  loremButton.disabled = true;

  const theme = document.getElementById("inputTheme").value;
  const sentences = document.getElementById("inputSentences").value;

  const response = await fetch(`${BASE_URL}/loremIpsum`, {
    method: "POST",
    body: JSON.stringify({
      theme,
      sentences,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
    const data = await response.json();
    loremInput.textContent = data;
    loremButton.disabled = false;
  } catch {
    loremInput.textContent = "Text se nepodařil vygenerovat";
    loremButton.disabled = false;
  }
});
