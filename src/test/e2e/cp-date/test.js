exports.module = {
    'cp-date pick ': function(browser){
        browser
            .resizeWindow(1920, 1080)
            .url('http://localhost:1111/')
            .waitForElementVisible('input', 10000)
            .pause(1000)
            .click('cp-date:nth-child(1) input')
            .clearValue('cp-date:nth-child(1) input')
            .pause(2000)
            .setValue('cp-date:nth-child(1) input', '11/04/2018 14:47')
            .sendKeys('body', browser.Keys.TAB)
            .pause(1000)
            .assert.containsText('p#p1', 'Pessoa: Wed Apr 11 2018 14:47:00 GMT-0300 (-03)')
            .pause(2000)
            .click('cp-date:nth-child(1) input')
            .clearValue('cp-date:nth-child(1) input')
            .pause(1000)
            .setValue('cp-date:nth-child(1) input', '09/04/2018 12:00')
            .sendKeys('body', browser.Keys.TAB)
            .assert.containsText('p#p1', 'Pessoa:')
            .pause(3000)
    },
    'cp-date 2': function(browser){
        browser
            .pause(1000)
            .click('cp-date[class="material"] input')
            .pause(500)
            .click('body > div.xdsoft_datetimepicker:nth-of-type(3) div[data-hour="12"]')
            .sendKeys('body', browser.Keys.TAB)
            .assert.containsText('p#p2', 'Pessoa2: Sun Dec 31 1899 12:00:00 GMT-0200 (-02)')
            .pause(500)
            .clearValue('cp-date[class="material"] input')
            .pause(300)
            .setValue('cp-date[class="material"] input', '14:00')
            .sendKeys('body', browser.Keys.TAB)
            .pause(400)
            .assert.containsText('p#p2', 'Pessoa:')
            .pause(3000)
    },
    'cp-date 3'
    
};