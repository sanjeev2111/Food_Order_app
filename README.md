# First food order app

# first time i code this

/\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - ResturantCard
-       - Img , name of restro, star rating, cuisine, delivery time etc
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

const Header = () => {
return (
<div className="header">
<div className="logi-container">
<img
          className="logo"
          src="https://img.freepik.com/premium-vector/fast-food-delivery-logo-food-delivery-logo-design-template_664675-639.jpg"
          alt="food-delivery-logo"
        />
</div>
<div className="nav-items">
<ul>
<li>Home</li>
<li>About Us</li>
<li>Contact Us</li>
<li>Cart</li>
</ul>
</div>
</div>
);
};

const RestraurantCard = (props) => {
const { resData } = props;
const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
resData.info;
return (
<div className="res-card">
<img
className="res-logo"
src={
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
cloudinaryImageId
}
alt="restaurant-logo"
/>
<h3>{name}</h3>
<h4>{cuisines.join(", ")}</h4>
<h4>{costForTwo}</h4>
<h4>{avgRating} stars</h4>
<h4>{sla.deliveryTime} minutes</h4>
</div>
);
};

const resList = [
{
info: {
id: "10576",
name: "Pizza Hut",
cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹350 for two",
cuisines: ["Pizzas"],
avgRating: 4,
parentId: "721",
avgRatingString: "4.0",
totalRatingsString: "10K+",
sla: {
deliveryTime: 25,
lastMileTravel: 0.7,
serviceability: "SERVICEABLE",
slaString: "25 mins",
lastMileTravelString: "0.7 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-24 04:00:00",
opened: true,
},
badges: {},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹179",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
type: "WEBLINK",
},
},
{
info: {
id: "5934",
name: "Burger King",
cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹350 for two",
cuisines: ["Burgers", "American"],
avgRating: 4.3,
parentId: "166",
avgRatingString: "4.3",
totalRatingsString: "10K+",
sla: {
deliveryTime: 22,
lastMileTravel: 1.6,
serviceability: "SERVICEABLE",
slaString: "22 mins",
lastMileTravelString: "1.6 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-24 05:00:00",
opened: true,
},
badges: {},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹129",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
type: "WEBLINK",
},
},
{
info: {
id: "70246",
name: "Starbucks Coffee",
cloudinaryImageId: "182191ab163770437b62861a6f987709",
locality: "7th Block",
areaName: "Koramangala",
costForTwo: "₹400 for two",
cuisines: [
"Beverages",
"Cafe",
"Snacks",
"Desserts",
"Bakery",
"Ice Cream",
],
avgRating: 4.3,
parentId: "195515",
avgRatingString: "4.3",
totalRatingsString: "5K+",
sla: {
deliveryTime: 21,
lastMileTravel: 1.4,
serviceability: "SERVICEABLE",
slaString: "21 mins",
lastMileTravelString: "1.4 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-23 23:59:00",
opened: true,
},
badges: {
textExtendedBadges: [
{
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
fontColor: "#7E808C",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
},
},
],
},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/starbucks-coffee-7th-block-koramangala-bangalore-70246",
type: "WEBLINK",
},
},
{
info: {
id: "25620",
name: "KFC",
cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
locality: "Intermediate Ring Road",
areaName: "Ejipura",
costForTwo: "₹400 for two",
cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
avgRating: 4.2,
parentId: "547",
avgRatingString: "4.2",
totalRatingsString: "10K+",
sla: {
deliveryTime: 18,
lastMileTravel: 0.8,
serviceability: "SERVICEABLE",
slaString: "18 mins",
lastMileTravelString: "0.8 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-23 23:00:00",
opened: true,
},
badges: {},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
type: "WEBLINK",
},
},
{
info: {
id: "140887",
name: "McDonald's",
cloudinaryImageId: "405645b3118d83e89db4c65361e43733",
locality: "Mantri Avenue",
areaName: "Koramangala",
costForTwo: "₹400 for two",
cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
avgRating: 4.5,
parentId: "630",
avgRatingString: "4.5",
totalRatingsString: "5K+",
sla: {
deliveryTime: 20,
lastMileTravel: 1.4,
serviceability: "SERVICEABLE",
slaString: "20 mins",
lastMileTravelString: "1.4 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-23 23:00:00",
opened: true,
},
badges: {
textExtendedBadges: [
{
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
fontColor: "#7E808C",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
},
},
],
},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/mcdonalds-mantri-avenue-koramangala-bangalore-140887",
type: "WEBLINK",
},
},
{
info: {
id: "74444",
name: "Samosa Party",
cloudinaryImageId: "d8d4e708a41f011361c949d44990d5e0",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹100 for two",
cuisines: [
"Fast Food",
"Snacks",
"Beverages",
"Chaat",
"North Indian",
"Street Food",
"Sweets",
"Desserts",
"Punjabi",
"Bakery",
],
avgRating: 4.4,
parentId: "6364",
avgRatingString: "4.4",
totalRatingsString: "10K+",
sla: {
deliveryTime: 28,
lastMileTravel: 1.6,
serviceability: "SERVICEABLE",
slaString: "28 mins",
lastMileTravelString: "1.6 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-30 00:00:00",
opened: true,
},
badges: {
textExtendedBadges: [
{
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
fontColor: "#7E808C",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
},
},
],
},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
type: "WEBLINK",
},
},
{
info: {
id: "108424",
name: "Domino's Pizza",
cloudinaryImageId: "vw6n5betlssnqelt7rmu",
locality: "5TH Block",
areaName: "Koramangala",
costForTwo: "₹400 for two",
cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
avgRating: 4.4,
parentId: "2456",
avgRatingString: "4.4",
totalRatingsString: "5K+",
sla: {
deliveryTime: 25,
serviceability: "SERVICEABLE",
slaString: "25 mins",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-24 00:59:00",
opened: true,
},
badges: {},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/dominos-pizza-5th-block-koramangala-bangalore-108424",
type: "WEBLINK",
},
},
{
info: {
id: "263485",
name: "Chaayos Chai+Snacks=Relax",
cloudinaryImageId: "cace805a6ba74137571d0f7ac92302b1",
locality: "Kormangala 8th Block",
areaName: "Kormangala",
costForTwo: "₹250 for two",
cuisines: [
"Bakery",
"Beverages",
"Chaat",
"Desserts",
"Home Food",
"Italian",
"Maharashtrian",
"Snacks",
"Street Food",
"Sweets",
],
avgRating: 4.5,
parentId: "281782",
avgRatingString: "4.5",
totalRatingsString: "1K+",
sla: {
deliveryTime: 18,
lastMileTravel: 0.7,
serviceability: "SERVICEABLE",
slaString: "18 mins",
lastMileTravelString: "0.7 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-24 01:00:00",
opened: true,
},
badges: {
textExtendedBadges: [
{
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
fontColor: "#7E808C",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
},
},
],
},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-8th-block-kormangala-bangalore-263485",
type: "WEBLINK",
},
},
{
info: {
id: "50467",
name: "Bakingo",
cloudinaryImageId: "05994df0e49725bd230146c320b8f7aa",
locality: "1st Block",
areaName: "Koramangala",
costForTwo: "₹300 for two",
cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
avgRating: 4.3,
parentId: "3818",
avgRatingString: "4.3",
totalRatingsString: "5K+",
sla: {
deliveryTime: 27,
lastMileTravel: 2.1,
serviceability: "SERVICEABLE",
slaString: "27 mins",
lastMileTravelString: "2.1 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-24 01:00:00",
opened: true,
},
badges: {},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/bakingo-1st-block-koramangala-bangalore-50467",
type: "WEBLINK",
},
},
{
info: {
id: "41913",
name: "Chinita Real Mexican Food",
cloudinaryImageId: "29fc772cc06b07a4b018e4971d96c9a3",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹750 for two",
cuisines: ["Mexican", "Salads", "Desserts", "Beverages"],
avgRating: 4.5,
parentId: "5064",
avgRatingString: "4.5",
totalRatingsString: "5K+",
sla: {
deliveryTime: 21,
lastMileTravel: 0.4,
serviceability: "SERVICEABLE",
slaString: "21 mins",
lastMileTravelString: "0.4 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-23 23:00:00",
opened: true,
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Gourmet",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Gourmet",
imageId: "newg.png",
},
},
],
},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/chinita-real-mexican-food-koramangala-bangalore-41913",
type: "WEBLINK",
},
},
{
info: {
id: "158855",
name: "Candice's Gourmet Sandwiches & Wraps",
cloudinaryImageId: "d1331113564b015c9d55c48ff48a2553",
locality: "5th Block",
areaName: "Koramangala",
costForTwo: "₹600 for two",
cuisines: [
"Continental",
"American",
"Salads",
"Desserts",
"Beverages",
"Healthy Food",
],
avgRating: 4.5,
parentId: "465403",
avgRatingString: "4.5",
totalRatingsString: "1K+",
sla: {
deliveryTime: 22,
lastMileTravel: 0.4,
serviceability: "SERVICEABLE",
slaString: "22 mins",
lastMileTravelString: "0.4 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-23 23:00:00",
opened: true,
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Gourmet",
},
],
textExtendedBadges: [
{
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
fontColor: "#7E808C",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Gourmet",
imageId: "newg.png",
},
},
],
},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
},
},
],
},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-bangalore-158855",
type: "WEBLINK",
},
},
{
info: {
id: "321012",
name: "Brik Oven - Original Sourdough Pizzas",
cloudinaryImageId: "cfd91d48ef7c4056be69ec15720f03e7",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹700 for two",
cuisines: ["Italian", "Pizzas", "Desserts", "Beverages"],
avgRating: 4.4,
parentId: "488952",
avgRatingString: "4.4",
totalRatingsString: "5K+",
sla: {
deliveryTime: 29,
lastMileTravel: 1.7,
serviceability: "SERVICEABLE",
slaString: "29 mins",
lastMileTravelString: "1.7 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-23 23:45:00",
opened: true,
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Gourmet",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Gourmet",
imageId: "newg.png",
},
},
],
},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/brik-oven-original-sourdough-pizzas-koramangala-bangalore-321012",
type: "WEBLINK",
},
},
{
info: {
id: "450124",
name: "1522 - The Pub",
cloudinaryImageId: "qtbt4uwnp6honairbudc",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹600 for two",
cuisines: ["Chinese", "Indian"],
avgRating: 4,
parentId: "22885",
avgRatingString: "4.0",
totalRatingsString: "100+",
sla: {
deliveryTime: 28,
lastMileTravel: 0.8,
serviceability: "SERVICEABLE",
slaString: "28 mins",
lastMileTravelString: "0.8 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-23 23:59:00",
opened: true,
},
badges: {
textExtendedBadges: [
{
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
fontColor: "#7E808C",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
},
},
],
},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/1522-the-pub-koramangala-bangalore-450124",
type: "WEBLINK",
},
},
{
info: {
id: "107443",
name: "Lo! - Low Carb and Keto Foods",
cloudinaryImageId: "o8t0w5gdlujpigauaflw",
locality: "Sector-6",
areaName: "HSR Layout",
costForTwo: "₹150 for two",
cuisines: ["Healthy Food", "Keto", "North Indian", "Continental"],
avgRating: 4.4,
parentId: "8282",
avgRatingString: "4.4",
totalRatingsString: "5K+",
sla: {
deliveryTime: 28,
lastMileTravel: 3.5,
serviceability: "SERVICEABLE",
slaString: "28 mins",
lastMileTravelString: "3.5 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-24 00:00:00",
opened: true,
},
badges: {
textExtendedBadges: [
{
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "brand",
fontColor: "#7E808C",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "brand",
},
},
],
},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/lo-low-carb-and-keto-foods-sector-6-hsr-layout-bangalore-107443",
type: "WEBLINK",
},
},
{
info: {
id: "108097",
name: "Ambur Star Briyani Since 1890",
cloudinaryImageId: "yktanq9i7yfjrixaghuj",
locality: "2nd Stage",
areaName: "BTM Layout",
costForTwo: "₹500 for two",
cuisines: ["Biryani", "Chettinad", "Andhra", "Beverages", "Seafood"],
avgRating: 4.4,
parentId: "21400",
avgRatingString: "4.4",
totalRatingsString: "10K+",
sla: {
deliveryTime: 29,
lastMileTravel: 3,
serviceability: "SERVICEABLE",
slaString: "29 mins",
lastMileTravelString: "3.0 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-23 23:45:00",
opened: true,
},
badges: {
textExtendedBadges: [
{
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
fontColor: "#7E808C",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
},
},
],
},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-2nd-stage-btm-layout-bangalore-108097",
type: "WEBLINK",
},
},
{
info: {
id: "305",
name: "A2B - Adyar Ananda Bhavan",
cloudinaryImageId: "gxydb9wvkadarapno4hk",
locality: "7th Block",
areaName: "Koramangala",
costForTwo: "₹300 for two",
cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
avgRating: 4.3,
veg: true,
parentId: "22",
avgRatingString: "4.3",
totalRatingsString: "10K+",
sla: {
deliveryTime: 31,
lastMileTravel: 2.5,
serviceability: "SERVICEABLE",
slaString: "31 mins",
lastMileTravelString: "2.5 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-23 22:30:00",
opened: true,
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png",
},
},
],
},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-7th-block-koramangala-bangalore-305",
type: "WEBLINK",
},
},
{
info: {
id: "410683",
name: "Soul Rasa",
cloudinaryImageId: "xoth5ysuv2r6ctizaso5",
locality: "Jakkasandra",
areaName: "Koramangala",
costForTwo: "₹400 for two",
cuisines: [
"Indian",
"Healthy Food",
"Home Food",
"South Indian",
"North Indian",
],
avgRating: 4.5,
parentId: "239281",
avgRatingString: "4.5",
totalRatingsString: "5K+",
sla: {
deliveryTime: 27,
lastMileTravel: 2.4,
serviceability: "SERVICEABLE",
slaString: "27 mins",
lastMileTravelString: "2.4 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-23 23:30:00",
opened: true,
},
badges: {
imageBadges: [
{
imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
description: "OnlyOnSwiggy",
},
],
textExtendedBadges: [
{
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "brand",
fontColor: "#7E808C",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "OnlyOnSwiggy",
imageId:
"v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
},
},
],
},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "brand",
},
},
],
},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/soul-rasa-jakkasandra-koramangala-bangalore-410683",
type: "WEBLINK",
},
},
{
info: {
id: "8736",
name: "Krispy Kreme",
cloudinaryImageId: "fdesw8tqfu9ihwht2psr",
locality: "100 Ft intermediate Ring Road",
areaName: "Koramangala",
costForTwo: "₹170 for two",
cuisines: ["Desserts", "Beverages"],
avgRating: 4.4,
veg: true,
parentId: "570",
avgRatingString: "4.4",
totalRatingsString: "1K+",
sla: {
deliveryTime: 18,
lastMileTravel: 0.6,
serviceability: "SERVICEABLE",
slaString: "18 mins",
lastMileTravelString: "0.6 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-23 21:30:00",
opened: true,
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png",
},
},
],
},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/krispy-kreme-100-ft-intermediate-ring-road-koramangala-bangalore-8736",
type: "WEBLINK",
},
},
{
info: {
id: "77870",
name: "Pasta Street",
cloudinaryImageId: "aecff12704ebe42606524c852f9ab0e4",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹900 for two",
cuisines: ["Italian", "Pizzas", "Pastas", "Desserts", "Beverages"],
avgRating: 4.4,
parentId: "2872",
avgRatingString: "4.4",
totalRatingsString: "1K+",
sla: {
deliveryTime: 34,
lastMileTravel: 1.5,
serviceability: "SERVICEABLE",
slaString: "34 mins",
lastMileTravelString: "1.5 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-23 23:30:00",
opened: true,
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Gourmet",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Gourmet",
imageId: "newg.png",
},
},
],
},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹399",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/pasta-street-koramangala-bangalore-77870",
type: "WEBLINK",
},
},
{
info: {
id: "31627",
name: "Hyderabad Biryaani House",
cloudinaryImageId: "r87wnsjxzu9ysekmniju",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹350 for two",
cuisines: ["Biryani", "Mughlai", "South Indian"],
avgRating: 4.2,
parentId: "2403",
avgRatingString: "4.2",
totalRatingsString: "10K+",
sla: {
deliveryTime: 24,
lastMileTravel: 1.5,
serviceability: "SERVICEABLE",
slaString: "24 mins",
lastMileTravelString: "1.5 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-01-24 01:00:00",
opened: true,
},
badges: {},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "₹120 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {},
cta: {
link: "https://www.swiggy.com/restaurants/hyderabad-biryaani-house-koramangala-bangalore-31627",
type: "WEBLINK",
},
},
];

const Body = () => {
return (
<div className="body">
<div className="search-container">
<input type="text" placeholder="Search food or Restraurant" />
<button className="btn">Search</button>
</div>
<div className="restro-container">
{resList.map((restuarant) => (
// we can use any name in place of restuarant as it is normal name. resdata also we can take any name
<RestraurantCard key={restuarant.info.id} resData={restuarant} />
// <RestraurantCard resData={resList[0]} />
// <RestraurantCard resData={resList[1]} />
// <RestraurantCard resData={resList[2]} />
// <RestraurantCard resData={resList[3]} />
))}
</div>
</div>
);
};

const currUear = new Date().getFullYear();

const Footer = () => {
return (
<footer className="footer">
<p>
Copyright &copy; {}, Made with ❤️ by <strong>Sanjeev</strong>
</p>
</footer>
);
};

const AppLayout = () => {
return (
<div className="app">
<Header />
<Body />
<Footer />
</div>
);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
