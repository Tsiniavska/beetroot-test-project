// Check
// Email
const REGEXP_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Zip Code
const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;

// Phone Number (Ukraine)
const uaPhoneRegex3 = /^0\d{9}$/;

// Error
const setError = (id, text) => {
  const DOMError = document.getElementById(id);

  if (DOMError) {
    DOMError.textContent = text;
  }
};

// Form 2 (Profile)
const profileForm = () => {
  const DOMProfileForm = document.getElementById('js-profile-form');

  if (!DOMProfileForm) return;

  DOMProfileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    // Name
    const profileName = form.get('profile-name');

    if (!profileName) {
      return setError('js-profile-name-error', 'This field is required');
    }
    if (profileName.length < 2) {
      return setError(
        'js-profile-name-error',
        'Name must be at least 2 characters'
      );
    }

    const containsUpperCase = (str) => /[A-Z]/.test(str);
    if (!containsUpperCase(profileName)) {
      return setError(
        'js-profile-name-error',
        'Name must contain at least one uppercase letter'
      );
    }
    setError('js-profile-name-error', '');

    // Email
    const email = form.get('e-mail');

    if (!email) {
      return setError('js-profile-email-error', 'This field is required');
    }
    const isValidEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    if (!isValidEmail(email)) {
      return setError(
        'js-profile-email-error',
        'Please enter a valid email address'
      );
    }

    setError('js-profile-email-error', '');

    // Country
    const country = form.get('country');

    if (!country) {
      return setError('js-profile-country', 'This field is required');
    }
    setError('js-profile-country', '');

    // City
    const city = form.get('city');

    if (!city) {
      return setError('js-profile-city-error', 'This field is required');
    }
    if (city.length < 2) {
      return setError(
        'js-profile-city-error',
        'City name must be at least 2 characters'
      );
    }
    setError('js-profile-city-error', '');

    // Zip Code
    const zipCode = form.get('zip-code');

    if (!zipCode) {
      return setError('js-profile-zip-code-error', 'This field is required');
    }
    const validateZipCode = (zipCode) => {
      const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
      return zipRegex.test(zipCode);
    };
    if (!validateZipCode(zipCode)) {
      return setError('js-profile-zip-code-error', 'Zip Code is not correct');
    }
    setError('js-profile-zip-code-error', '');

    // Phone Number
    const phoneNumber = form.get('phone-number');

    if (!phoneNumber) {
      return setError(
        'js-profile-phone-number-error',
        'This field is required'
      );
    }
    const validateUAPhoneNumber = (phoneNumber) => {
      const uaPhoneRegex3 = /^0\d{9}$/;
      return uaPhoneRegex3.test(phoneNumber);
    };
    if (!validateUAPhoneNumber(phoneNumber)) {
      return setError(
        'js-profile-phone-number-error',
        'Phone number is not correct'
      );
    }
    setError('js-profile-phone-number-error', '');
  });
};

export default profileForm;
