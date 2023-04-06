const User = require('../components/User')

class Check {

async signUpConfirm(userMsg) {
    return await 'Hello ' + userMsg + ' (not ' + userMsg + '? Log out)'
  } 

async itemNameConfirm(itemNm) {
  return await itemNm
}

async checkoutItemName(itemNm) {
  return await itemNm + ' - Pink'
}

async checkoutShippingInfo(firstname, lastName, streetAdress, cityName, pinCode, phoneNumber, email) {
  return await firstname + ' ' + lastName + '\n' + streetAdress + '\n' + cityName + ' ' + pinCode + '\n' + cityName + '\n' + phoneNumber + '\n' + email
}
  
}

module.exports = new Check