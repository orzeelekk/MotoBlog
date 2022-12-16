import React, {useState} from "react";

function Form() {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }

    return(
        <div className="form">
            <h1 className="opening_header">Formularz kontaktowy:</h1>
            {submitting &&
                <div className="form_pop">Wysyłanie formularza...</div>
            }
            <form onSubmit={handleSubmit}>
                <fieldset className="form_fieldset">
                    <label>
                        <p className="form_input_header">Imie</p>
                        <input className="form_input_text" name="Imie" />
                        <p className="form_input_header">Mail</p>
                        <input className="form_input_text" name="Mail" />
                        <p className="form_input_header">Wiadomosc</p>
                        <textarea className="form_input_text_main" name="Wiadomość" />
                    </label>
                </fieldset>
                <button className="button-option form_input_button" type="submit">Wyślij</button>
            </form>
        </div>
    )
}

export default Form;