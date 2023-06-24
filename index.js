const nodemailer = require("nodemailer");
require("dotenv").config();
exports.enviar = async () => {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.CORREO,
                pass: process.env.PASSWORD,
            },
        });

        let mailOptions = {
            from: process.env.CORREO,
            to: [
                "brito.moreau@gmail.com"
            ],
            subject: "Clase node mailer",
            html: "<h1>imagen muñeco</h1>",
            attachments: [
                {
                    filename: "Muñeco.png",
                    path: "./assets/img/Muñeco.png",
                },
            ],
        };

        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        throw new Error("El correo electornico no pudo ser enviado");
    }
};
