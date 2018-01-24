const selectors = require('../supporting/selectors')
const functions = require('../supporting/functions')
const data = require('../supporting/data')

module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:3000')
    },
    after : browser => {
        browser.end()
    },
    'UI Check' : browser => functions.uiChecker(browser),
    '2+2=4' : browser => {
        //I click all the appropriate buttons and check the display for the appropriate results, per the steps of my test case
        browser
            functions.buttonClicker(browser, data.simpleAddition.buttons[0])
            functions.buttonClicker(browser, data.simpleAddition.buttons[1])
            functions.buttonClicker(browser, data.simpleAddition.buttons[2])
            functions.buttonClicker(browser, data.simpleAddition.buttons[3])
            browser.expect.element(selectors['result']).text.to.equal(data.simpleAddition.result)
    },
    '32.1*2=64.2' : browser => {
        browser
            functions.buttonClicker(browser, data.decimalMultiplication.buttons[0])
            functions.buttonClicker(browser, data.decimalMultiplication.buttons[1])
            functions.buttonClicker(browser, data.decimalMultiplication.buttons[2])
            functions.buttonClicker(browser, data.decimalMultiplication.buttons[3])
            functions.buttonClicker(browser, data.decimalMultiplication.buttons[4])
            functions.buttonClicker(browser, data.decimalMultiplication.buttons[5])
            functions.buttonClicker(browser, data.decimalMultiplication.buttons[6])
            browser.expect.element(selectors['result']).text.to.equal(data.decimalMultiplication.result)
    }

}