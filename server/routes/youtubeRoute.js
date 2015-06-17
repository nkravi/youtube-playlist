var Youtube = require('../models/youtubeModel');

var youtube = function(route){
	route
	.get('/youtube',function(req,res){
		Youtube.find({},function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});	
	})
	.post('/youtube',function(req,res){
		var youtube = new Youtube(req.body);
		youtube.save(function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(201).send(data);
		});
	})
	.get('/youtube/:id',function(req,res){
		Youtube.findOne({_id:req.params.id},function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});
	})
	.put('/youtube/:id',function(req,res){
		Youtube.update({_id:req.params.id},req.body,function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});
	})
	.delete('/youtube/:id',function(req,res){
		Youtube.remove({_id:req.params.id},function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});
	});
}

module.exports = youtube;