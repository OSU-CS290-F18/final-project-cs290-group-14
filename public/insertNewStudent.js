
//use /resumes/* to show individual person
function getPersonIdFromURL() {
  var path = window.location.pathname;
  var pathParts = path.split('/');
  if (pathParts[1] === "studentPage") {
    return pathParts[2];
  } else {
    return null;
  }
}

function handleModalAcceptClick() {

  var name = document.getElementById('name').value.trim();
  var photo = document.getElementById('prof-pic').value.trim();
  var age = document.getElementById('age').value.trim();
  var major = document.getElementById('major').value.trim();
  var bio =  document.getElementById('bio').value.trim();
  var resume = document.getElementById('choose-file');

  if (!name || !age || !photo || !major || !bio || !resume) {
    alert("You must fill in all of your information to create a post.");
  } else {
	 var postRequest = new XMLHttpRequest();
    var requestURL = getPersonIdFromURL() ;
    postRequest.open('POST', requestURL);

    var requestBody = JSON.stringify({
     name:name,
	age:age,
	photo:photo,
	major:major,
	bio:bio,
    resume:resume
  });
    postRequest.addEventListener('load', function (event) {
      if (event.target.status === 200) {
        var studentTemp = Handlebars.templates.studentInfo;
        var newstudentHTML = studentTemp({
        name:name,
        age:age,
		photo:photo,
		major:major,
		bio:bio,
      	resume:resume
        });
        var insertStudentContainer = document.querySelector('.students');
        insertStudentContainer.insertAdjacentHTML('beforeend', newstudentHTML);
      } else {
        alert("Error storing student data: " + event.target.response);
      }
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(requestBody);

  //  hideModal();

  }

}

var modalAcceptButton = document.getElementById('modal-accept');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick)
    alert("Create your resume successfully!");
		}
