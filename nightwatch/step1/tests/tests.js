module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:3000')
    },
    after : browser => {
        browser.end()
    },
    // Click listed buttons in sequence
    // The display should update correctly after each button press

    // when I click each button I should have 4 as a result
    '2+2=4' : browser => {
        browser
            .click('selectors['2']')
            .expect.element(`selectors='result']`).text.to.equal('2')
        browser
            .click(`selectors['+']`)
            .expect.element(`selectors=['result']`).text.to.equal('0')
        browser
            .click(`selectors['2']`)
            .expect.element(`selectors=['result']`).text.to.equal('2')
        browser
            .click(`selectors['=']`)
            .expect.element(`selectors=['result']`).text.to.equal('4')
    },

    // when I click each button I should have 21 as a result
    '3*7=21' : browser => {
        browser 
            .click(`selectors['3]`)
            .expect.element(`span[name='result']`).text.to.equal('3')
        browser
            .click(`selectors['*']`)
            .expect.element(`span[name='result']`).text.to.equal('0')
        browser
            .click(`selectors['7']`)
            .expect.element(`span[name='result']`).text.to.equal('7')
        browser
            .click(`selectors['=']`)
            .expect.element(`span[name='result']`).text.to.equal('21')
    }

}  