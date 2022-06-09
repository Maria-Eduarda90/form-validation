import visibleOn from "../images/senha-visible.svg";
import visibleOff from "../images/senha-visible-off.svg";

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { validations } from '../validation/validation';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

import itachiImage from '../images/2632187672f262ffd8d414711aa8ae81-removebg-preview.png';

import styles from './styles.module.scss';
import { useState } from 'react';

export function Form(){
    
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [conFirmPasswordVisible, setConFirmPasswordVisible] = useState(false);

    const formik = useFormik({
        initialValues: {nome: '', email: '', senha: '', confirmar_senha: ''},
        validationSchema: Yup.object(validations),
        onSubmit: (values) =>  {values.nome, values.email, values.senha, values.confirmar_senha}
    });
    
    return(
        <div className={styles.container}>
            <aside>
                <img src={itachiImage} alt="itachi" />
            </aside>

            <main>
                <div className={styles.mainContainer}>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label>Nome:</label>
                            <Input id="nome" name='nome' type="text" onChange={formik.handleChange} value={formik.values.nome}/>
                            {formik.touched.nome && <span>{formik.errors.nome}</span>}
                        </div>

                        <div>
                            <label>Email:</label>
                            <Input id="email" name='email' type="email" onChange={formik.handleChange} value={formik.values.email}/>
                            {formik.touched.email && <span>{formik.errors.email}</span>}
                        </div>

                        <div>
                            <label>Senha: </label>
                            <Input id="senha" name='senha' type={passwordVisible? 'text' : 'password'} onChange={formik.handleChange} value={formik.values.senha}/>
                            {formik.touched.senha && <span>{formik.errors.senha}</span>}
                            <div onClick={() => { setPasswordVisible(!passwordVisible)}}>
                                <img width={25} height={20} src={passwordVisible ? visibleOn : visibleOff} alt="" />
                            </div>
                        </div>

                        <div>
                            <label>Confirmar senha: </label>
                            <Input id="confirmar_senha" name='confirmar_senha' type={conFirmPasswordVisible ? 'text' : 'password'} onChange={formik.handleChange} value={formik.values.confirmar_senha}/>
                            {formik.touched.confirmar_senha && <span>{formik.errors.confirmar_senha}</span>}
                            <div onClick={() => { setConFirmPasswordVisible(!conFirmPasswordVisible)}}>
                                <img width={25} height={20} src={conFirmPasswordVisible ? visibleOn : visibleOff} alt="" />
                            </div>
                        </div>

                        <Button type="submit">
                            Cadastrar
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}