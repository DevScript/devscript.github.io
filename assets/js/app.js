// Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyC4BLOTJtE_MnQ2uc4EbydZD9IjxOPPoFU",
      authDomain: "website-connection-test.firebaseapp.com",
      databaseURL: "https://website-connection-test.firebaseio.com",
      projectId: "website-connection-test",
      storageBucket: "website-connection-test.appspot.com",
      messagingSenderId: "901705844467",
      appId: "1:901705844467:web:3ed567aaaca69667e05986",
      measurementId: "G-MN9D3SDE4X"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();

const certs = document.querySelector('.verify-card');
const form = document.querySelector('#cert-form');
const content = jQuery('.verify-content');

function renderCert(doc){

	let html = `<table class='verify-body table table-hover' data-id = ${String(doc.id)}>`;
	var titles = ['Name', 'Email ID', 'Certificate ID', 'Description'] //, 'Created At'];
	var values = ['name', 'emailid', 'cert_id', 'desc'] //, 'createdAt']

	var i;
	for(i=0;i<titles.length;i++){
        html += '<tr>';
        html += '<th>' + titles[i] + '</th>';
        html += '<td>' + doc.data()[values[i]] + '</td>';
        html += '</tr>';

	}
    html += '</table>'

	content.append(html);
}


form.addEventListener('submit', (e) => {
	e.preventDefault();

	db.collection('certificates').where('cert_id', '==', form.certid.value).get().then((snapshot) => {
		snapshot.docs.forEach(doc => {
			renderCert(doc)
		})

		if(form.certid.value.length != 0){
			form.remove();
		}
	});
});
