import { models } from "mongoose";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: [true, "Please provide product name...."],
			maxlength: [100, "Product name cannot be longer 100 characters...."],
		},
		description: {
			type: String,
			trim: true,
			required: [true, "Please provide product description...."],
			maxlength: [
				1000,
				"Product description cannot be longer than 1000 characters....",
			],
		},
		price: {
			type: Number,
			required: [true, "Please provide product price...."],
		},
		country: {
			type: String,
			required: [true, "Please provide company name...."],
			enum: {
				values: ["germany", "spain", "italy", "brazil", "france", "others"],
				message: "{VALUE} is not supported....",
			},
		},
		image: {
			type: [String],
			required: [true, "Please provide atleast one image...."]
		},
		color: {
			type: [String],
			default: ["N/A"]
		},
		currency: {
			type: String,
			required: [true, "Please provide the currency...."],
			enum: ["$", "R$", "€"]
		},
		category: {
			type: [String],
			required: [true, "Please provide product category...."],
		},
		size: {
			type: [String],
			required: [true, "Please provide with the avaliable sizes...."],
			default: ["N/A"]
		},
	},
	{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export const Product =
	models.Product || mongoose.model("Product", ProductSchema);
