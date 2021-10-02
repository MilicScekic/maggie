const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

const Contact = async (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  const data = {
    to: `put your sender email from sendgrid here`,
    from: `put your sender email from sendgrid here`,
    subject: `${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };
  if(body.name !== '' && body.email !== '' && body.message !== '') {
    await mail.send(data);
    res.status(200).json({ status: 'OK' });
  }
};
export default Contact;