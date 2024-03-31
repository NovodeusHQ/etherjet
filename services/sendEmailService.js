'use server'

import nodemailer from "nodemailer";

const getDateTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // const seconds = date.getSeconds();

    var currentTime;

    if (hours > 12) {
        const hrs = hours - 12;
        currentTime = `${hrs.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} PM`;
    } else {
        currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} AM`;
    }


    const currentDateTime = `${currentTime} - ${day} ${month} ${year}`;
    return currentDateTime
}

const sendEmailService = async (formData, formType) => {

    const name = formData.get('name');
    const email = formData.get('email');
    const telegram = formData.get('telegram');
    const companyUrl = formData.get('companyURL');
    const formMessage = formData.get('message');
    const budget = formData.get('budget');
    const services = formData.get('services');


    const emailTemplate =
        `
<div style="margin:0;padding:0;background-color:#ffffff">
        <table bgcolor="#ffffff" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;vertical-align:top;min-width:320px;border-spacing:0;border-collapse:collapse;background-color:#ffffff;width:100%" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align:top" valign="top">
              <td style="word-break:break-word;vertical-align:top" valign="top">

              <div style="background-color:transparent">
                  <div class="m_7988144074402577603block-grid" style="min-width:320px;max-width:600px;word-wrap:break-word;word-break:break-word;Margin:0 auto;background-color:#ffffff">
                  <div style="border-collapse:collapse;display:table;width:100%;background-color:#ffffff">


                      <div class="m_7988144074402577603col" style="min-width:320px;max-width:600px;display:table-cell;vertical-align:top;width:600px">
                      <div class="m_7988144074402577603col_cont" style="width:100%!important">

                          <div style="border-top:0px solid transparent;border-left:0px solid transparent;border-bottom:0px solid transparent;border-right:0px solid transparent;padding-top:5px;padding-bottom:5px;padding-right:0px;padding-left:0px">


                          <div style="color:#555555;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.2;padding-top:30px;padding-right:25px;padding-bottom:0px;padding-left:25px">
                              <div style="line-height:1.2;font-size:12px;color:#555555;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
                              <p style="margin:0;font-size:24px;line-height:1.2;word-break:break-word;margin-top:0;margin-bottom:0">
                                  <span style="font-size:24px"><strong>New ${formType === 'contact' ? 'Contact Form' : 'Proposal'} Submission</strong></span>
                              </p>
                              </div>
                          </div>


                          <div style="color:#555555;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.2;padding-top:10px;padding-right:25px;padding-bottom:30px;padding-left:25px">
                              <div style="line-height:1.2;font-size:12px;color:#555555;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
                              <p style="margin:0;font-size:14px;line-height:1.2;word-break:break-word;margin-top:0;margin-bottom:0">
                                  Someone just submitted a ${formType === 'contact' ? 'contact form' : 'proposal'} on <a href="https://etheredgemedia.com" target="_blank" data-saferedirecturl="https://etheredgemedia.com">etheredgemedia.<wbr>com</a>. Here's what they had to say:
                              </p>
                              </div>
                          </div>

                          <div style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
                              <div style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
                              <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                                  <span style="color:#999999">Name</span>
                              </p>
                              <span style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                                      ${name}
                              </span>
                              </div>
                          </div>

                          <div style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
                              <div style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
                              <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                                  <span style="color:#999999">Email</span>
                              </p>
                              <span style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">

                                      <a href="mailto:${email}" target="_blank">${email}</a>

                              </span>
                              </div>
                          </div>

                          <div style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
                              <div style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
                              <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                                  <span style="color:#999999">Telegram/Whatsapp</span>
                              </p>
                              <span style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">

                                    ${telegram}

                              </span>
                              </div>
                          </div>

                          <div style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
                              <div style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
                              <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                                  <span style="color:#999999">Company URL</span>
                              </p>
                              <span style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">

                                      ${companyUrl}

                              </span>
                              </div>
                          </div>

                          <div style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
                              <div style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
                              <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                                  <span style="color:#999999">Message</span>
                              </p>
                              <span style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">

                                      ${formMessage}

                              </span>
                              </div>
                          </div>

                          ${formType === 'contact' ?
                          `
                          <div style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
                              <div style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
                              <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                                  <span style="color:#999999">Project Budget</span>
                              </p>
                              <span style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">

                                      ${budget}

                              </span>
                              </div>
                          </div>

                          <div style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
                              <div style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
                              <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                                  <span style="color:#999999">Selected Services</span>
                              </p>
                              <span style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">

                                      ${services}

                              </span>
                              </div>
                          </div>
                          ` : ''}

                          </div>

                      </div>
                      </div>


                  </div>
                  </div>
              </div>
              <div style="background-color:transparent">
                  <div class="m_7988144074402577603block-grid" style="min-width:320px;max-width:600px;word-wrap:break-word;word-break:break-word;Margin:0 auto;background-color:#ffffff">
                  <div style="border-collapse:collapse;display:table;width:100%;background-color:#ffffff">


                      <div class="m_7988144074402577603col m_7988144074402577603num8" style="display:table-cell;vertical-align:top;max-width:320px;min-width:400px;width:400px">
                      <div class="m_7988144074402577603col_cont" style="width:100%!important">

                          <div style="border-top:0px solid transparent;border-left:0px solid transparent;border-bottom:0px solid transparent;border-right:0px solid transparent;padding-top:15px;padding-bottom:5px;padding-right:15px;padding-left:15px">


                          <div style="color:#999;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">
                              <div style="line-height:1.2;font-size:12px;color:#999;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
                              <p style="margin:0;font-size:14px;line-height:1.2;word-break:break-word;margin-top:0;margin-bottom:0">
                                  Submitted ${getDateTime()}</p>
                              </div>
                          </div>

                          </div>

                      </div>
                      </div>
              </div>
              </td>
          </tr>
          </tbody>
      </table>
      </div>
`

    // console.log("in sendEmailService");

    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD
        }
    });

    const message = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        // to: [
        //     'Michaelvisn@gmail.com',
        //     'Digibuzzng@gmail.com',
        // ],
        to: ['polalekan@gmail.com', 'one.pelumi.guy@gmail.com'],
        subject: `New Entry - ${formType === 'contact' ? 'Contact' : 'Proposal'} Form`,
        html: emailTemplate
    }

    await transporter.sendMail(message);
    // console.log("After transporter sendMail");
}

export default sendEmailService;