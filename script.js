/* Accessing the html elements */
var userBirthdate = document.querySelector("#birthdate");
/* 
    Splitting the calender to the latest date ".toISOString()" this method converts the Date object into the string and ".split("T")[0]" this method splitting the Date object into just Years Months and Days because Date object contains Time also.
*/
userBirthdate.max = new Date().toISOString().split("T")[0];

const ageButton = document.querySelector("#age_btn");
let result = document.querySelector("#result");
var userName = document.querySelector(".name");

/* Adding click eventListner to the calculate button */
ageButton.addEventListener("click", () => {
  /* Checking if user click the button without fillinf the field then it generate the error message */
  if (userBirthdate.value === "" || userName.value === "") {
    result.innerHTML = "Please Filled The Fields First";
  } else {
    /* Making the new Date object */
    const currentDate = new Date();

    /* Storing the years, months and days in separate variables */
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; // Adding 1 in Month because the index start from 0
    let currentDays = currentDate.getDate();

    /* Formatting the userInput into the Javascript Date Format and storing in separate variables */
    formattedUserInput = new Date(userBirthdate.value);
    let userYear = formattedUserInput.getFullYear();
    let userMonth = formattedUserInput.getMonth() + 1; // Adding 1 in Month because the index start from 0
    let userDays = formattedUserInput.getDate();

    /* Calculating the difference between current date and the user entered date */
    /* and storing in separate variables */
    let yearDiff = currentYear - userYear;
    let monthDiff, daysDiff;

    /* 
    Calculating the months Diference between current Month and user Entered Month.
    if currentMonth is less then userEntered Month then I subtract 1 from the year and update the monthDiff Variable. 
    else I simply take difference between current and userEntered Months and update the monthDiff variable.
*/
    if (currentMonth < userMonth) {
      yearDiff--;
      monthDiff = 12 + currentMonth - userMonth;
    } else {
      monthDiff = currentMonth - userMonth;
    }

    /* 
    Checking If the current date is less than userEntered date then I subtract monthDiff by 1 and then I find the last Day of user Month which is added to the difference between currentDay and userDay.
    Else I simply take difference between currentDay and userDay and update the daysDiff variable
 */
    if (currentDays < userDays) {
      monthDiff -= 1;
      let latestDays = new Date(userYear, userMonth, 0).getDate();
      daysDiff = latestDays + (currentDays - userDays);
    } else {
      daysDiff = currentDays - userDays;
    }

    if (monthDiff < 0) {
      monthDiff = 11;
      yearDiff--;
    }

    /* Updating the result field for showing the User Age */
    result.innerHTML = `${userName.value} is <span>${yearDiff}</span> Years, <span>${monthDiff}</span> Months and <span>${daysDiff}</span> Days Old`;

    /* Clearing the input Field */
    userBirthdate.value = "";
    userName.value = "";
  }
});
