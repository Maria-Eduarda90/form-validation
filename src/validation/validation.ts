import * as Yup from 'yup';

export const validations = {
    nome: Yup.string().required("Preencha o campo name").min(3, "Minimo de 3 caracteres.").max(200, "Maximo de 200 caracteres"),
    email: Yup.string().required("Preencha o campo e-mail").email("Preencha um e-mail valido").max(200, "Maximo 200 caracteres"),
    senha: Yup.string().required("Preencha o campo senha").min(8, "Minimo de 8 caracteres").max(200, "Maximo de 200 caracteres"),
    confirmar_senha: Yup.string().required("Preencha o campo confirma senha").oneOf([Yup.ref('senha'), null], 'Senhas não correspondem'),
}