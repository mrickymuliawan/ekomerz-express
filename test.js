


function changeName(cb) {
  let firstName = 'ricky'
  setTimeout(() => {
    firstName = 'budi'
    cb(firstName)
  }, 2000)

}

changeName((data) => {
  console.log(data);
})
console.log('hai')

function sendEmailAfterRegister(email) {
  mailchimp.send(email)
}

// create user
// 
// 
// 
// create wallet
// 
// 
// 
sendEmailAfterRegister(email)
sendOtp(email)
