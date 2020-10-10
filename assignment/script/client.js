const employeeList = [];

$(document).ready(onReady);

function onReady() {
  $('.js-submitButton').on('click', submitValues);
}

function submitValues() {
  let firstName = $('.js-firstNameInput').val();
  let lastName = $('.js-lastNameInput').val();
  let id = $('.js-idInput').val();
  let job = $('.js-jobInput').val();
  let salary = $('.js-salaryInput').val();

  const employee = {
    firstName,
    lastName,
    id,
    job,
    salary,
  };
  employeeList.push(employee);
  console.log(employee);
}
