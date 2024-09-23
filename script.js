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



// Noakhali donation section js start

document.getElementById("noakhali-btn").addEventListener("click", function () {
  const myAmount = idCallText("my-amount");
  const noakhaliAmount = idCallText("noakhali-amount");
  const noakhaliInput = inputIdCall("noakhali-input");

  // my money amount validation for 0 or less and empty input filed validation

  if(document.getElementById("noakhali-input").value === "" || myAmount === 0 || document.getElementById("noakhali-input").value > myAmount) {
    alert("Oppss...You can not donate money!");
    const filedReset = document.getElementById('noakhali-input').value = '';
    return filedReset;
  };

  // donation amount addjs
  const noakhaliAmountTotal = (noakhaliAmount + noakhaliInput).toFixed(2);
  const noakhaliNewAmount = document.getElementById("noakhali-amount");
  noakhaliNewAmount.innerText = noakhaliAmountTotal;

  // my new amount add js
  const myAmountTotal = (myAmount - noakhaliInput).toFixed(2);
  const myNewAmount = document.getElementById("my-amount");
  myNewAmount.innerText = myAmountTotal;


  // history addition js
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

  // modal show js
  document.getElementById('my_modal_1').showModal();

  // input filed reempty js
  document.getElementById("noakhali-input").value = "";

});


// input filed validation for noakhali
document
  .getElementById("noakhali-input")
  .addEventListener("keyup", function () {
    const noakhaliInputValue = document.getElementById("noakhali-input").value;

    if (noakhaliInputValue <= 0 || isNaN(noakhaliInputValue) === true) {
      alert("Wrong Input! Please Enter Valid Number.");
      document.getElementById("noakhali-input").value = "";
      return;
    }
  });

// Noakhali donation section js end



// feni donation section js start

document.getElementById("feni-btn").addEventListener("click", function () {
  const myAmount = idCallText("my-amount");
  const feniAmount = idCallText("feni-amount");
  const feniInput = inputIdCall("feni-input");

  // my money amount validation for 0 or less and empty input filed validation

  if (document.getElementById("feni-input").value === "" || myAmount === 0 || document.getElementById("feni-input").value > myAmount) {
    alert("Oppss...You can not donate money!");
    const filedReset = document.getElementById('feni-input').value = '';
    return filedReset;
 };

//  feni new donate amount addition js
  const feniAmountTotal = (feniAmount + feniInput).toFixed(2);
  const feniNewAmount = document.getElementById("feni-amount");
  feniNewAmount.innerText = feniAmountTotal;


//  mey new amount addition js
  const myAmountTotal = (myAmount - feniInput).toFixed(2);
  const myNewAmount = document.getElementById("my-amount");
  myNewAmount.innerText = myAmountTotal;
  

  // history addition js
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

  // modal show js
  document.getElementById('my_modal_1').showModal();

  // input filed reempty js
  document.getElementById("feni-input").value = "";
});

  // feni input filed validation

  document
  .getElementById("feni-input")
  .addEventListener("keyup", function () {
    const feniInputValue = document.getElementById("feni-input").value;

    if (feniInputValue <= 0 || isNaN(feniInputValue) === true) {
      alert("Wrong Input! Please Enter Valid Number.");
      document.getElementById("feni-input").value = "";
      return;
    }
  });

// feni donation section js end



// Qouta donation section js start

document.getElementById("qouta-btn").addEventListener("click", function () {
  const myAmount = idCallText("my-amount");
  const qoutaAmount = idCallText("qouta-amount");
  const qoutaInput = inputIdCall("qouta-input");

// my money amount validation for 0 or less and empty input filed validation

  if (document.getElementById("qouta-input").value === "" || myAmount === 0 || document.getElementById("qouta-input").value > myAmount) {
    alert("Oppss...You can not donate money!");
    const filedReset = document.getElementById('qouta-input').value = '';
    return filedReset;
 };


//  qouta new donate amount addition js
  const qoutaAmountTotal = (qoutaAmount + qoutaInput).toFixed(2);
  const qoutaNewAmount = document.getElementById("qouta-amount");
  qoutaNewAmount.innerText = qoutaAmountTotal;


//  my new amount addition js  
  const myAmountTotal = (myAmount - qoutaInput).toFixed(2);
  const myNewAmount = document.getElementById("my-amount");
  myNewAmount.innerText = myAmountTotal;

// history addition js
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

  // modal show js
  document.getElementById('my_modal_1').showModal();

 // input filed reempty js  
  document.getElementById("qouta-input").value = "";
});

   // quota input filed validation

   document
   .getElementById("qouta-input")
   .addEventListener("keyup", function () {
     const qoutaInputValue = document.getElementById("qouta-input").value;
 
     if (qoutaInputValue <= 0 || isNaN(qoutaInputValue) === true) {
       alert("Wrong Input! Please Enter Valid Number.");
       document.getElementById("qouta-input").value = "";
       return;
     }
   });


// qouta donation section js end

