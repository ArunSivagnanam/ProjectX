///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');


export class Shops{

	// Shop Schema
	shopsSchema = new Mongoose.Schema({
		name:{
			type: String,
			required: true
		},
		address:{
			type: String,
			required: true
		},
		description:{
			type: String
		},
		supported_phones:{
			type: String
		},
		logo_url:{
			type: String
		},
		banner_url:{
			type: String
		},
		shop_url:{
			type: String
		},
		create_date:{
			type: Date,
			default: Date.now
		}
	});

	Shops = module.exports = Mongoose.model('Shop', this.shopsSchema);

	// Get Shops
	getShops = function(callback, limit){
		Shops.find(callback).limit(limit);
	}

	// Get Shop
	getShopById = function(id, callback){
		Shops.findById(id, callback);
	}

	// Add Shop
	public addShop = function(shop, callback){
		Shops.create(shop, callback);
	}

	// Update Shop
	updateShop = function(id, shop, options, callback){
		var query = {_id: id};
		var update = {
			name: shop.name,
			address: shop.address,
			description: shop.description,
			logo_url: shop.author,
			banner_url: shop.banner_url,
			shop_url: shop.publisher,
		}
		Shops.findOneAndUpdate(query, update, options, callback);
	}

	// Delete Shop
	public removeShop = function(id, callback){
		var query = {_id: id};
		Shops.remove(query, callback);
	}
};
