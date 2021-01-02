import React, { useState } from 'react';

import {
  Content,
  FormContainer,
  Form,
  FormInput,
  FormTextArea,
  SubmitButton,
} from './styles';

import { FiLoader } from 'react-icons/fi';

import { useForm } from "react-hook-form";

export default function FormSection() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(data)  {
    setLoading(true);

    try {
      if (!!data['bot-field']) return

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: data.name,
          email: data.email,
          layout: data.layout,
          pagesNumber: data.pagesnumber,
          message: data.message
        })
      })

      alert('E-mail enviado com sucesso, entrarei em contato em breve! :)')
      reset()
      setLoading(false);
    } catch(err) {
      setLoading(false);
      alert('Ocorreu um erro ao enviar o e-mail, tente novamente mais tarde.')
    }
  };

  return (
    <Content id="contact">
      <div className="formcontent">
        <span>Iniciar um projeto</span>
        <h2>
          Vamos por a<br />
          mão na massa?
        </h2>
        <p>
          Conte me sobre o seu projeto.
          <br /> Vou te responder em breve.
        </p>
      </div>
      <FormContainer>
        <Form
          name="contact"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput name="name" type="text" required placeholder="Nome" ref={register({ required: true })} />
          <FormInput
            required
            name="email"
            type="email"
            placeholder="E-mail"
            ref={register({ required: true })}
          />
          <input type="hidden" name="bot-field" ref={register} />

          <p>Você já tem layout?</p>

          <div className="radio-group">
            <label className="yes">
              <FormInput
                id="yes"
                type="radio"
                className="radio"
                name="layout"
                value="possui"
                required
                ref={register({ required: true})}
              />
              <span className="design" />
              <span className="text">Sim</span>
            </label>

            <label className="no">
              <FormInput
                id="no"
                className="radio"
                type="radio"
                name="layout"
                value="naopossui"
                required
                ref={register({ required: true})}
              />
              <span className="design" />
              <span className="text">Não</span>
            </label>
          </div>

          <p>Número de páginas do projeto</p>
          <div className="number-pages-container">
            <label className="pages">
              <FormInput
                className="radio"
                type="radio"
                name="pagesnumber"
                value="1"
                required
                ref={register({ required: true})}
              />
              <div className="page-number">1</div>
            </label>
            <label className="pages">
              <FormInput
                className="radio"
                type="radio"
                name="pagesnumber"
                value="2"
                required
                ref={register({ required: true})}
              />
              <div className="page-number">2</div>
            </label>
            <label className="pages">
              <FormInput
                className="radio"
                type="radio"
                name="pagesnumber"
                value="3"
                required
                ref={register({ required: true})}
              />
              <div className="page-number">3</div>
            </label>
            <label className="pages">
              <FormInput
                className="radio"
                type="radio"
                name="pagesnumber"
                value="4"
                required
                ref={register({ required: true})}
              />
              <div className="page-number">4</div>
            </label>
            <label className="pages">
              <FormInput
                className="radio"
                type="radio"
                name="pagesnumber"
                value="5"
                required
                ref={register({ required: true})}
              />
              <div className="page-number">5</div>
            </label>
            <label className="pages">
              <FormInput
                className="radio"
                type="radio"
                name="pagesnumber"
                value="6"
                required
                ref={register({ required: true})}
              />
              <div className="page-number">6</div>
            </label>
            <label className="pages seven-plus">
              <FormInput
                className="radio"
                type="radio"
                name="pagesnumber"
                value="7+"
                required
                ref={register({ required: true})}
              />
              <div className="page-number">7+</div>
            </label>
            <label className="pages seven">
              <FormInput
                className="radio"
                type="radio"
                name="pagesnumber"
                value="7"
                required
                ref={register({ required: true})}
              />
              <div className="page-number">7</div>
            </label>
            <label className="pages eight">
              <FormInput
                className="radio"
                type="radio"
                name="pagesnumber"
                value="8"
                required
                ref={register({ required: true})}
              />
              <div className="page-number">8</div>
            </label>
            <label className="pages nine">
              <FormInput
                className="radio"
                type="radio"
                name="pagesnumber"
                value="9"
                required
                ref={register({ required: true})}
              />
              <div className="page-number">9</div>
            </label>
            <label className="pages ten-plus">
              <FormInput
                className="radio"
                type="radio"
                name="pagesnumber"
                value="10+"
                required
                ref={register({ required: true})}
              />
              <div className="page-number">10+</div>
            </label>
          </div>

          <FormTextArea
            required
            name="message"
            placeholder="Mensagem"
            ref={register({ required: true})}
          />

          <SubmitButton type="submit" disabled={loading}>
            {loading && <FiLoader className="icon-spin" size={16} />} Enviar mensagem
          </SubmitButton>
        </Form>
      </FormContainer>
    </Content>
  );
}
