import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

export default function Contact() {
    const data = useActionData();
    return (
        <div className="contact">
            <h3>Contacter nous</h3>
            <Form method="post" action='/help/contact'>
                <label>
                    <span>Votre Email : </span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Votre messages : </span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Envoyer</button>

                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    )
}
//request contient tout les formes de données
export const contactAction = async ({ request }) => {
    const data = await request.formData()
    console.log(request)

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }
    console.log(submission);
    //envoyer la requette post
    if (submission.message.length < 10) {
        return { error: "Message doit etre au moins 10 caracteres" }
    }

    //redirection

    return redirect('/')
}
