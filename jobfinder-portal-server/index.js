const express = require('express');
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config()

const port = process.env.PORT || 5000;
const app = express()

app.use(express.json())
app.use(
    cors({ origin: 'https://job-finder.web.app' })
);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9kz3i.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect()
        const userCollection = client.db('jobFinder').collection('users')
        const jobsCollection = client.db('jobFinder').collection('jobs')
        const reviewsCollection = client.db('jobFinder').collection('reviews')

        // job post
        app.post('/jobs', async (req, res) => {
            const jobs = req.body.job;
            const result = await jobsCollection.insertOne(jobs);
            res.send(result)
        })
        // review post
        app.post('/reviews', async (req, res) => {
            const reviews = req.body.review;
            const result = await reviewsCollection.insertOne(reviews);
            res.send(result)
        })
        // review get
        app.get('/reviews', async (req, res) => {
            const result = await reviewsCollection.find().toArray();
            res.send(result.reverse())
        })
        // job get
        app.get('/jobs', async (req, res) => {
            const result = await jobsCollection.find().toArray();
            res.send(result.reverse())
        })

        // search job 
        app.get('/jobs/search', async (req, res) => {
            const query = req.query.title
            const filter = ({
                title: {
                    $regex: query,
                    $options: "i"
                }
            })
            const result = await jobsCollection.find(filter).toArray()
            res.send(result)
        })
        // job details 
        app.get('/jobs/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: ObjectId(id) }
            const result = await jobsCollection.findOne(query)
            res.send(result)
        })

        // user info save
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user)
            res.send(result)
        })

        // user info update
        app.patch('/users/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const updateDoc = {
                $set: { address: req.body.address, phoneNumber: req.body.phoneNumber }
            }
            const result = await userCollection.updateOne(filter, updateDoc);
            res.send(result);
        })

        //  user info add in requiter api
        app.patch('/jobs/:company', async (req, res) => {
            const company = req.params.company;
            const filter = { company: company };
            const users = req.body.user;
            const query = { company: company, users: { $in: [users] } }
            const exists = await jobsCollection.findOne(query)
            if (exists) {
                return res.send({ success: false, message: 'exists' })
            }
            const result = await jobsCollection.updateOne(filter, { $push: { users } });
            res.send(result);

        })
        //  education info add api
        app.patch('/users/education/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const educations = req.body.education;
            const result = await userCollection.updateOne(filter, { $push: { educations } });
            res.send(result);
        })

        // course info add api
        app.patch('/users/courses/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const courses = req.body.courses;
            const result = await userCollection.updateOne(filter, { $push: { courses } });
            res.send(result);
        })
        // experience info add api
        app.patch('/users/experiences/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const experiences = req.body.experience;
            const result = await userCollection.updateOne(filter, { $push: { experiences } });
            res.send(result);
        })
        // project info add api
        app.patch('/users/projects/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const projects = req.body.project;
            const result = await userCollection.updateOne(filter, { $push: { projects } });
            res.send(result);
        })
        // project info add api
        app.patch('/users/links/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const links = req.body.link;
            const result = await userCollection.updateOne(filter, { $push: { links } });
            res.send(result);
        })
        // project info add api
        app.patch('/users/skills/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const skills = req.body.skill;
            const result = await userCollection.updateOne(filter, { $push: { skills } });
            res.send(result);
        })

        // delete experiences
        app.put('/users/experiences/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const experience = req.body.experience;
            const result = await userCollection.updateOne(filter, { $pull: { experiences: { company: experience } } });
            res.send(result);
        })
        // delete link
        app.put('/users/links/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const link = req.body.link;
            const result = await userCollection.updateOne(filter, { $pull: { links: { name: link } } });
            res.send(result);
        })
        // delete skills
        app.put('/users/skills/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const skill = req.body.skill;
            const result = await userCollection.updateOne(filter, { $pull: { skills: { name: skill } } });
            res.send(result);
        })
        // delete project
        app.put('/users/projects/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const project = req.body.project;
            const result = await userCollection.updateOne(filter, { $pull: { projects: { name: project } } });
            res.send(result);
        })
        // delete education
        app.put('/users/education/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const degree = req.body.degree;
            const result = await userCollection.updateOne(filter, { $pull: { education: { degree: degree } } });
            res.send(result);
        })
        // delete course
        app.put('/users/courses/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const course = req.body.course;
            const result = await userCollection.updateOne(filter, { $pull: { courses: { name: course } } });
            res.send(result);
        })

        // get user by email
        app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const result = await userCollection.findOne(query);
            res.send(result);

        })
    }
    finally {

    }
}


app.get('/', (req, res) => {
    res.send('Hello From Server')
})

run().catch(console.dir);
app.listen(port, () => console.log('listening from', port))