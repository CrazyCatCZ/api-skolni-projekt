const localHost = "http://localhost:5000";
const form = document.getElementById("form");

const bitcoinCZK = document.getElementById("bitcoin-czk"); 
const bitcoinEUR = document.getElementById("bitcoin-eur"); 
const bitcoinUSD = document.getElementById("bitcoin-usd"); 

const eurCZK = document.getElementById("eur-czk"); 
const usdCZK = document.getElementById("usd-czk"); 

const currencyURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1'

// Get latest bitcoin value in different currencies
document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(`${currencyURL}/latest/currencies/btc.min.json`)
  const data = await response.json()

  const { btc: { czk, usd, eur } } = data

  bitcoinCZK.textContent = czk
  bitcoinEUR.textContent = eur
  bitcoinUSD.textContent = usd
});

// EUR to CZK
document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(`${currencyURL}/latest/currencies/eur/czk.json`)
  const data = await response.json()
  const { czk } = data

  eurCZK.textContent = czk
})

// USD to CZK
document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(`${currencyURL}/latest/currencies/usd/czk.json`)
  const data = await response.json()
  const { czk } = data

  usdCZK.textContent = czk
})

// Lorem Ipsum
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const theme = document.getElementById("inputTheme").value;
  const sentences = document.getElementById("inputSentences").value;

  const response = await fetch(`${localHost}/loremIpsum`, {
    method: "POST",
    body: JSON.stringify({
      theme,
      sentences,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json();
});

