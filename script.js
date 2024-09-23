//  text id caller fuction

function idCallText(id) {
  const idValueNum = parseFloat(document.getElementById(id).innerText);
  return idValueNum;
};

// input id caller function
function inputIdCall(id) {
  const inputValueNum = parseFloat(document.getElementById(id).value);
  return inputValueNum;
};

// button change js

document.getElementById("history-btn").addEventListener("click", function () {
  document
    .getElementById("donation-btn")
    .classList.remove("hover:bg-btnColor", "bg-btnColor");
  document
    .getElementById("history-btn")
    .classList.remove("border-gray-600", "hover:bg-white", "bg-white");
  document
    .getElementById("history-btn")
    .classList.add("hover:bg-btnColor", "bg-btnColor");

  document.getElementById("history-sec").classList.remove("hidden");
  document.getElementById("donation-sec").classList.add("hidden");
});

document.getElementById("donation-btn").addEventListener("click", function () {
  document
    .getElementById("donation-btn")
    .classList.add("hover:bg-btnColor", "bg-btnColor");
  document
    .getElementById("history-btn")
    .classList.add("border-gray-600", "hover:bg-white", "bg-white");
  document
    .getElementById("history-btn")
    .classList.remove("hover:bg-btnColor", "bg-btnColor");

  document.getElementById("donation-sec").classList.remove("hidden");
  document.getElementById("history-sec").classList.add("hidden");
});

// Noakhali donation section js

document.getElementById("noakhali-btn").addEventListener("click", function () {
  const myAmount = idCallText("my-amount");
  const noakhaliAmount = idCallText("noakhali-amount");
  const noakhaliInput = inputIdCall("noakhali-input");

  if (document.getElementById("noakhali-input").value === "") {
    alert("Empty Input filed");
    return;
  }

  const noakhaliAmountTotal = noakhaliAmount + noakhaliInput;
  const noakhaliNewAmount = document.getElementById("noakhali-amount");
  noakhaliNewAmount.innerText = noakhaliAmountTotal;

  const myAmountTotal = myAmount - noakhaliInput;
  const myNewAmount = document.getElementById("my-amount");
  myNewAmount.innerText = myAmountTotal;

  const localtime = new Date();
  const div = document.createElement("div");
  div.classList.add(
    "border",
    "border-gray-300",
    "w-full",
    "p-4",
    "mb-3",
    "rounded-lg"
  );
  div.innerHTML = `
        <h2 class="font-bold text-primary text-xl mb-3">${noakhaliInput} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h2>
        <p class="font-semibold text-base">Date : ${localtime}.</p>
  `;
  document.getElementById("history-sec").appendChild(div);

  document.getElementById("noakhali-input").value = "";

});

// feni donation section js

document.getElementById("feni-btn").addEventListener("click", function () {
  const myAmount = idCallText("my-amount");
  const feniAmount = idCallText("feni-amount");
  const feniInput = inputIdCall("feni-input");

  if (document.getElementById("feni-input").value === "") {
    alert("Empty Input filed");
    return;
  }

  const feniAmountTotal = feniAmount + feniInput;
  const feniNewAmount = document.getElementById("feni-amount");
  feniNewAmount.innerText = feniAmountTotal;

  const myAmountTotal = myAmount - feniInput;
  const myNewAmount = document.getElementById("my-amount");
  myNewAmount.innerText = myAmountTotal;
  
  const localtime = new Date();
  const div = document.createElement("div");
  div.classList.add(
    "border",
    "border-gray-300",
    "w-full",
    "p-4",
    "mb-3",
    "rounded-lg"
  );
  div.innerHTML = `
        <h2 class="font-bold text-primary text-xl mb-3">${feniInput} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
        <p class="font-semibold text-base">Date : ${localtime}.</p>
  `;
  document.getElementById("history-sec").appendChild(div);

  document.getElementById("feni-input").value = "";
});

// Qouta donation section js

document.getElementById("qouta-btn").addEventListener("click", function () {
  const myAmount = idCallText("my-amount");
  const qoutaAmount = idCallText("qouta-amount");
  const qoutaInput = inputIdCall("qouta-input");

  if (document.getElementById("qouta-input").value === "") {
    alert("Empty Input filed");
    return;
  }

  const qoutaAmountTotal = qoutaAmount + qoutaInput;
  const qoutaNewAmount = document.getElementById("qouta-amount");
  qoutaNewAmount.innerText = qoutaAmountTotal;

  const myAmountTotal = myAmount - qoutaInput;
  const myNewAmount = document.getElementById("my-amount");
  myNewAmount.innerText = myAmountTotal;

  const localtime = new Date();
  const div = document.createElement("div");
  div.classList.add(
    "border",
    "border-gray-300",
    "w-full",
    "p-4",
    "mb-3",
    "rounded-lg"
  );
  div.innerHTML = `
        <h2 class="font-bold text-primary text-xl mb-3">${qoutaInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
        <p class="font-semibold text-base">Date : ${localtime}.</p>
  `;
  document.getElementById("history-sec").appendChild(div);

  document.getElementById("qouta-input").value = "";
});

// input filed validation for no
document
  .getElementById("noakhali-input")
  .addEventListener("keyup", function () {
    const noakhaliInput = inputIdCall("noakhali-input");
    const noakhaliInputValue = document.getElementById("noakhali-input").value;

    if (noakhaliInput <= 0) {
      alert("Wrong Input! Please Enter Valid Number.");
      document.getElementById("noakhali-input").value = "";
      return;
    }
  });
