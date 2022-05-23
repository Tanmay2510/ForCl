import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import multer from "multer"
import  Grid  from "gridfs-stream"
import {GridFsStorage} from "multer-gridfs-storage"
import path ,{resolve} from "path"
import Pusher from "pusher"
import bodyParser from "body-parser"
const {Promise} =mongoose;

Grid.mongo = mongoose.mongo;


//app config
const app = express();
const port = process.env.PORT || 9000;


//middlewares
app.use(bodyParser.json());
app.use(cors());


//db config
//fbdb our db name
const mongoUri = 'mongodb+srv://admin:WJ0VKnp9NDwkYZzl@cluster0.lvadn.mongodb.net/fbdb?retryWrites=true&w=majority'

const conn = mongoose.createConnection(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

mongoose.connection.once('open',()=>{
    console.log("Db connected1");
})
let gfs;
let gridFSBucket;
conn.once('open',()=>{
    console.log("DB conn")
    gfs = Grid(conn.db,mongoose.mongo)
    gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'immages'
      });
    //immages our collection name
    gfs.collection("immages");
})

//saving our first image in mongodb
 var storage = new GridFsStorage({
    url:mongoUri,
    file: (req,file)=>{
        return new Promise((resolve,reject)=>{
            {
   const  filename =`image-${Date.now()}${path.extname(file.originalname)}`
             const fileinfo={
                 filename:filename,
                 bucketName:'immages'

            }
            resolve(fileinfo);

            }
        })
    
    }
})

const upload = multer({storage});
//api config
app.get('/',(req,res)=>{
    res.status(200).send("Hello world");
})

app.post('/upload/image',upload.single('file'),(req,res)=>{
    res.status(201).send(req.file);
})

app.get('/retrieve/image/single',(req,res)=> {
    //well be passing with every single req a name
    //and that's gonna be the filename that we 
    //wanna retrieve
    //req.query is a request object that is populated by request query strings that are found in a URL
    // req. params contains route parameters (in the path portion of the URL)
    gfs.files.findOne({filename: req.query.name},(err,file)=>{
        if(err){
            res.status(500).send(err)
        }else if(!file || file.length ===0){
            res.status(404).json({err:'file not found'})
        }else{
            //pass in which file do we wnna find
            //cRS is used to stream the data out gfs
            // const readstream = gridfsBucket.openDownloadStream(file.filename);
            

            const readstream=  gridFSBucket.openDownloadStreamByName(file.filename);
            // const readstream = gfs.createReadStream(file.filename);
            //
            readstream.pipe(res);
        }
    })
})
// listen
app.listen(port, () =>{
    console.log(`App is listening on ${port}`)
})