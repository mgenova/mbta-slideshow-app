import express from 'express';
//import data from '../db/data.js';
import Slide from '../models/slideModel';
let router = express.Router();




// Retrieve all slides
router.get('/', (req, res, next)=>{
	Slide.orderBy({index: "createdAt"}).run().then((result)=> {
           res.send(result);
    }).error((error)=>{
		handleError(error);
	});
});

// Retrieve a slide
router.get('/:id', (req, res, next)=> {
	Slide.get(req.params.id).run().then((result)=> {
	   res.send(result);
   }).error((error)=>{
	   handleError(error);
   });
});


// Create a new slide
router.post('/', (req, res, next)=> {
	var slide = new Slide(req.body);
	    slide.save().then((result)=> {
	        res.send(result);
	    }).error((error)=>{
			handleError(error);
		});
});


// Delete a new slide
router.delete('/:id', (req, res, next)=> {
	Slide.get(req.body.id).run().then((slide)=> {
    	slide.delete().then((result)=> {
      	res.send(result);
    	}).error((error)=>{
			handleError(error);
		});
	});
});



// Update a slide
router.put('/:id', (req, res, next)=> {
	Slide.get(req.params.id).run().then((slide)=> {

    if (req.body.title) {
        slide.title = req.body.title;
    }
    if (req.body.image) {
        slide.image = req.body.image;
    }
    if (req.body.alt) {
        slide.alt = req.body.alt;
    }
    if (req.body.caption) {
        slide.caption = req.body.caption;
    }
    slide.createdAt = Date.now();

    // Save the slide and check for errors
    slide.save().then((result)=> {
        }).error((error)=>{
			handleError(error);
		});
	});
});


function handleError(err){
	 res.sendStatus(500).send({error:err});
}

export default router;
