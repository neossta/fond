export const handleToggleAmoForm = () => {
  const amoFormContainer = document.querySelector('#participate');
  if (!amoFormContainer) return;
  amoFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
