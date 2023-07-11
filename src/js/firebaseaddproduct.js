// const firebaseConfig = {
//   apiKey: "AIzaSyAiGgyGJszMIyJQbHOX-GUr3yv7YzXGwcY",
//   authDomain: "addproduct-ac11e.firebaseapp.com",
//   databaseURL: "https://addproduct-ac11e-default-rtdb.firebaseio.com",
//   projectId: "addproduct-ac11e",
//   storageBucket: "addproduct-ac11e.appspot.com",
//   messagingSenderId: "90020361601",
//   appId: "1:90020361601:web:f49ff41e37a9481bf4a480",
//   measurementId: "G-TDL2QG8BFG"
//   };

//   //initialize firebase
//   firebase.initializeApp(firebaseConfig);

//   //refrence
//   var addproductDB = firebase.database().ref("addproduct");

// document.getElementById('addproduct').addEventListener("submit", submitForm);

// function submitForm(e)
// {
//     e.preventDefault();
//     var manufacturerID=getElementVal('manufacturerID');
//     var productName=getElementVal('productName');
//     var productSN=getElementVal('productSN')
//     var productBrand=getElementVal('productBrand');
//     var productPrice=getElementVal('productPrice');

//     saveMessages(manufacturerID,productName,productSN,productBrand,productPrice);
    
//     document.querySelector(".alert").style.display = "block";

//     setTimeout(() => {
//         document.querySelector(".alert").style.display = "none";
//       }, 1000);
    
//       //   reset the form
//       document.getElementById("addproduct").reset();
// }

// const saveMessages=(manufacturerID,productName,productSN,productBrand,productPrice)=>
// {
//   var newaddproduct= addproductDB.push();  
//   newaddproduct.set({
//     manufacturerID: manufacturerID,
//     productName: productName,
//     productSN: productSN,
//     productBrand: productBrand,
//     productPrice: productPrice,

//   });
// };

// const getElementVal= (id) =>{
//     return document.getElementById(id).value;
// };




