exports.module = {
    'cp-date start ': function(browser){
        browser
            .resizeWindow(1920, 1080)
            .url('http://localhost:1111/src/test/e2e/cp-date/')
    },
    'cp-date pick ': function(browser){
        browser
            .waitForElementVisible('input', 10000)
            .pause(3000)
            .click('cp-date#cp1 input')
            .clearValue('cp-date#cp1 input')
            .pause(2000)
            .setValue('cp-date#cp1 input', '11/04/2018 14:47')
            .sendKeys('cp-date#cp1 input', browser.Keys.TAB)
            .pause(1000)
            .assert.containsText('p#p1', 'Pessoa: Wed Apr 11 2018 14:47:00 GMT-0300')
            .pause(2000)
            .click('cp-date#cp1 input')
            .clearValue('cp-date#cp1 input')
            .pause(1000)
            .setValue('cp-date#cp1 input', '09/04/2018 12:00')
            .sendKeys('cp-date#cp1 input', browser.Keys.TAB)
            .assert.containsText('p#p1', 'Pessoa:')
            .pause(3000)
    },
    'cp-date 2': function(browser){
        browser
            .pause(1000)
            .click('cp-date[class="material"] input')
            .pause(500)
            .click('body > div.xdsoft_datetimepicker:nth-of-type(3) div.xdsoft_time_variant div[class="xdsoft_time "]')
            .pause(500)
            .sendKeys('cp-date[class="material"] input', browser.Keys.TAB)
            .pause(500)
            .assert.containsText('p#p2', 'Pessoa2: Sun Dec 31 1899 12:00:00 GMT-0200')
            .pause(500)
            .clearValue('cp-date[class="material"] input')
            .pause(300)
            .setValue('cp-date[class="material"] input', '14:00')
            .pause(400)
            .sendKeys('cp-date[class="material"] input', browser.Keys.TAB)
            .pause(400)
            .assert.containsText('p#p2', 'Pessoa2:')
            .pause(3000)
    },
    'cp-date 3': function(browser){
        browser
            .pause(1000)
            .click('cp-date[class=""]')
            .pause(200)
            .click('body > div.xdsoft_datetimepicker:nth-of-type(4) [class="xdsoft_label xdsoft_month"]')
            .pause(200)
            .click('body > div.xdsoft_datetimepicker:nth-of-type(4) [class="xdsoft_label xdsoft_month"] div.xdsoft_option[data-value="8"]')
            .pause(500)
            .click('body > div.xdsoft_datetimepicker:nth-of-type(4) div.xdsoft_calendar tr td[data-date="7"]')
            .pause(500)
            .pause(500)
            .sendKeys('cp-date[class=""]', browser.Keys.TAB)
            .pause(500)
            .assert.containsText('p#p3', 'Pessoa3: Fri Sep 07 2018 00:00:00 GMT-0300')
            .pause(3000)
            .end()  
    }
    
};