import { mailOptions,transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;
        if( !data.name || !data.email || !data.number || !data.message) {
            return res.status(400).json({ error: 'Bad Request' });
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "NEW MESSAGE",
                html: `<h1>Name:</h1> ${data.name}.<br><h1>Email:</h1> ${data.email}.<h1>Number:</h1> ${data.number}.<h1>Message:</h1> ${data.message}.`
            })

            return res.status(200).json({ message: 'Email sent' });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error.message });
        }
    }
    return res.status(400).json({ error: 'Bad Request' });
}

export default handler;