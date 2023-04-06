const User = require('../components/User')

class Utils {

      async generateUsername() {
        const characters = 'abcdefghijklmnopqrstuvwxyz'
        let randomUsername = ''
        for (let i = 0; i < 5; i++) {
          randomUsername += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return `${randomUsername}`
      }

      async generateEmail() {
        const characters = 'abcdefghijklmnopqrstuvwxyz'
        let randomEmail = ''
        for (let i = 0; i < 6; i++) {
          randomEmail += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return `${randomEmail}` + '@example.com'
      }

      async generatePassword() {
        const characters = 'abcdefghijklmnopqrstuvwxyz1234567890'
        let randomPassword = ''
        for (let i = 0; i < 11; i++) {
          randomPassword += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return `${randomPassword}`
      }

      async generateFirstName() {
        const characters = 'abcdefghijklmnopqrstuvwxyz'
        let randomFirstName = ''
        for (let i = 0; i < 4; i++) {
          randomFirstName += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return `${randomFirstName}`
      }

      async generateLastName() {
        const characters = 'abcdefghijklmnopqrstuvwxyz'
        let randomLastName = ''
        for (let i = 0; i < 6; i++) {
          randomLastName += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return `${randomLastName}`
      }

      async generateStreetAdress() {
        const characters = 'abcdefghijklmnopqrstuvwxyz1234567890'
        let randomStreetAdress = ''
        for (let i = 0; i < 8; i++) {
          randomStreetAdress += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return `${randomStreetAdress}`
      }

      async generatePhoneNumber() {
        const characters = '1234567890'
        let randomPhoneNumber = ''
        for (let i = 0; i < 9; i++) {
          randomPhoneNumber += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return `${randomPhoneNumber}`
      }

      async generatePinCode() {
        const characters = '1'
        let randomPinCode = ''
        for (let i = 0; i < 6; i++) {
          randomPinCode += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return `${randomPinCode}`
      }



}

module.exports = new Utils


