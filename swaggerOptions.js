import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: "Authentication API",
			version: "1.0.0",
			description: "API for user authentication (signup, login, logout, etc.)",
			contact: {
				name: 'Daiana de Paula',
				email: 'daianaadepaula1@gmail.com',
			},
		},
		servers: [
			{
				url: "http://localhost:3000",
				description: "Local server",
			},
		],
	},
	apis: ['./backend/routes/*.js'],
};

export default swaggerJsDoc(swaggerOptions);
