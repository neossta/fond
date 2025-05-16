export const handleToggleAmoForm = () => {
  const amoFormContainer = document.querySelector('#amoForm');
  if (!amoFormContainer) return;
  amoFormContainer.scrollIntoView({ behavior: 'smooth' });
};
