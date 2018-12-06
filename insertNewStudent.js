

function insertNewStudent(name,age,photo,major,bio,resume) {
	var studentData= {
			name:name,
			age:age,
			photo:photo,
			major:major,
			bio:bio,
      resume:resume
	};
	console.log("studentData",studentData);
var studentHTML = Handlebars.templates.studentInfo(studentData);
var insertStudentContainer = document.getElementById('students');
insertStudentContainer.insertAdjacentHTML('beforeend', postHTML);
}
var allStudents = [];

function handleModalAcceptClick() {

  var name = document.getElementById('user-name').value.trim();
  var photo = document.getElementById('user-photo').value.trim();
  var age = document.getElementById('user-age').value.trim();
  var major = document.getElementById('user-major').value.trim();
  var bio =  document.getElementById('user-bio').value.trim();
  var resume = document.getElementById('user-resume');

  if (!name || !age || !photo || !major || !bio || !resume) {
    alert("You must fill in all of your information to create a post.");
  } else {

    allStudents.push({
	name:name,
	age:age,
	photo:photo,
	major:major,
	bio:bio,
      	resume:resume
    });

  }

}

var modalAcceptButton = document.getElementById('modal-accept');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick)

		});
  }
