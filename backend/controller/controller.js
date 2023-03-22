
const PersonData = require('../models/model');

exports.postAddData = (req, res, next) => {

  let personName = req.body.personName;
  let personEmail = req.body.personEmail;
  let personContact = req.body.personContact;

  PersonData.create({
    personName: personName,
    personEmail: personEmail,
    personContact: personContact
  })
    .then(res.send('Created sucessfully'))
    .catch(err => console.log(err))
}

exports.getData = (req, res, next) => {
  PersonData.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
}

exports.postDeleteData = (req, res, next) => {
  let item = req.body[1]
  PersonData.findAll()
    .then(result => {
      result.forEach(element => {
        if (element.personEmail === item) {
          PersonData.destroy(
            { where: { personEmail: item } })
        }
      });
    })
  .catch(err=>console.log(err))
}