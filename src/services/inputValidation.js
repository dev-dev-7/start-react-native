export const validateInput = (key, value) => {
  let errorMessage;
  if (key == 'fullname') {
    errorMessage = '';
    if (!value) {
      errorMessage = 'Enter full name';
    } else if (value) {
      if (value.length < 4) {
        errorMessage = 'Full name must be at least 4 characters';
      }
    }
  } else if (key == 'email') {
    errorMessage = '';
    if (!value) {
      errorMessage = 'Enter email address';
    } else if (value) {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(value) === false) {
        errorMessage = 'Enter valid email address';
      }
    }
  } else if (key == 'mobile') {
    errorMessage = '';
    if (!value) {
      errorMessage = 'Enter mobile number';
    } else if (value) {
      if (value.length < 12) {
        errorMessage = 'Enter valid mobile number';
      }
    }
  } else if (key == 'password') {
    errorMessage = '';
    if (!value) {
      errorMessage = 'Enter a password';
    } else if (value) {
      if (value.length < 8) {
        errorMessage = 'Password must be atleast 8 charecters';
      }
    }
  } else if (key == 'password') {
    errorMessage = '';
    if (!value) {
      errorMessage = 'Enter a password';
    } else if (value) {
      if (value.length < 8) {
        errorMessage = 'Password must be atleast 8 charecters';
      }
    }
  } else if (key == 'area') {
    errorMessage = '';
    if (!value) {
      errorMessage = 'Enter area';
    }
  } else if (key == 'street') {
    errorMessage = '';
    if (!value) {
      errorMessage = 'Enter street';
    }
  } else if (key == 'apartment') {
    errorMessage = '';
    if (!value) {
      errorMessage = 'Enter apartment';
    }
  } else if (key == 'city') {
    errorMessage = '';
    if (!value) {
      errorMessage = 'Enter city';
    }
  } else if (key == 'country') {
    errorMessage = '';
    if (!value) {
      errorMessage = 'Enter country';
    }
  } else if (key == 'cardNumber') {
    errorMessage = '';
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    var isValid = false;
    var cardType = 'card';
    if (visaRegEx.test(value)) {
      isValid = true;
      cardType = 'VISA';
    } else if (mastercardRegEx.test(value)) {
      isValid = true;
      cardType = 'MASTERCARD';
    } else if (amexpRegEx.test(value)) {
      isValid = true;
      cardType = 'AMEX';
    } else if (discovRegEx.test(value)) {
      isValid = true;
    }

    if (!value) {
      errorMessage = 'Enter card number';
    } else if (value) {
      if (!isValid) {
        errorMessage = `Please provide a valid ${cardType} number!`;
      } else {
        errorMessage = cardType;
      }
    }
  }

  return errorMessage;
};
