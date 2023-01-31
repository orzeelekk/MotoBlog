import React, {useState} from "react";

function Form() {
    const [data, setData] = useState({
        Imie: '',
        Mail: '',
        Wiadomosc: ""
    })
    const [errors, setErrors] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const handleChange = (e) => {
        const { value, name } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        const validationErrors = [];
        if (data.Imie.length < 3) {
            validationErrors.push('Imie musi być dłuzsze niz 2 znaków!');
        }
        if (data.Mail.length < 6) {
            validationErrors.push('Mail musi być dłuzszy niz 5 znaków!');
        }
        if (data.Wiadomosc.length < 11) {
            validationErrors.push('Wiadomość musi być dłuzsza niz 10 znaków!');
        }

        setErrors(validationErrors);
        if(validationErrors.length > 0) return;
        if(validationErrors.length === 0) {
            setTimeout(() => {
                setSubmitting(false);
            }, 3000)
            alert('Wiadomość wysłana.')
        }
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
                        <input className="form_input_text" type="text" name="Imie" value={data.Imie} onChange={handleChange} />
                        <p className="form_input_header">Mail</p>
                        <input className="form_input_text" type="text" name="Mail" value={data.Mail} onChange={handleChange} />
                        <p className="form_input_header">Wiadomosc</p>
                        <textarea className="form_input_text_main" name="Wiadomosc" value={data.Wiadomosc} onChange={handleChange} />
                    </label>
                </fieldset>
                {
                    errors.map(error => <p key={error}>{error}</p>)
                }
                <button className="button-option form_input_button" type="submit">Wyślij</button>
            </form>
        </div>
    )
}

export default Form;
