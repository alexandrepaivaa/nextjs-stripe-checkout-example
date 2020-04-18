
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		line_items: [
			{
				name: "T-shirt",
				description: "Comfortable cotton t-shirt",
				images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"],
				amount: 599,
				currency: "usd",
				quantity: 3
			}
		],
		success_url: "http://localhost:3000/success",
		cancel_url: "http://localhost:3000/cancel"
	})

	res.json(session)
}
