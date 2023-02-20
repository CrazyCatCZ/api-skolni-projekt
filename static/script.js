const localHost = "http://localhost:5000";
const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch(`${localHost}/loremIpsum`, {
    method: "POST",
    body: JSON.stringify({
      test: "test",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
});
