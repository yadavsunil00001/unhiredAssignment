var mongoose = require( 'mongoose' );
var collegeschema=mongoose.Schema({
	college_name:{
		type:String
	},
	degree:{
		type:[String]
	}
});

mongoose.model('college', collegeschema);
