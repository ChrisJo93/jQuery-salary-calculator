const employeeArray = [];
let total = 0;
let totalAllowed = 20000;
let totalMonthly = 0;

$(document).ready(onReady);

function onReady() {
  $('.js-submitButton').on('click', submitValues); //"connects button with input values function
  $('.js-employeeDisplayList').on('click', '.deleteButton', deleteEmployee);
}

function submitValues() {
  //targeting input fields and storing those values
  let firstName = $('.js-firstNameInput').val();
  let lastName = $('.js-lastNameInput').val();
  let id = $('.js-idInput').val();
  let job = $('.js-jobInput').val();
  let salary = $('.js-salaryInput').val();

  //using the input field values to build employee object
  const employee = {
    firstName,
    lastName,
    id,
    job,
    salary,
  };
  employeeArray.push(employee); //storing employee object into an array
  employeeDisplay();
  totalMonthly += parseInt(salary);
  calculateCompensation();
}
function calculateCompensation() {
  //using salary property to adjust total
  let compensation = $('.js-totalCompensation');
  total = Number(totalMonthly / 12);
  compensation.empty();
  compensation.text(parseInt(total)); //outputing whole number

  if (total >= totalAllowed) {
    //turning text red if over 20,000
    compensation.css('color', 'crimson');
  } else {
    compensation.css('background-color', 'white');
  }
}

function employeeDisplay() {
  //clearing input fields after inputs are stored
  $('.js-firstNameInput').val('');
  $('.js-lastNameInput').val('');
  $('.js-idInput').val('');
  $('.js-jobInput').val('');
  $('.js-salaryInput').val('');
  $('.js-employeeDisplayList').empty();
  for (let i = 0; i < employeeArray.length; i++) {
    const employeeItem = employeeArray[i];

    $('.js-employeeDisplayList').append(
      //displaying all stored info to the dom
      `<tr>
            <td>${employeeItem.firstName}</td>
            <td>${employeeItem.lastName}</td>
            <td>${employeeItem.id}</td>
            <td>${employeeItem.job}</td>
            <td>${employeeItem.salary}</td>
            <td><button class="deleteButton" data-delete=${i}>delete</button></td>
            </tr>`
    );
  }
}

function deleteEmployee() {
  //removing employee information from array on delete
  let toBeDeleted = $(this).data('delete');
  totalMonthly -= employeeArray[toBeDeleted].salary;
  employeeArray.splice(toBeDeleted, 1);
  employeeDisplay();
  calculateCompensation();
  console.log(total);
}
