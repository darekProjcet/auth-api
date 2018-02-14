const getTemplate = (email, token) => `<html>
                    <body>
                        <div style="padding: 50px 20px;">
                            <img style="margin-bottom: 20px;" src="http://edrop.io/images/edropBlue.png" alt="logo">
                            <p style="margin-bottom: 10px;font-weight: 700;">Link to change password: </span></p>
                            <p style="margin-bottom: 20px;font-weight: 700;">http://edrop.io/password/?email=${email}&key=${token}</p>
                            <p style="margin-bottom: 10px;">If the link does not work, paste it into your browser's address bar.</span></p>
                            <p style="max-width: 700px; font-size: 10px; margin-top:30px">This message was generated automatically by <a href="www.edrop.io">edrop.io.</a> Do not reply to this message.</p>    
                        </div>
                    </body>
                 </html>`;

export default getTemplate;
