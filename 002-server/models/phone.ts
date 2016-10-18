///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');
import bodyParser = require('body-parser');

export class Phones{

	// Phone Schema
	phonesSchema = new Mongoose.Schema({
		name:{
			type: String,
			required: true
		},
		description:{
			type: String
		},
		supported_by_shops:{
			type: String
		},
		screen:{
			type: String
		},
		picture_url:{
			type: String
		},
		create_date:{
			type: Date,
			default: Date.now
		}
	});

	Phones = module.exports = Mongoose.model('Phone', this.phonesSchema);

	// Get Phones
	module.exports.getPhones = function(callback, limit){
		Phones.find(callback).limit(limit);
	}

	// Get Phone
	module.exports.getShopById = function(id, callback){
		Phones.findById(id, callback);
	}

	// Add Phone
	module.exports.addShop = function(shop, callback){
		Phones.create(shop, callback);
	}

	// Update Phone
	module.exports.updateShop = function(id, shop, options, callback){
		var query = {_id: id};
		var update = {
			name: shop.name,
			address: shop.address,
			description: shop.description,
			logo_url: shop.author,
			banner_url: shop.banner_url,
			shop_url: shop.publisher,
		}
		Phones.findOneAndUpdate(query, update, options, callback);
	}

	// Delete Phone
	module.exports.removeBook = function(id, callback){
		var query = {_id: id};
		Phones.remove(query, callback);
	}
};
