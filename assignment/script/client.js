const employeeArray = [];

$(document).ready(onReady);

function onReady() {
  $('.js-submitButton').on('click', submitValues); //"connects button with input values function
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
  calculateCompensation(salary);
}
function calculateCompensation(salary) {
  let total = 0;
  let compensation = $('.js-totalCompensation');
  total += salary;
  compensation.text(salary);
}

function employeeDisplay() {
  $('.js-employeeDisplayList').empty();
  for (let i = 0; i < employeeArray.length; i++) {
    const employeeItem = employeeArray[i];

    $('.js-employeeDisplayList').append(
      `<tr>
      <td>${employeeItem.firstName}</td>
      <td>${employeeItem.lastName}</td>
      <td>${employeeItem.id}</td>
      <td>${employeeItem.job}</td>
      <td>${employeeItem.salary}</td>
      <td></td>
      </tr>`
    );
  }
}
