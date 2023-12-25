function saveToLocal(event) {
  event.preventDefault();
  const amount = event.target.amount.value;
  const description = event.target.des.value;
  const category = event.target.cat.value;

  const object = {
    amount,
    description,
    category,
  };

  localStorage.setItem(object.category, JSON.stringify(object));
  show(object);
}

window.addEventListener("DOMContentLoaded", () => {
  const localStoreObjects = localStorage;
  const localStoreKeys = Object.keys(localStoreObjects);

  // loop through those keys
  for (let i = 0; i < localStoreKeys.length; i++) {
    const key = localStoreKeys[i];
    const detailString = localStoreObjects[key];
    const detailObj = JSON.parse(detailString);
    show(detailObj);
  }
});

// showing whatever we got in UI
function show(details) {
  const parent = document.getElementById("listhere");

  const child = `<li id=${details.category}> ${details.amount} - ${details.description}
    <button onclick=deleteUser('${details.category}')> Delete User </button>
  </li>`;
  parent.innerHTML += child;
}

function deleteUser(category) {
  localStorage.removeItem(category);
  removeFromScreen(category);
}

function removeFromScreen(category) {
  const parent = document.getElementById("listhere");
  const child = document.getElementById(category);
  if (child) {
    parent.removeChild(child);
  }
}
