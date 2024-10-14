import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClientInstance, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
	const recipient = [
		{
			email: "daianaadepaula1@gmail.com",
		}
	];

	try {
		const response = await mailtrapClientInstance.send({
			from: sender,
			to: recipient,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
		});

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};

export const sendWelcomeEmail = async (email, name) => {
	const recipient = [
		{
			email: "daianaadepaula1@gmail.com",
		}
	];

	try {
		const response = await mailtrapClientInstance.send({
			from: sender,
			to: recipient,
			template_uuid: "ab390a83-2727-4978-9318-c389bdc3d114",
			template_variables: {
				company_info_name: "Auth Company",
				name: name
			}
		})

		console.log("Welcome email sent successfully", response)
	} catch (error) {
		console.error('Error sending welcome email ', error)

		throw new Error(`Error sending welcome email: ${error}`)
	}
}

export const sendPasswordResetEmail = async (email, resetURL) => {
	const recipient = [
		{
			email: "daianaadepaula1@gmail.com",
		}
	];

	try {
		const response = await mailtrapClientInstance.send({
			from: sender,
			to: recipient,
			subject: "Reset your email",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
		});

		console.log("Password reset successfully", response)

	} catch (error) {
		console.error('Error sending password reset email ', error)
		throw new Error(`Error sending password reset email: ${error}`)
	}
}

export const sendResetSuccessEmail = async (email) => {
	const recipient = [
		{
			email: "daianaadepaula1@gmail.com",
		}
	];

	try {
		const response = await mailtrapClientInstance.send({
			from: sender,
			to: recipient,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password Reset",
		});

		console.log("Password reset email sent successfully", response)

	} catch (error) {
		console.error('Error sending password reset success email ', error)
		throw new Error(`Error sending password reset success email: ${error}`)
	}
}