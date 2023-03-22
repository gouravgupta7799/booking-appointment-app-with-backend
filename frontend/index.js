
let url = 'localhost:4000';

showData();

function showData(){

  var config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:4000',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  axios(config)
    .then(function (response) {
      let list = document.getElementById('items');
      let data = (response.data);
      for (element of data) {
        let li = document.createElement('li');
        let deletebtn = document.createElement('button');

        li.innerHTML = `${element.personName} - ${element.personEmail} - ${element.personContact}`;
        deletebtn.innerHTML = 'Delete';
        li.id = 'items-list'
        deletebtn.className = 'Delete'
        li.appendChild(deletebtn);
        list.appendChild(li);
      };
    })
    .catch(function (error) {
      console.log(error);
    });
};

document.getElementById('submitBtn').addEventListener('click', () => {

  var data = JSON.stringify({
    "personName": document.getElementById("nameInput").value,
    "personEmail": document.getElementById("emailInput").value,
    "personContact": document.getElementById("contactInput").value
  });

  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:4000',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
})

let list = document.getElementById('items');
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('Delete')) {
    let li = e.target.parentElement;
    let arr = li.firstChild.wholeText.split(' - ');
    let data = JSON.stringify(arr)
    var config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    items.removeChild(li);
  }
})
