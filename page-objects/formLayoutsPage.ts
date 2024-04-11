import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class FormLayoutsPage extends HelperBase {

  constructor(page: Page) {
    super(page)
  }

  async submitUsingTheGridFormWithCredencialsAndSelectOption(email: string, password: string, optionText: string) {
    const usingTheGridForm = this.page.locator('nb-card', { hasText: "Using the Grid" })
    await usingTheGridForm.getByRole('textbox', { name: "Email" }).fill(email)
    await usingTheGridForm.getByRole('textbox', { name: "Password" }).fill(password)
    await usingTheGridForm.getByRole('radio', { name: optionText }).check({ force: true })
    await usingTheGridForm.getByRole('button').click()
  }

  /**
   * This method will out the inline form with user details
   * @param name - should be first and last name
   * @param email - Valid email for the test user
   * @param rememberMe - true or false if user session to be safed
   */

  async submitInlineormWithNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean) {
    const inlineForm = this.page.locator('nb-card', { hasText: "Inline form" })
    await inlineForm.getByRole('textbox', { name: "jane Doe" }).fill(name)
    await inlineForm.getByRole('textbox', { name: "Email" }).fill(email)
    if(rememberMe) {
      await inlineForm.getByRole('checkbox').check({ force: true })
    }
    await inlineForm.getByRole('button').click()
  }
}
