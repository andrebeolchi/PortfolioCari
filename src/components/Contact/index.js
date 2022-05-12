import React from 'react'
import emailjs from 'emailjs-com'
import {Container,
        FormWrap, 
        Icon,
        FormContent,
        Form,
        FormH1,
        FormLabel,
        FormInput,
        FormButton,
        Text,
        FormTextArea} from './ContactElement'

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_eu0nvqi','template_hmv09bm', e.target,'user_GcubHGnMzXoQkY94J4QvT')
            .then((result) => {
                alert('Mensagem enviada com sucesso!')
            }, (error) => {
                alert(error.message)
            });
            e.target.reset();
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Portfolio</Icon>
                    <FormContent>
                        <Form onSubmit={sendEmail}>
                            <FormH1>Envie uma mensagem!</FormH1>
                            <FormLabel for='name'>Nome</FormLabel>
                            <FormInput id='name' type='text' name="name" required/>

                            <FormLabel for='email'>Email</FormLabel>
                            <FormInput id='email' type='email' name="email" required/>

                            <FormLabel for='message' >Mensagem</FormLabel>
                            <FormTextArea id='message' name="message" maxLength='500' required />

                            <FormButton type='submit'>Enviar</FormButton>
                            <Text>Não se esqueça de preencher todos os campos!</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Contact
