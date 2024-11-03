import tv_1 from './tv_1.jpg'
import tv_2 from './tv_2.jpg'
import wm_1 from './wm_1.jpg'
import wm_2 from './wm_2.jpg'
import wm_3 from './wm_3.jpg'
// import tv_1 from './tv_1.jpg'


export const assets = {
    tv_1,
    tv_2,
    wm_1,
    wm_2,
    wm_3,
}

export const products = [{
    _id: " aaaaa",
    name: "Samsumg 32 inch tv",
    description: " A hitech television to enjoy your weekend",
    price: 20000,
    image: [tv_1, tv_2],
    category: "Electronics",
    subCategory: "television",
    bestSeller: true


},
{
    _id: "aaaab",
    name:"LG Washing Machine",
    description: "A hitech technology to clean your dirty clothes",
    price: 30000,
    image: [wm_1,wm_2,wm_3],
    category:"Home Appliances",
    subCategory: "Washing Machine",
    bestSeller: true
}
]