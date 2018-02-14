import transporter from '../config/config-mailer';
import getTemplates from '../utils/emailTemplate';

export default class Mailer {
  static sendMailToUser(email, token) {
    const mailOptions = {
      from: 'test@company.io',
      bcc: email,
      subject: 'Password recovery',
      html: getTemplates(email, token)
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
    });
  }
}
