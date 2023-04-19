

const productsArray = [
    {
        id: "",
        title:"Indominous Rex",
        price: 45.99
    },
    {
        id: "",
        title: "Megaraptor",
        price: 33.99
    },
    {
        id:"",
        title: "Pyroraptor",
        price: 35.99
    },
    {
        id:"",
        title: "Spinosaurus",
        price: 29.99
    },
    {
        id:"",
        title: "Velociraptor",
        price: 20.99
    },
    {
        id:"",
        title: "Ankylosaurus",
        price: 39.99
    },
    {
        id:"",
        title: "Brachiosaurus",
        price: 79.99
    },
    {
        id:"",
        title: "Parasaurolophus",
        price: 29.99
    },
    {
        id:"",
        title: "Stegosaurus",
        price: 35.99
    },
    {
        id:"",
        title: "Triceratops",
        price: 39.99
    },
    {
        id:"",
        title: "Dimorphodon",
        price: 49.99
    },
    {
        id:"",
        title: "Pteranodan",
        price: 33.99
    },
    {
        id:"",
        title: "Quetzalcoatlus",
        price: 35.99
    },
    {
        id:"",
        title: "Ramphorhynchus",
        price: 35.99
    },
    {
        id:"",
        title: "Tapejara",
        price: 29.99
    },
    {
        id:"",
        title: "Dunklesteus",
        price: 29.99
    },
    {
        id:"",
        title: "Liopluerodon",
        price: 39.99
    },
    {
        id:"",
        title: "Megalodon",
        price: 33.99
    },
    {
        id:"",
        title: "Mosasaurus",
        price: 39.99
    },
    {
        id:"",
        title: "Plesiosaurus",
        price: 35.99
    }
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id)

    if(productData === undefined){
        console.log("Product data does not exist for ID" + id)
        return undefined;
    }

    return productData
}

export { productsArray, getProductData };