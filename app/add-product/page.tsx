"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { HexColorPicker, HexColorInput } from "react-colorful";

const country = [
	{ value: "others", label: "Others" },
	{ value: "germany", label: "Germany" },
	{ value: "italy", label: "Italy" },
	{ value: "spain", label: "Spain" },
	{ value: "france", label: "France" },
	{ value: "brazil", label: "Brazil" },
];

const category = [
	{ value: "shirt", label: "Shirt" },
	{ value: "pants", label: "Pants" },
	{ value: "glove", label: "Glove" },
	{ value: "shoes", label: "Shoes" },
];

const size = [
	{ value: "N/A", label: "N/A" },
	{ value: "XS", label: "XS" },
	{ value: "S", label: "S" },
	{ value: "M", label: "M" },
	{ value: "L", label: "L" },
	{ value: "XL", label: "XL" },
];

interface Product {
	country: string;
	name: string;
	description: string;
	price: number;
	image: string[];
	color?: string[];
	currency: string;
	category: string[];
	size?: string[];
}

export default function Page() {
	const [colorArr, setColorArr] = useState<string[]>([]);

	const addColorBtnClicked = (value: string) => {
		setColorArr((prev) => [...prev, value]);
	};

	const removeColor = (col: string) => {
		setColorArr((prev) => prev.filter((color) => color !== col));
	};

	const enterSameProduct = (country: string) => {
		let currency = "";
		switch (country) {
			case "Brazil":
				currency = "R$";
				break;
			default:
				currency = "€";
				break;
		}
		reset({
			country: { value: country.toLowerCase(), label: country },
			currency: currency,
			name: "",
			description: "",
			price: "",
		});
	};

	const enterNewProduct = () => {
		setColorArr([]);
		reset({
			name: "",
			description: "",
			price: "",
			currency: "",
			country: { value: "others", label: "Others" },
			image1: "",
			image2: "",
			image3: "",
			image4: "",
			category: null,
			size: null,
		});
	};

	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => {
		console.log(data);
		const product = { ...data };
		product.category = product.category.map(
			(obj: { [key: string]: string }) => obj.value
		);
		product.size = product.size.map(
			(obj: { [key: string]: string }) => obj.value
		);
		product.country = product.country.value;
		product.image = [];
		product.image1 && product.image.push(product.image1);
		product.image2 && product.image.push(product.image2);
		product.image3 && product.image.push(product.image3);
		product.image4 && product.image.push(product.image4);
		delete product.image1;
		delete product.image2;
		delete product.image3;
		delete product.image4;
		if (colorArr.length !== 0) product.color = colorArr;
		const finalProduct: Product = product;
		console.log(finalProduct);
	};
	console.log(errors);

	const customStyle: React.CSSProperties = {
		width: "200px",
	};

	return (
		<div className="container mx-auto p-4">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-gray-300 p-8 rounded-lg shadow-md mx-auto"
			>
				<div className="feilds-container">
					<div>
						{/* Country */}
						<div className="mb-4">
							<label
								htmlFor="country"
								className="block text-gray-700 font-bold mb-2"
							>
								Country
							</label>
							<Controller
								name="country"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<Select
										{...field}
										options={country}
										id="long-value-select"
										instanceId="long-value-select"
									/>
								)}
							/>
							{errors.country && (
								<p className="errorMsg">This is a required field.</p>
							)}
						</div>

						{/* Name */}
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-gray-700 font-bold mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								placeholder="Enter product name"
								{...register("name", { required: true })}
								className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
							/>
						</div>

						{/* Description */}
						<div className="mb-4">
							<label
								htmlFor="description"
								className="block text-gray-700 font-bold mb-2"
							>
								Description
							</label>
							<input
								type="text"
								id="description"
								placeholder="Enter a description"
								{...register("description", { required: true })}
								className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
							/>
						</div>

						{/* Price */}
						<div className="mb-4">
							<label
								htmlFor="price"
								className="block text-gray-700 font-bold mb-2"
							>
								Price
							</label>
							<input
								type="number"
								step={0.01}
								id="price"
								placeholder="Enter the price"
								{...register("price", { required: true })}
								className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
							/>
						</div>
					</div>

					<div>
						{/* Image */}
						<div className="mb-4">
							<label
								htmlFor="image1"
								className="block text-gray-700 font-bold mb-2"
							>
								Image 1
							</label>
							<input
								type="url"
								id="image1"
								placeholder="Enter image URL"
								{...register("image1", { required: true })}
								className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="image2"
								className="block text-gray-700 font-bold mb-2"
							>
								Image 2
							</label>
							<input
								type="url"
								id="image2"
								placeholder="Enter image URL"
								{...register("image2")}
								className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="image3"
								className="block text-gray-700 font-bold mb-2"
							>
								Image 3
							</label>
							<input
								type="url"
								id="image3"
								placeholder="Enter image URL"
								{...register("image3")}
								className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="image4"
								className="block text-gray-700 font-bold mb-2"
							>
								Image 4
							</label>
							<input
								type="url"
								id="image4"
								placeholder="Enter image URL"
								{...register("image4")}
								className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
							/>
						</div>
					</div>

					<div>
						{/* Selected Colors */}
						<div className="mb-4 selectedColorCon">
							{colorArr &&
								colorArr.map((color, i) => (
									<div key={i}>
										<div
											className="value"
											style={{ borderLeftColor: color }}
											onClick={() => removeColor(color)}
										></div>
									</div>
								))}
						</div>

						{/* Color */}
						<div className="mb-4">
							<Controller
								name="color"
								control={control}
								defaultValue="123456"
								render={({ field: { onChange, value } }) => (
									<div>
										<HexColorPicker
											color={value}
											onChange={(newColor) => {
												onChange(newColor);
											}}
										/>
										<HexColorInput
											color={value}
											onChange={(newColor) => {
												onChange(newColor);
											}}
											style={customStyle}
										/>
										<div className="addColorBtnCon">
											<div
												className="value"
												style={{ borderLeftColor: value }}
											></div>
											<input
												type="button"
												value="+"
												className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded cursor-pointer"
												onClick={() => addColorBtnClicked(value)}
											/>
										</div>
									</div>
								)}
							/>
						</div>
					</div>

					<div>
						{/* Currency */}
						<div className="mb-4">
							<label className="block text-gray-700 font-bold mb-2">
								Currency
							</label>
							<div className="flex">
								<label className="mr-4">
									<input
										type="radio"
										value="$"
										{...register("currency", { required: true })}
										className="mr-2"
									/>
									$
								</label>
								<label className="mr-4">
									<input
										type="radio"
										value="€"
										{...register("currency", { required: true })}
										className="mr-2"
									/>
									€
								</label>
								<label>
									<input
										type="radio"
										value="R$"
										{...register("currency", { required: true })}
										className="mr-2"
									/>
									R$
								</label>
							</div>
						</div>

						{/* Category */}
						<div className="mb-4">
							<label
								htmlFor="category"
								className="block text-gray-700 font-bold mb-2"
							>
								Category
							</label>
							<Controller
								name="category"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<Select
										{...field}
										isMulti
										options={category}
										id="long-value-select"
										instanceId="long-value-select"
									/>
								)}
							/>
							{errors.category && (
								<p className="errorMsg">This is a required field.</p>
							)}
						</div>

						{/* Size */}
						<div className="mb-4">
							<label
								htmlFor="size"
								className="block text-gray-700 font-bold mb-2"
							>
								Size
							</label>
							<Controller
								name="size"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<Select
										{...field}
										isMulti
										options={size}
										id="long-value-select"
										instanceId="long-value-select"
									/>
								)}
							/>
							{errors.size && (
								<p className="errorMsg">This is a required field.</p>
							)}
						</div>
					</div>
				</div>

				<div className="mb-4">
					<input
						type="submit"
						value="Submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
					/>
				</div>

				<div className="btn-container">
					<button
						onClick={() => enterSameProduct("Germany")}
						className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow button-effect transition "
					>
						Enter for Germany
					</button>
					<button
						onClick={() => enterSameProduct("France")}
						className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow button-effect transition "
					>
						Enter for France
					</button>
					<button
						onClick={() => enterSameProduct("Italy")}
						className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow button-effect transition "
					>
						Enter for Italy
					</button>
					<button
						onClick={() => enterSameProduct("Spain")}
						className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow button-effect transition "
					>
						Enter for Spain
					</button>
					<button
						onClick={() => enterSameProduct("Brazil")}
						className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow button-effect transition "
					>
						Enter for Brazil
					</button>
					<button
						onClick={() => enterNewProduct()}
						className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow button-effect transition "
					>
						Enter new Product
					</button>
				</div>
			</form>
		</div>
	);
}
