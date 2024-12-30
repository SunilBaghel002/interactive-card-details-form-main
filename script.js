document.addEventListener("DOMContentLoaded", () => {

    const cardHolderName = document.querySelector(".card-holder-name")
    const cardHolder = document.querySelector(".card-holder")
    const cardNumber = document.querySelector(".card-number")
    const cardNumber2 = document.querySelector(".cardNumber2")
    const expMonths = document.querySelector(".exp-months")
    const expYears = document.querySelector(".exp-years")
    const cvcNumber = document.querySelector(".cvc-number")
    const getMonths = document.querySelector(".get-months")
    const getYears = document.querySelector(".get-years")
    const enterCvc = document.querySelector(".enter-cvc")
    const myForm = document.getElementById("myForm")
    const confirmBtn = document.querySelector(".confirmBtn")
    const formBox = document.querySelector(".form")
    const thanksElemrnt = document.querySelector(".thanks")
    const clickElement = document.querySelectorAll(".click")
    const errorMessage = document.querySelector(".error-message")
    const errorMessage1 = document.querySelector(".error-meessage1")
    const inputElement = document.querySelectorAll("input")

    cardHolderName.addEventListener('input', function () {
        cardHolder.innerText = this.value
    })

    cardNumber2.addEventListener('input', function () {
        cardNumber.innerText = this.value

        let value = cardNumber2.value.replace(/\s/g, '');

        cardNumber2.value = value.replace(/(.{4})(?=.)/g, '$1 ');

        if (/[^0-9\s]/.test(value)) {
            errorMessage.style.display = 'block';
            cardNumber2.classList.add("red")
        } else {
            errorMessage.style.display = 'none';
        }
    })

    getMonths.addEventListener('input', function () {
        expMonths.innerText = this.value
    })

    getYears.addEventListener('input', function () {
        expYears.innerText = this.value
    })

    enterCvc.addEventListener('input', function () {
        cvcNumber.innerText = this.value
    })

    // myForm.addEventListener('submit', (event) => {
    //     event.preventDefault()

    //     let allValid = true;
    //     const inputs = [cardHolderName, cardNumber2, getMonths, getYears, enterCvc];
    //     inputElement.forEach((input) => {
    //         if (input.value.trim() === '') {
    //             input.classList.add("red");
    //             errorMessage1.style.display = 'block';
    //             // errorMessage1.textContent = `${input.placeholder} cannot be empty!`;
    //             allValid = false;
    //             console.log(input)
    //         } else {
    //             input.classList.remove("red");
    //         }
    //     });

    //     if (allValid==true) {
    //         errorMessage1.style.display = 'none';
    //         console.log("Form is submitted!");
    //         thanksElemrnt.style.display="flex"
    //         formBox.style.display="none"
    //         // Perform further actions
    //     }
    // })
    // myForm.addEventListener('submit', (event) => {
    //     event.preventDefault();
    
    //     let allValid = true; // To track if all inputs are valid
    
    //     // Loop through each input field
    //     inputElement.forEach((input) => {
    //         const errorElement = input.nextElementSibling; // Assumes the error message is the next sibling
    //         if (input.value.trim() === '') {
    //             input.classList.add("red"); // Add error class to invalid input
    //             if (errorElement) {
    //                 errorElement.style.display = 'block'; // Show specific error message
    //                 errorElement.textContent = `Can't be blank`;
    //             }
    //             allValid = false; // Mark form as invalid
    //         } else {
    //             input.classList.remove("red"); // Remove error class if valid
    //             if (errorElement) {
    //                 errorElement.style.display = 'none'; // Hide specific error message
    //             }
    //             else{
    //                 thanksElemrnt.style.display="flex"
    //             }
    //         }
    //     });
    
    //     if (allValid) {
    //         // If all inputs are valid, show success message
    //         console.log("Form is submitted!");
    //         thanksElemrnt.style.display = "flex";
    //         formBox.style.display = "none";
    //     }
    // });

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        let allValid = true; // To track if all inputs are valid
    
        inputElement.forEach((input) => {
            const errorElement = input.nextElementSibling; // Assumes the error message is the next sibling
            const inputValue = input.value.trim();
    
            if (input === getMonths) {
                // Validate month input
                if (isNaN(inputValue) || inputValue < 1 || inputValue > 12) {
                    input.classList.add("red");
                    if (errorElement) {
                        errorElement.style.display = 'block';
                        errorElement.textContent = `Please enter a valid month (1-12).`;
                    }
                    allValid = false;
                } else {
                    input.classList.remove("red");
                    if (errorElement) {
                        errorElement.style.display = 'none';
                    }
                }
            } else if (input === getYears) {
                // Validate year input
                if (isNaN(inputValue) || inputValue < 1951 || inputValue > 2024) {
                    input.classList.add("red");
                    if (errorElement) {
                        errorElement.style.display = 'block';
                        errorElement.textContent = `Please enter a valid year (1951-2024).`;
                    }
                    allValid = false;
                } else {
                    input.classList.remove("red");
                    if (errorElement) {
                        errorElement.style.display = 'none';
                    }
                }
            } else if (inputValue === '') {
                // Generic validation for empty inputs
                input.classList.add("red");
                if (errorElement) {
                    errorElement.style.display = 'block';
                    errorElement.textContent = `Can't be blank`;
                }
                allValid = false;
            } else {
                input.classList.remove("red");
                if (errorElement) {
                    errorElement.style.display = 'none';
                }
            }
        });
    
        if (allValid) {
            // If all inputs are valid, show success message
            console.log("Form is submitted!");
            thanksElemrnt.style.display = "flex";
            formBox.style.display = "none";
        }
    });
    
    


    // const inputElements = [nameInput, emailInput, phoneNumberInput];
    clickElement.forEach((input) => {
        input.addEventListener("focus", () => {
            input.classList.add("onClick");
        });

        input.addEventListener("blur", () => {
            input.classList.remove("onClick");
        });
    });

})