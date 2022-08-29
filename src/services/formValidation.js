export const validateInput = (key, value) => {
    let errorMessage;
    if (key == 'product_name') {
        errorMessage = '';
        if (!value) {
            errorMessage = 'Enter product name';
        } else if (value) {
            if (value.length < 4) {
                errorMessage = 'Full name must be at least 4 characters';
            }
        }
    } else if (key == 'lot') {
        errorMessage = '';
        if (!value) {
            errorMessage = 'Enter lot number';
        } else if (value) {
            if (value.length < 2) {
                errorMessage = 'Lot number must be at least 4 digit';
            }
        }
    } else if (key == 'price') {
        errorMessage = '';
        if (!value) {
            errorMessage = 'Enter price';
        } else if (value) {
            if (value.length < 1) {
                errorMessage = 'Enter valid price';
            }
        }
    } else if (key == 'min_increment') {
        errorMessage = '';
        if (!value) {
            errorMessage = 'Enter Min. Increment';
        } else if (value) {
            if (value.length < 1) {
                errorMessage = 'Enter valid min. increment';
            }
        }
    } else if (key == 'min_bid') {
        errorMessage = '';
        if (!value) {
            errorMessage = 'Enter a Min. Bid';
        } else if (value) {
            if (value.length < 1) {
                errorMessage = 'Enter valid min. bid';
            }
        }
    } else if (key == 'expiry_date') {
        errorMessage = '';
        if (!value) {
            errorMessage = 'Select expiry date';
        }
    } else if (key == 'product_description') {
        errorMessage = '';
        if (!value) {
            errorMessage = 'Product Description';
        }
    } else if (key == 'product_details') {
        errorMessage = '';
        if (!value) {
            errorMessage = 'Product Details';
        }
    }
    return errorMessage;
};
