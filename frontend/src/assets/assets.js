import tv_1 from './tv_1.jpg'
import tv_2 from './tv_2.jpg'
import wm_1 from './wm_1.png'
import wm_2 from './wm_2.png'
import wm_3 from './wm_3.png'
import logo from './logo.png'
import profile_icon from './profile_icon.png'
import search from './search.png'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.jpg'
import dropdown_icon from './dropdown_icon.png'
import hero_img from './hero_img.png'
// import tv_1 from './tv_1.jpg'


export const assets = {
    logo,
    search,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
    hero_img,
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