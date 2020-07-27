const puppeteer = require("puppeteer");
const bodyParser =require("body-parser");

var express = require("express");

var app = express();
app.use(bodyParser.json());
 

class pup{

    googlefun(search)

    {
        (async () => {
            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
            // Instructs the blank page to navigate a URL
            await page.goto('https://google.com');
            // Fetches page's title
          const title = await page.title();
            console.info(`The title is: ${title}`);
            console.log(search);
            await browser.close();
          });  

    }

}

 

app.listen(8092, () => {

 console.log("Server running on port 8092");

});

app.post("/url", (req, res) => {

    const reqwest1 = req.body;

    // let  jsonContent = JSON.parse(req.body);

    // console.log("User Name:", jsonContent);
    var jsonObj = req.body;
console.log(JSON.stringify(jsonObj.name));

    console.log(reqwest1);
    
    console.log(req.body);

//     let  search ="Hi";

// let p = new pup();

// p.googlefun("Raj");


    //   res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    const puppeteer = require('puppeteer')
    const fnsArr = [
        `hello = () => {

            return "Hello"

        }`,

        `returnX = (x) => {

            return x + " Bulb"

        }`    

    ]

    const run = async() =>{

        const browser = await puppeteer.launch({headless : false});

        const page = await browser.newPage();

        await page.goto('https://www.google.com/');

        const ans = await page.evaluate((arr)=>{

            const fn1 = eval(arr[1]);

            let x = "You are Awesome"

            return fn1(x);

        },fnsArr)
    //    await page.type(ans);
//     await page.focus('#q')
// await page.keyboard.type(ans)
await page.type('input[name=q]', jsonObj.name, {delay: 20})

console.log(ans);

        
      

    }

    run();
    console.log(reqwest1);
 
res.send("From Server");

   });