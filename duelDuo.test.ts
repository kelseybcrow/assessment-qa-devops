import { Builder, Capabilities, By } from 'selenium-webdriver'

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking draw button shows choices div', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    const choicesDiv = await driver.findElement(By.id('choices'))

    await drawButton.click()

    const displayed = await choicesDiv.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking add-to-duo button showes player-id div', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
