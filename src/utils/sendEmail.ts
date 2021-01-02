import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY = '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'

const sendEmail = async ({ name, email, layout, pagesNumber, message }) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: 'oi@josepholiveira.dev'
            }
          ],
          subject: 'Formulário de contato - Joseph Oliveira'
        }
      ],
      from: {
        email: 'naoresponda@josepholiveira.dev',
        name: '[Joseph Oliveira] Contato pelo site'
      },
      reply_to: {
        email,
        name
      },
      content: [
        {
          type: 'text/html',
          value: `
          <div>
            <b>${name}</b> entrou em contato via formulário de contato, com as seguintes informações:
            <br>

            <br><b>Possui layout?</b>
            <br>${layout === 'possui' ? 'Possui' : 'Não possui'}
            <br>

            <br><b>Número de páginas do projeto:</b>
            <br>${pagesNumber}
            <br>

            <br><b>Message:</b>
            <br>${message}
            <br>
          </div>
          `
        }
      ]
    })
  });
}

export { sendEmail };