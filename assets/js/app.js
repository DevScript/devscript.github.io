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
    // firebase.analytics();

    const db = firebase.firestore();

const certs = document.querySelector('.verify-card');
const form = document.querySelector('#cert-form');
const content = document.querySelector('.verify-content');

function renderCert(doc){
	// let li = document.createElement('li');
	// let name = document.createElement('span');
	// let certid = document.createElement('span');

	// li.setAttribute('data-id', doc.id)
	// name.textContent = 'Name: ' + doc.data().name;
	// certid.textContent = 'Certificate ID: ' + doc.data().cert_id;

	// li.appendChild(name);
	// li.appendChild(certid);

	// certs.appendChild(li);

	let table = document.createElement('table');

	let name = document.createElement('tr');
	let name_title = document.createElement('td');
	let name_content = document.createElement('td');

	let certificateID = document.createElement('tr');
	let certificateID_title = document.createElement('td');
	let certificateID_content = document.createElement('td');

	let emailID = document.createElement('tr');
	let emailID_title = document.createElement('td');
	let emailID_content = document.createElement('td');

	let desc = document.createElement('tr');
	let desc_title = document.createElement('td');
	let desc_content = document.createElement('td');


	table.setAttribute('data-id', doc.id);
	table.setAttribute('class', 'verify-body table')
	table.setAttribute('border', '1');

	table.appendChild(name);
	
	name_title.textContent = 'Name: ';
	name_content.textContent = doc.data().name;
	name.appendChild(name_title);
	name.appendChild(name_content);

	table.appendChild(certificateID);
	
	certificateID_title.textContent = 'Certificate ID: ';
	certificateID_content.textContent = doc.data().cert_id;
	certificateID.appendChild(certificateID_title);
	certificateID.appendChild(certificateID_content);


	table.appendChild(emailID);
	
	emailID_title.textContent = 'Email ID: ';
	emailID_content.textContent = doc.data().emailid;
	emailID.appendChild(emailID_title);
	emailID.appendChild(emailID_content);


	table.appendChild(desc);
	
	desc_title.textContent = 'Email ID: ';
	desc_content.textContent = doc.data().desc;
	desc.appendChild(desc_title);
	desc.appendChild(desc_content);


	// name.textContent = 'Name: ' + doc.data().name;
	// certid.textContent = 'Certificate ID: ' + doc.data().cert_id;

	// table.appendChild(name);
	// table.appendChild(certid);

	content.appendChild(table);
}

// db.collection('certificates').where('cert_id', '==', 'DSPY0002').get().then((snapshot) => {
// 	snapshot.docs.forEach(doc => {
// 		renderCert(doc)
// 	})
// })


form.addEventListener('submit', (e) => {
	e.preventDefault();

	// db.collection('certificates').add({
	// 	name: form.name.value,
	// 	cert_id: form.certid.value
	// });
	// })
	db.collection('certificates').where('cert_id', '==', form.certid.value).get().then((snapshot) => {
		snapshot.docs.forEach(doc => {
			renderCert(doc)
		})
		// form.certid.value = '';
		if(form.certid.value.length != 0){
			form.remove();
		}
	});
});