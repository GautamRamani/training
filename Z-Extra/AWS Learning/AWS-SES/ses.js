const aws = require("aws-sdk")
const env = require("dotenv")
const {nanoid}=require("nanoid")
env.config();

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEYID,
    secretKeyId: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
}

const SES = new aws.SES(awsConfig)

const sendEmail = async () => {
    const email = process.env.EMAIL_FROM
    const shortCode=nanoid(6).toUpperCase();
    try {
        //Prepare email to send

        const params = {
            Source: email,
            Destination: {
                ToAddresses: [email]
            },
            Message: {
                Subject: {
                    Data: `Send Email With AWS SES Service`
                },
                Body: {
                    Html: {
                        Chatset: "UTF-8",
                        Data: `<h1>Your Varification code is ${shortCode}</h1>`
                    }
                }
            }
        }

        const emailSent = await SES.sendEmail(params).promise();

        emailSent.then(data => {
            console.log("Email sent successfully", data)
        })
            .catch(err => {
                console.log(err)
            })
    } catch (error) {
        console.log(error)
    }
}

module.exports=sendEmail;