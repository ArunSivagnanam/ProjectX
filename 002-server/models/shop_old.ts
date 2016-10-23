///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');
import express = require("express");


export class Shops{

	// Shop Schema
	private shopsSchema = new Mongoose.Schema({
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

	// Shops = Mongoose.model('Shop', this.shopsSchema);

	// Get Shops
	private getShops = function(callback, limit){
		Shops.find(callback).limit(limit);
	}

	// Get Shop
	private getShopById = function(id, callback){
		Shops.findById(id, callback);
	}

	// Add Shop
	private addShop = function(shop, callback){
		Shops.create(shop, callback);
	}

	// Update Shop
	private updateShop = function(id, shop, options, callback){
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
	private removeShop = function(id, callback){
		var query = {_id: id};
		Shops.remove(query, callback);
	}

    public API(app : express.Application){

        // Add Shop
        app.post('/api/shops', function(req, res){
            var shop = req.body;
            Shops.addShop(shop, function(err, shop){
                if(err){
                    throw err;
                }
                res.json(shop);
            });
        });

		// View Shop
        app.get('/api/shops', function(req, res){
            var shop = req.body;
            Shops.getShops(shop, function(err, shop){
                if(err){
                    throw err;
                }
                res.json(shop);
            });
        });
    }
};
