export async function fillFilled(element, value) {
  await element.setValue(value);
}

export async function fillSelect(element, value, valueOpt) {
  const selectBox = await element;
  await selectBox.selectByAttribute(value, valueOpt);
}

export async function click(element) {
  await element.click();
}
