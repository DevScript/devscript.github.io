// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBjEuC81_bZmJyl5enVPhrDBANlLyBLfts",
	authDomain: "devscript-certifications.firebaseapp.com",
	databaseURL: "https://devscript-certifications.firebaseio.com",
	projectId: "devscript-certifications",
	storageBucket: "devscript-certifications.appspot.com",
	messagingSenderId: "1007881633914",
	appId: "1:1007881633914:web:9086014de5b5531010bbc3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore().collection('certifications');

const certs = document.querySelector('.verify-card');
const form = document.querySelector('#cert-form');
const content = jQuery('.verify-content');
const code = document.querySelector('.verify-code');
const msg = document.querySelector('.verify-box-message');

function renderCert(doc){

	let html = '<table class="verify-body table table-hover" data-id = ' + doc.id + '>';
	var titles = ['Name', 'Email ID', 'Certificate ID', 'Description'];
	var values = ['name', 'email', 'certificate_id', 'description'];

	var i;
	for(i=0;i<titles.length;i++){
        html += '<tr>';
        html += '<th>' + titles[i] + '</th>';
        html += '<td>' + doc.data()[values[i]] + '</td>';
        html += '</tr>';

	}
    html += '</table>'

	form.remove();
	content.append(html);
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	db.where('certificate_id', '==', form.certid.value).get().then((snapshot) => {
		snapshot.docs.forEach(doc => {
			renderCert(doc)
		})
		msg.innerHTML = 'Unable to get your Data <br> Please check Certificate ID';
		msg.style.color = 'red';
		code.style.borderColor = 'red';
		form.certid.value = '';
		code.focus();
	});
	msg.innerHTML = 'Getting Your Data';
	msg.style.color = '#000';
	code.style.borderColor = '#1A73E8';
});
