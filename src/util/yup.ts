import * as Yup from "yup";

Yup.setLocale({
    mixed: {
        required: "A mező kitöltése kötelező!",
    },
    string: {
        url: "Érvénytelen URL!",
        email: "Érvénytelen e-mail cím!",
    },
});
