const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
//app.use(express.json())

let recipes = [
    {
        "id": 1,
        "dishType": "rice",
        "image": "https://www.kitchensanctuary.com/wp-content/uploads/2021/03/Egg-fried-rice-square-FS-40.jpg",
        "title": "egg fried rice",
        "instructions": "cook that rice my guy",
        "ingredients" : [
            {
                "name": "egg",
                "id": 1
            },
            {
                "name": "rice",
                "id": 2
            },
            {
                "name": "oil",
                "id": 3
            },
            {
                "name": "black pepper",
                "id": 4
            },
            {
                "name": "garlic salt",
                "id": 5
            },
            {
                "name": "spring onions",
                "id": 6
            }
        ]
    },
    {
        "id": 2,
        "dishType": "noodles",
        "title": "chicken chow mein",
        "image": "https://www.wellplated.com/wp-content/uploads/2022/08/chicken-chow-mein-takeaway.jpg",
        "instructions": "cook that noodle for me bruh",
        "ingredients" : [
            {
                "name": "noodles"
            },
            {
                "name": "chicken"
            },
            {
                "name": "oil"
            },
            {
                "name": "onion salt"
            },
            {
                "name": "ginger"
            },
            {
                "name": "chicken stock"
            }
        ]
    },
    {
        "id": 3,
        "dishType": "soup",
        "title": "egusi soup",
        "image": "https://assets.epicurious.com/photos/5e2f6334b1633d0009d08cc4/4:3/w_3816,h_2862,c_limit/EgusiStew_HERO_011620_243.jpg",
        "instructions": "cook it for me one time",
        "ingredients" : [
            {
                "name": "okora"
            },
            {
                "name": "chicken stock"
            },
            {
                "name": "oil"
            }
        ]
    },
    {
        "id": 4,
        "dishType": "rice",
        "image": "https://mymorningmocha.com/wp-content/uploads/2021/11/How-to-make-easy-king-prawn-fried-rice.jpg",
        "title": "prawn stirfry rice",
        "instructions": "cook that rice my guy",
        "ingredients" : [
            {
                "name": "egg",
                "id": 1
            },
            {
                "name": "rice",
                "id": 2
            },
            {
                "name": "oil",
                "id": 3
            },
            {
                "name": "black pepper",
                "id": 4
            },
            {
                "name": "garlic salt",
                "id": 5
            },
            {
                "name": "spring onions",
                "id": 6
            }
        ]
    },
    {
        "id": 5,
        "dishType": "soup",
        "image": "https://www.littlebroken.com/wp-content/uploads/2019/12/Creamy-Chicken-and-Mushroom-Soup-15.jpg",
        "title": "chicken and mushroom soup",
        "instructions": "cook that soup my guy",
        "ingredients" : [
            {
                "name": "egg",
                "id": 1
            },
            {
                "name": "rice",
                "id": 2
            },
            {
                "name": "oil",
                "id": 3
            },
            {
                "name": "black pepper",
                "id": 4
            },
            {
                "name": "garlic salt",
                "id": 5
            },
            {
                "name": "spring onions",
                "id": 6
            }
        ]
    },
    {
        "id": 6,
        "dishType": "noodles",
        "image": "https://www.ambitiouskitchen.com/wp-content/uploads/2021/08/Crispy-Broccoli-Sweet-Spicy-Tahini-Noodles-5.jpg",
        "title": "sesame seed tahini noodles",
        "instructions": "cook that rice my guy",
        "ingredients" : [
            {
                "name": "egg",
                "id": 1
            },
            {
                "name": "rice",
                "id": 2
            },
            {
                "name": "oil",
                "id": 3
            },
            {
                "name": "black pepper",
                "id": 4
            },
            {
                "name": "garlic salt",
                "id": 5
            },
            {
                "name": "spring onions",
                "id": 6
            }
        ]
    }
]

const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
  }
  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

  app.get('/recipes/dishType/:dish', (request, response) => {
    const dishType = request.params.dish
    const riceDish = recipes.filter(dish => dish.dishType.includes(dishType))
    console.log(riceDish);
    if (riceDish){
        response.json(riceDish);
    } else {
        response.status(404).end()
      }
    

})

app.get('/recipes/searched/:search', (request, response) => {
    const searched = request.params.search
    const searchItem = recipes.filter(dish => dish.title.toLowerCase().includes(searched))
    console.log(searchItem);
    if (searchItem){
        response.json(searchItem);
    } else {
        response.status(404).end()
      }
})

app.get('/recipes/all', (request, response) => {
    console.log("hi")
    response.json(recipes);
})

app.get('/recipes/:id', (request, response) => {
    const requested = Number(request.params.id)
    const searchItem = recipes.find(dish => dish.id === requested)
    console.log(searchItem);
    if (searchItem){
        response.json(searchItem);
    } else {
        response.status(404).end()
      }
})



const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

