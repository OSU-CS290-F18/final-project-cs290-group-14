
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
	 var postRequest = new XMLHttpRequest();
    var requestURL = 'getPersonIdFromURL() ;
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

    hideModal();

  }

}

var modalAcceptButton = document.getElementById('modal-accept');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick);
  }
