export async function fillFilled(element, value) {
  await element.setValue(value);
}

export async function click(element) {
  await element.click();
}
