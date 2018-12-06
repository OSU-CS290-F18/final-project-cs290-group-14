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
var insertPostContainer = document.getElementById('students');
insertPostContainer.insertAdjacentHTML('beforeend', postHTML);
}
