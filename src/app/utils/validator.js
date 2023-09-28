const validator = (data, config) => {
    const errors = {};
    for (const fieldName in data) {
        for (const condition in config[fieldName]) {
            const error = validate(
                condition,
                config[fieldName][condition],
                data[fieldName]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    function validate(condition, conditionConfig, value) {
        let statusValidate;
        switch (condition) {
            case 'isRequired':
                if (typeof value === 'boolean') {
                    statusValidate = !value;
                } else {
                    statusValidate = value.trim() === '';
                }
                break;
            case 'isEmail': {
                const emailRegExp = /^\S+@\S+\.\S+$/g;
                statusValidate = !emailRegExp.test(value);
                break;
            }
            default:
                break;
        }
        if (statusValidate) return conditionConfig.message;
    }

    return errors;
};

export default validator;
