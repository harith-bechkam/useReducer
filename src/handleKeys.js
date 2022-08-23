export const handleEnter = (event) => {
  if (event.key === 'ArrowRight') {
    const form = event.target.form;
    const index = [...form].indexOf(event.target);
    form.elements[index + 1].focus();
    event.preventDefault();
  } else if (event.key === 'ArrowLeft') {
    const form = event.target.form;
    const index = [...form].indexOf(event.target);
    form.elements[index - 1].focus();
    event.preventDefault();
  }
};
