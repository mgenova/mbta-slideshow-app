import express from 'express';
import Slideshow from '../models/slideshowModel';


//import data from '../db/data.js';
let router = express.Router();


// Retrieve all slideshows
router.get('/', (req, res, next)=>{
    Slideshow.orderBy({index: "createdAt"}).run().then((result)=> {
        res.send(result);
    }).error((error)=>{
		handleError(error);
	});
});

// Retrieve a slideshow
router.get('/:id', (req, res, next)=>{
    Slideshow.get(req.params.id).run().then((result)=> {
        res.send(result);
    }).error((error)=>{
		handleError(error);
	});
});


// Create a new slideshow
router.post('/', (req, res, next)=>{
    var slideshow = new Slideshow(req.body);
    slideshow.save().then((result)=> {
        res.send(result);
    }).error((error)=>{
		handleError(error);
	});
});


// Delete a new slideshow
router.delete('/:id', (req, res, next)=>{
	Slideshow.get(req.body.id).run().then((sshow)=> {
		sshow.delete().then(function(result) {
			res.send(result);
		}).error((error)=>{
			handleError(error);
		});
	});
});


// Update a slideshow
router.put('/:id', (req, res, next)=>{
	Slideshow.get(req.params.id).run().then((slideshow)=> {

    if (req.body.title) {
        slideshow.title = req.body.title;
    }

	if(req.body.slideshow.slides){
		slideshow.slides = [];
		req.body.slideshow.slides.forEach((slide)=>{
			slideshow.slides.push(slide);
		});
	}

	if (req.body.description) {
        slideshow.description = req.body.description;
    }
    slideshow.createdAt = Date.now();
    // Save the Slideshow and check for errors
    slideshow.save().then((result)=> {
        res.send(result);
    }).error((error)=>{
		handleError(error);
	});
});
});

//Update slide in a slideshow
router.get('/:id/slide/:slideid', (req, res, next)=>{
	var slidehow = req.params.id;
	var slide = req.params.slideid;

	Slideshow.find({_id: slideshow}, (err, show)=>{
		show[0].slides.push(slide);

		Slideshow.save((err, show)=>{
			if(err){
				res.send({message: 'Update failed...'});
			}else{
				res.send({show: show, message: 'Update successful'});
			}
		})
	});
});




function handleError(err){
	 res.sendStatus(500).send({error:err});
}

export default router;






/*



app.post ('/api/v1/slideshow/:id/slide/:id', ); //update
app.delete('/api/v1/slideshow/:id/slide/:id',);

*/


/*
router.get('/:id/slide/:slideid', function(req, res){
	var slidehow = req.params.id;
	var slide = req.params.slideid;

	Slideshow.find({_id: slideshow}, function(err, show){
		show[0].slides.push(slide);

		Slideshow.save(function(err, show){
			if(err){
				res.send({message: 'Update failed...'});
			}else{
				res.send({show: show, message: 'Update successful'});
			}
		})
	});
});




module.exports = router;

htttp://localhost:3000/api/v1/slideshow/1/slide/987654
*/
