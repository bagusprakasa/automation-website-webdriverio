export async function shouldHaveValue(element, value) {
  await expect(element).toHaveValue(value, { ignoreCase: true });
}

export async function shouldHaveText(element, value) {
  await expect(element).toHaveText(value);
}
