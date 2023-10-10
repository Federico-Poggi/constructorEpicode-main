const form = document.getElementById("formId");
const nameF = document.getElementsByName("firstN");
const lastName = document.getElementById("lastName");
const userMail = document.getElementById("email");
const btn = document.getElementById("btnSub");
const newArr = {
  name: "",
  surname: "",
  email: "",
};

btn.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameUser = nameF.value;
  console.log(newArr);
  const newObj = {
    name: nameUser,
  };
  console.log(newObj);
  return newObj;
});
