let form = document.getElementById("myForm");
let amount = document.getElementById("amount");
let description = document.getElementById("description");
let options = document.getElementById("options");
let btn = document.getElementById("add");
let list = document.getElementById("list");

form.addEventListener("submit", addExpenses);

function addExpenses(e) {
  e.preventDefault();

  //?? for adding data we create li
  let li = document.createElement("li");
  li.className = "expenses";
  var userData = document.createTextNode(
    `${amount.value}-${options.value}-${description.value}`
  );
  li.appendChild(userData);

  //?? next we create buttons and add to it
  let dltBtn = document.createElement("button");
  dltBtn.className = "deleteData";
  dltBtn.appendChild(document.createTextNode("Delete Exepenses"));
  li.appendChild(dltBtn);
  let editBtn = document.createElement("button");
  editBtn.className = "editData";
  editBtn.appendChild(document.createTextNode("Edit Expenses"));
  li.appendChild(editBtn);

  //?? we append it to ul element
  list.appendChild(li);

  //?? i made description as unique and we store it in local stoarge
  let expenseAmount = amount.value;
  let expenseCategory = options.value;
  let expenseDescription = description.value;
  let input = {
    expenseAmount,
    expenseCategory,
    expenseDescription,
  };
  localStorage.setItem(input.expenseDescription, JSON.stringify(input));

  //??t when i delete something on click
  var parentEle = document.getElementById("list");
  dltBtn.onclick = () => {
    localStorage.removeItem(input.expenseDescription);
    parentEle.removeChild(li);
  };

  //?? when i want to edit something on click
  var parentEle = document.getElementById("list");
  editBtn.onclick = () => {
    amount.value = input.expenseAmount;
    description.value = input.expenseDescription;
    options.value = input.expenseCategory;
    localStorage.removeItem(input.expenseDescription);
    parentEle.removeChild(li);
  };

  //?? we have to empty the fierld again
  amount.value = "";
  description.value = "";
}
