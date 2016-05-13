import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import slideRoutes from './routes/slideRoutes';
import slideshowRoutes from './routes/slideshowRoutes';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(helmet());
app.use(compression());

//App routes
app.use(express.static('app'));
//app.use('/users', users);
//app.use('/auth', auth);
app.use('/api/v1/slide', slideRoutes);
app.use('/api/v1/slideshow', slideshowRoutes);



app.get('*', (req, res, next)=>{
	res.sendFile(__dirname + 'app/index.html');
});

app.listen(3000);
