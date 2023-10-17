const btnPassword = document.querySelector("#btn-password");
const btnCreatePassword = document.querySelector("#btn-create");

const customizationPassword = document.querySelector("#custumization-password");
const successPassword = document.querySelector("#password-success");
const passwordGenerated = document.querySelector("#password-generated");

const inputChars = document.querySelector("#chars-quantity");
const inputLetters = document.querySelector("#letters");
const inputNumbers = document.querySelector("#numbers");
const inputSymbols = document.querySelector("#symbols");

const validNumbers = (txt) => {
  return txt.replace(/[^0-9]/, "");
};

const generateCharacter = (oneChecked, arr, arr2) => {
  let password = "";
  const charsNumbers = parseInt(inputChars.value);
  if (oneChecked) {
    for (let i = 0; i < charsNumbers; i++) {
      let random = Math.floor(Math.random() * (arr.length - 0) + 0);
      password += arr[random];
    }
  } else {
    for (let i = 0; i < charsNumbers; i++) {
      const charCorrect = arr.concat(arr2);
      let random = Math.floor(Math.random() * (charCorrect.length - 0) + 0);
      password += charCorrect[random];
    }
  }
  return password;
};

const generatePassword = (letters, numbers, symbols) => {
  const charactersAll =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_-=+";
  const charactersAllArr = charactersAll.split("");
  const charactersLetters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLettersArr = charactersLetters.split("");
  const charactersNumbers = "0123456789";
  const charactersNumbersArr = charactersNumbers.split("");
  const charactersSymbols = "!@#$%&*()_-=+";
  const charactersSymbolsArr = charactersSymbols.split("");

  let password = "";

  if (letters && !symbols && !numbers) {
    password = generateCharacter(true, charactersLettersArr, null);
  } else if (numbers && !symbols && !letters) {
    password = generateCharacter(true, charactersNumbersArr, null);
  } else if (symbols && !letters && !numbers) {
    password = generateCharacter(true, charactersSymbolsArr, null);
  } else if (letters && symbols && !numbers) {
    password = generateCharacter(false, charactersLettersArr, charactersSymbolsArr);
  } else if (letters && numbers && !symbols) {
    password = generateCharacter(false, charactersLettersArr, charactersNumbersArr);
  } else if (numbers && symbols && !letters) {
    password = generateCharacter(false, charactersNumbersArr, charactersSymbolsArr);
  } else {
    password = generateCharacter(true, charactersAllArr);
  }
  return password;
};

btnPassword.addEventListener("click", () => {
  customizationPassword.classList.remove("hide");
});

btnCreatePassword.addEventListener("click", () => {
  successPassword.classList.remove("hide");
  passwordGenerated.innerHTML = generatePassword(
    inputLetters.checked,
    inputNumbers.checked,
    inputSymbols.checked
  );
});

inputChars.addEventListener("input", (e) => {
  const updatedValue = validNumbers(e.target.value);
  e.target.value = updatedValue;

  if (updatedValue > 20) {
    e.target.value = 20;
  }
});
