import express,{Request, Response} from "express";
import path from "path";
import mustache from "mustache-express"
import mainRoutes from './routes'
import dotenv from 'dotenv'

dotenv.config()

const server = express();

server.set('view engine', 'mustache');
server.set('views',path.join(path.join(__dirname,'views')));
server.engine('mustache',mustache())

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({extended:true}));
server.use('/node_modules', express.static(__dirname + '/node_modules'));

server.use('/',mainRoutes)

server.use((req: Request, res: Response) => {
    res.render('pages/404')
})


server.listen(process.env.PORT)