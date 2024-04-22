import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker'

test.beforeEach(async({ page }) => {
  await page.goto('/')
})

test.skip('Navigate to form page @smoke @regression', async ({ page }) => {
  const pm = new PageManager(page)
  await pm.navigateTo().formLayoutsPage()
  await pm.navigateTo().datePickerPage()
  await pm.navigateTo().smartTablePage()
  await pm.navigateTo().toastrPage()
  await pm.navigateTo().tooltipPage()
})

test('Parametrized methods @smoke', async ({ page }) => {
  const pm = new PageManager(page)
  const randomFullName = faker.person.fullName()
  const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(100)}@test.com`

  await pm.navigateTo().formLayoutsPage()
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredencialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 1')
  // await page.screenshot({ path: 'screenshots/formsLayoutsPage.png'})
  // const buffer = await page.screenshot()
  // console.log(buffer.toString('base64'))
  await pm.onFormLayoutsPage().submitInlineormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
  // await page.locator('nb-card', { hasText: "Inline form" }).screenshot({ path: 'screenshots/inlineForm.png' })
  await pm.navigateTo().datePickerPage()
  await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5)
  await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15)
})

