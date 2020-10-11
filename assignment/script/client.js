const employeeArray = [];
let total = 0;

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
  calculateCompensation(employee.salary);
}
function calculateCompensation(salary) {
  let compensation = $('.js-totalCompensation');
  total += Number(salary / 12);
  compensation.empty();
  compensation.text(parseInt(total));
  if (total >= 20000) {
    compensation.css('background-color', 'red').css('color', 'white');
  }
}

function deleteEmployee() {
  const items = $(this).data('index');
  employeeArray.splice(items, 1);
  employeeDisplay();
}

function employeeDisplay() {
  $('.js-firstNameInput').val('');
  $('.js-lastNameInput').val('');
  $('.js-idInput').val('');
  $('.js-jobInput').val('');
  $('.js-salaryInput').val('');
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
      <td><button class="deleteButton" data-index=${i}>delete</button></td>
      </tr>`
    );
  }
}
