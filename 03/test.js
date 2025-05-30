const form = document.querySelector("#googleForm");
const user = document.querySelector("#username");
const mail = document.querySelector("#email");
const message = document.querySelector("#message");
const messageList = document.querySelector("#messageList");

let submittedMessages = [];

function renderMessages() {
  messageList.innerHTML = "";

  submittedMessages.forEach((message, i) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `
        <strong>${message.user} (${message.mail})</strong><br>
        ${message.message}
      `;

    const delbtn = document.createElement("button");
    delbtn.classList.add("btn", "btn-sm", "float-end");
    delbtn.innerText = "❌";
    delbtn.addEventListener("click", () => {
      handleDelete(i);
    });

    li.appendChild(delbtn);
    messageList.appendChild(li);
  });
}

function handleDelete(i) {
  submittedMessages.splice(i, 1);
  renderMessages();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (user.value && mail.value && message.value) {
    const submittedMessage = {
      user: user.value,
      mail: mail.value,
      message: message.value,
    };

    submittedMessages = [...submittedMessages, submittedMessage];

    renderMessages();

    user.value = "";
    mail.value = "";
    message.value = "";
  } else {
    alert("모든 항목에 입력해주세요!");
  }
});

function clearForm() {
  messageList.innerHTML = "";
}