import { test } from '../test-options'
import { faker } from '@faker-js/faker'

test('Parametrized methods', async ({ pageManager }) => {
  const randomFullName = faker.person.fullName()
  const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(100)}@test.com`

  await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredencialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 1')
  await pageManager.onFormLayoutsPage().submitInlineormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
})
