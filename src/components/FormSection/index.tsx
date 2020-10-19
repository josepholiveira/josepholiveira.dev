import React from 'react';

import {
  Content,
  FormContainer,
  Form,
  FormInput,
  FormTextArea,
  SubmitButton,
} from './styles';

export default function FormSection() {
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
          method="post"
          data-netlify
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <FormInput name="name" type="text" required placeholder="Nome" />
          <FormInput
            required
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <input type="hidden" name="bot-field" />

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
              />
              <div className="page-number">10+</div>
            </label>
          </div>

          <FormTextArea
            required
            name="message"
            type="text"
            placeholder="Mensagem"
          />

          <SubmitButton type="submit">Enviar mensagem</SubmitButton>
        </Form>
      </FormContainer>
    </Content>
  );
}
