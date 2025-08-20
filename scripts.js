document.addEventListener("DOMContentLoaded", () => {
  const commentBtn = document.getElementById("commentsBtn");
  const messageArea = document.getElementById("message-area");

  commentBtn.addEventListener("click", () => {
    // Clear old message if exists
    messageArea.innerHTML = "";

    // Create a new text field
    const field = document.createElement("div");
    field.className = "message-box";
    field.textContent = "You clicked comment button";

    // Append below buttons
    messageArea.appendChild(field);
  });
});
