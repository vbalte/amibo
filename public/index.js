const path = require("path");
const express = require("express")
const app = express();
const hbs = require("hbs")

//define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
//setup hanlebars engine 
app.set("view engine", "hbs")//Telling express/NODE to use handlebars for templates
app.set("views", viewsPath)//telling express to get templates from templates/views folder
hbs.registerPartials(partialsPath)
//set up out static asset directory 
app.use(express.static(publicDirectoryPath))
app.get("", async (req, res) => {
    try {
        res.render("index", {
            title: "Our First Express App"
        })
    } catch {
        res.status(500).send()
    }
})

app.get("/thamisucks", (req, res) => {
    res.send("Thami Sucks")
})


app.get("/about/:id", async (req, res) => {
    const name = req.params.id
    try {
        res.render("index", {
            title: `${name}`
        })
    } catch {
        res.status(500).send()

    }
})

app.get("/thamisucks", (req, res) => {
    res.send("Thami Sucks")
})

app.get("/swag", async (req, res) => {
    const name = req.params.id
    try {
        res.render("swag")
    } catch {
        res.status(500).send()
    }
})

app.get("/thamisucks", (req, res) => {
    res.send("Thami Sucks")
})






app.listen(3000, (req, res)=> {
    console.log('listening on port 3000')
    console.log(viewsPath)
})
