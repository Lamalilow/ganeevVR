function validate_form ( )
{
    valid = true;

    if ( document.form.email.value == "" )
    {
        alert ( "Пожалуйста, введите данные в поле 'Email'." );
        valid = false;
    }

    if ( ( document.form.flexRadioDefault.checked == false ) )
    {
        alert ( "Пожалуйста, отметьте согласие с Соглашением" );
        valid = false;
    }



    if ( ( document.form.vr.checked == false ) && ( document.form.ar.checked==false) )
    {
        alert ( "Пожалуйста, выберете, на что хотите подписаться" );
        valid = false;
    }

    return valid;
}

