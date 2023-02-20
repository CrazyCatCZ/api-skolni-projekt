const localHost = "http://localhost:5000";
const form = document.getElementById("form");

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
  });

  const data = await response.json();
});
