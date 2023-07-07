use Day_1_Task;

switched to db Day_1_Task

//1. Find all the information about each products

		db.products.find({},{_id:0});

//2. Find the product price which are between 400 to 800

		db.products.find({$and : [{product_price:{$gte:400}},{product_price:{$lte:800}}]});
	
//3. Find the product price which are not between 400 to 600

		db.products.find({$or: [{ product_price: { $lt: 400 } }, { product_price: { $gt: 600 } }]});

//4. List the four product which are grater than 500 in price 
		
		db.products.find({ product_price: { $gte: 500 } }, { _id: 0 });
		
//5. Find the product name and product material of each products

		db.products.find({}, { _id: 0, product_name: 1, product_material: 1 });
		
//6. Find the product with a row id of 10

		db.products.find({id:{$eq:"10"}});

//7. Find only the product name and product material

		db.products.find({ id: "10" }, { _id: 0, product_name: 1, product_material: 1 });

//8. Find all products which contain the value of soft in product material 

		db.products.find({ product_material: "Soft" });

//9. Find products which contain product color indigo  and product price 492.00

		db.products.find({ product_price: 492, product_color: "indigo" });
		
//10. Delete the products which product price value are same

		db.products
			.aggregate([
				{ $group: { _id: "$product_price", count: { $sum: 1 } } },
				{ $match: { count: { $gt: 1 } } },
			])
			.forEach((doc) => {
				db.products.deleteMany({ product_price: doc._id });
			});