function checkGender() {
    let gender = prompt("Please enter your gender: Male or Female").toLowerCase();
    if (gender === "female") {
        alert("You are a girl!👧🏽");
    } else if (gender === "male") {
        alert("You are a boy! 👦🏽");
    } else {
        alert("Wrong input. Please enter either 'Male' or 'Female'.");
    }
}
checkGender();
