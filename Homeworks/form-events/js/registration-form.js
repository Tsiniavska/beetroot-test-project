// Check
// Email
const REGEXP_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Error
const setError = (id, text) => {
  const DOMError = document.getElementById(id);

  if (DOMError) {
    DOMError.textContent = text;
  }
};

// Form 1
const registrationForm = () => {
  const DOMForm = document.getElementById('js-form');

  if (!DOMForm) return;

  DOMForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    // First Name
    const firstName = form.get('first-name');

    if (!firstName) {
      return setError('js-first-name-error', 'This field is required');
    }
    if (firstName.length < 2) {
      return setError(
        'js-first-name-error',
        'First Name must be at least 2 characters'
      );
    }

    const containsUpperCase = (str) => /[A-Z]/.test(str);
    if (!containsUpperCase(firstName)) {
      return setError(
        'js-first-name-error',
        'First Name must contain at least one uppercase letter'
      );
    }
    setError('js-first-name-error', '');

    // Last Name
    const lastName = form.get('last-name');

    if (!lastName) {
      return setError('js-last-name-error', 'This field is required');
    }
    if (lastName.length < 2) {
      return setError(
        'js-last-name-error',
        'Last Name must be at least 2 characters'
      );
    }
    const thereUpperCase = (str) => /[A-Z]/.test(str);
    if (!thereUpperCase(lastName)) {
      return setError(
        'js-last-name-error',
        'Last Name must contain at least one uppercase letter'
      );
    }

    setError('js-last-name-error', '');

    // Email
    const email = form.get('e-mail');

    if (!email) {
      return setError('js-e-mail-error', 'This field is required');
    }
    const isValidEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    if (!isValidEmail(email)) {
      return setError('js-e-mail-error', 'Please enter a valid email address');
    }

    setError('js-e-mail-error', '');

    // Country
    const country = form.get('country');

    if (!country) {
      return setError('js-country-error', 'This field is required');
    }
    setError('js-country-error', '');

    // City
    const city = form.get('city');

    if (!city) {
      return setError('js-city-error', 'This field is required');
    }
    if (city.length < 2) {
      return setError(
        'js-city-error',
        'City name must be at least 2 characters'
      );
    }
    setError('js-city-error', '');

    const data = { firstname, lastname };
    console.log('data:', data);
  });
};

export default registrationForm;
