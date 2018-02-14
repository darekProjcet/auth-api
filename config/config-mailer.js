import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: '127.0.0.1',
  port: 25,
  secure: false,
  tls: {
    rejectUnauthorized: false
  }
});

export default transporter;
