export function formValidation(event: any, isReset: boolean = false) {
    event.preventDefault();
    var validation = event.target.checkValidity();
    if (validation) {

        event.target.classList.remove("was-validated")

    }
    else {

        event.target.classList.add('was-validated')
    }

    const data = new FormData(event.target);

    var object: any = {};
    data.forEach((value, key) => object[key] = value);

    Object.keys(object).map(it => {
        if (object[it] === "") {
            delete object[it]
        }
    })

    if (validation) {
        if (isReset) {
            event.target.reset();
        }
    }

    return {
        isValid: validation,
        jsonData: object,
        formData: data
    }
}
export function getFormValues(formName : string)
{
    {
        //@ts-ignore
        var form = document.forms[formName];
    }
   
    var formData = new FormData(form);

    var object: any = {};
    formData.forEach((value, key) => object[key] = value);

   
    return {
        isValid: form.reportValidity(),
        jsonData: object,
        formData: formData
    }
}