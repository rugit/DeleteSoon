var express 	= require("express"),
app 		    = express(),
bodyParser 		= require("body-parser"),
mongoose 		= require("mongoose");


app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/feedback_app", { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

var feedbackSchema = new mongoose.Schema({
	name: String,
	email: String,
	subject: String,
	message: String
});


var Feed = mongoose.model("FeedBack", feedbackSchema);


app.post("/feedback", function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var subject = req.body.subject;
	var message = req.body.message;

	var newFeed = {name:name, email:email, subject:subject, message:message};
	console.log(newFeed);
	Feed.create(newFeed , function(err, newCreated){
			if(err){
				console.log(err);
			}else{
				res.redirect("http://0.0.0.0/file:///home/ruru/bootcamp/TestingFrontEnd/index.html");
			}
		
	});
});

app.listen(3000, function(){
	console.log("Blog started");
});
