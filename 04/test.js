document.addEventListener("DOMContentLoaded", () => {
  const addUserBtn = document.querySelector(".addUser");
  const closeBtns = document.querySelectorAll(".closeBtn");
  const modalElement = document.getElementById("addUserModal");
  const modal = new bootstrap.Modal(modalElement);

  function handleAddUserBtn() {
    modal.show();
  }

  function handleCloseAddUserBtn() {
    modal.hide();
  }

  addUserBtn.addEventListener("click", handleAddUserBtn);
  closeBtns.forEach(btn => {
    btn.addEventListener("click", handleCloseAddUserBtn);
  });

  const addUserForm = document.querySelector(".addUserForm");
  const userName = document.getElementById("userName");
  const userMail = document.getElementById("userMail");
  const userList = document.querySelector(".userList");
  const ttlUser = document.querySelector(".ttlUser");
  const activeUser = document.querySelector(".activeUser");

  let users = [];

  function renderUsers()
  {
    userList.innerHTML = "";

    if(users.length === 0)
    {
      userList.innerHTML = `<p class="mb-0">사용자가 없습니다.</p>`;
      return;
    }

    const ul = document.createElement("ul");
    ul.classList.add("list-group");

    users.forEach((user, i) => {
      const li = document.createElement("li");
      li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
  
      const info = document.createElement("div");
      info.innerHTML = `<strong>${user.name}</strong> <span>[${user.mail}]</span>`;
  
      li.appendChild(info);
      ul.appendChild(li);
    });

    userList.appendChild(ul);
    console.log(users);
    
    ttlUser.innerText = `${users.length}`;
    activeUser.innerText = `${users.filter(user => user.mail !== false).length}`;
  }

  function handleAddUser(e)
  {
    e.preventDefault();

    if(userName.value && userMail.value) {
      const addedUser = {
        name: userName.value,
        mail: userMail.value
      }

      users = [...users, addedUser];
      renderUsers();

      userName.value = "";
      userMail.value = "";
      handleCloseAddUserBtn();
    } else {
      alert("모든 항목을 입력해주세요!");
    }
  }

  addUserForm.addEventListener("submit", handleAddUser)

  renderUsers();
});
