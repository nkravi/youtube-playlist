var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

if(process.env.ENV === "developement")
	mongoose.connect('mongodb://localhost/youtube-db');
else
	mongoose.connect(process.env.DB_CONN);


var youtubeModel = new Schema({
	_id:String,
	name:String,
	url:String,
	tags:[String],
	rating:Number
});

module.exports  = mongoose.model('you-tube',youtubeModel);