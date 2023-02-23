// Chapter N0.14 to 16 = Done

// Question N0.1

// var ArRay = [];
// console.log(ArRay)

// Question N0.2

// var arr = new Array()
// console.log(arr)

// Question N0.3

// var strArray = ["Jaffar", "Ahmed" , "Wahaj", "Kashaf"]
// console.log(strArray)

// Question N0.4

// var strArray = [0 , 1 , 2 , 3 , 4 , 5]
// console.log(strArray)

// Question N0.5

// var boolArray = [true, false, true, false];
// console.log(boolArray)

// var boolArray = new Array(3);
// boolArray[0] = true;
// boolArray[1] = false;
// boolArray[2] = true;
// console.log(boolArray)

// Question N0.6

// var mixedArr = ["Wahaj" , 466 , true]
// console.log(mixedArr)

// Question N0.7

// document.write("<h1>"+ "Qualifications :" +"</h1>")
// var qualifications = ["1) SSC", "2) HSC", "3) BCS", "4) BS", "5) BCOM", "6) MS" , "7) M. Phil","8) PhD"]
// for(var i = 0 ; i < qualifications.length ; i++){
//     document.write(qualifications[i] + "<br>");
// }

// Question N0.8

// var stdNames = ["John" , "Wahaj" , "Kashaf"]
// var stdScore = [460 , 480 , 512]

// var totalNumber = 550;
// for(var i = 0 ; i < stdNames.length; i++){
//     var score = stdScore[i];
//     var percentage = (score / totalNumber) * 100
//     document.write(stdNames[i] + " scored " + score + " marks out of " + totalNumber + " with a percentage of " + percentage.toFixed(2) + "%"+"<br>");
// }

// const studentNames = ["John",  "Wahaj" , "Kashaf"];
// const studentScores = [460 , 490 , 512];

// const totalMarks = 550;

// for (let i = 0; i < studentNames.length; i++) {
//   const score = studentScores[i];
//   const percentage = (score / totalMarks) * 100;
//   document.write(studentNames[i] + " scored " + score + " marks out of " + totalMarks + ", with a percentage of " + percentage.toFixed(2) + "%. <br>");
// }

// Question N0.9

// // Initialize an array with color names
// let colors = ['red', 'green', 'blue'];

// // Display the array elements in the browser
// document.write("Array elements: " + colors + "<br><br>");

// // Ask the user what color he/she wants to add to the beginning
// let colorToAddToBeginning = prompt("Enter a color to add to the beginning:");

// // Add the color to the beginning of the array
// colors.unshift(colorToAddToBeginning);

// // Display the updated array in the browser
// document.write("Array elements after adding color to the beginning: " + colors + "<br><br>");

// // Ask the user what color he/she wants to add to the end
// let colorToAddToEnd = prompt("Enter a color to add to the end:");

// // Add the color to the end of the array
// colors.push(colorToAddToEnd);

// // Display the updated array in the browser
// document.write("Array elements after adding color to the end: " + colors + "<br><br>");

// // Add two more color to the beginning of the array
// colors.unshift('yellow', 'orange');

// // Display the updated array in the browser
// document.write("Array elements after adding two colors to the beginning: " + colors + "<br><br>");

// // Delete the first color in the array
// colors.shift();

// // Display the updated array in the browser
// document.write("Array elements after deleting the first color: " + colors + "<br><br>");

// // Delete the last color in the array
// colors.pop();

// // Display the updated array in the browser
// document.write("Array elements after deleting the last color: " + colors + "<br><br>");

// // Ask the user at which index he/she wants to add a color & color name
// let indexToAdd = prompt("Enter the index to add a color:");
// let colorToAdd = prompt("Enter the color to add:");

// // Add the color to the desired position/index
// colors.splice(indexToAdd, 0, colorToAdd);

// // Display the updated array in the browser
// document.write("Array elements after adding a color to a desired position: " + colors + "<br><br>");

// // Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete
// let indexToDelete = prompt("Enter the index to start deleting:");
// let numToDelete = prompt("Enter the number of colors to delete:");

// // Remove the same number of color(s) from the user-defined position/index
// colors.splice(indexToDelete, numToDelete);

// // Display the updated array in the browser
// document.write("Array elements after deleting color(s) from a desired position: " + colors);


// Question N0.10

// var scoreArr = [600 , 700 , 500 ,123 , 231 ,842 , 942 ,434 , 34249 , 103410]
// document.write("<h4>"+ "Score of Students:"+ "</h4>" + scoreArr + "<br>")
// scoreArr.sort(function(a, b) {
//     return a - b;
//   });
  
//   document.write("<h4>"+ "Ordered Score of Students :" + "</h4>" + scoreArr);

// Question N0.11

// var cities = ["lahore" , "islamabd" , "Karachi" , "multan"]
// for(var i = 0; i < citiies.length ; i++){
//     document.write("<b>" + "Cities List" + " " + " = " + cities +"</b>")
// }

// // # initialize an array with city names
// cities = ["lahore" , "islamabd" , "Karachi" , "multan"]

// // # create a new array to store selected cities
// selectedCities = []

// // # copy first 3 cities from cities array to selectedCities array
// selectedCities = cities[0 , 3]

// // # print the selected cities array
// document.write("Selected Cities: ", selectedCities)

// Question N0.12

// var arr = ["This", "is", "my", "cat"]
// document.write("<b>Array :</b>" + " " + "This," + "is," + "my," + "cat" + "<br>")
// var str = arr.join(" ")
// document.write("<b>String :</b>" + " " + str)

// Question N0.13

// var fifoArray = []
// fifoArray.push("keyboard")
// fifoArray.push("mouse")
// fifoArray.push("printer")
// fifoArray.push("monitor")
// document.write(" <b> Devices : </b> " + " " + fifoArray + " <br> " + " <br> ")
// document.write(" <b> Out : </b> "+ " " + " <br> " + " " + fifoArray.shift("keyboard") + " <br> " )
// document.write(" <b> Out : </b> " + " " + " <br> " + " " + fifoArray.shift("mouse") + " <br> " )
// document.write(" <b> Out : </b> " + " " + " <br> "+ " " + fifoArray.shift("printer") + " <br> " )
// document.write(" <b> Out : </b> " + " " + " <br> "+ " " + fifoArray.shift("monitor") + " <br> " )

// Question N0.14

// var filoArray = []
// filoArray.push("keyboard")
// filoArray.push("mouse")
// filoArray.push("printer")
// filoArray.push("monitor")
// document.write(" <b> Devices : </b> " + " " + filoArray + " <br> " + " <br> ")
// document.write(" <b> Out : </b> "+ " " + " <br> " + " " + filoArray.shift("keyboard") + " <br> " )
// document.write(" <b> Out : </b> " + " " + " <br> " + " " + filoArray.shift("mouse") + " <br> " )
// document.write(" <b> Out : </b> " + " " + " <br> "+ " " + filoArray.shift("printer") + " <br> " )
// document.write(" <b> Out : </b> " + " " + " <br> "+ " " + filoArray.shift("monitor") + " <br> " )

// Question N0.15

// var manuFactures = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
// var selectMenuHtml = "<select>"
// for(var i = 0 ; i < manuFactures ; i++){
//     selectMenuHtml += '<option value = "${manuFactures[i]}">${manuFactures[i]}</option>'
// }
// selectMenuHtml += "</select>";
// document.write(selectMenuHtml)

// ______________________***___________________________



// Chapter N0.17 to 20

// Question N0.1

// var multiArray = [
//     [],
//     [],
//     []
// ]
// console.log(multiArray)

// Question N0.2

// var matrix = [
//     [0 , 1 , 2 , 3],
//     [1 , 0 , 1 , 2],
//     [2 , 1 , 0 , 1]
// ]
// document.write("[0 , 1 , 2 ,3]" + "<br>" + "[1 , 0 , 1 , 2]" + "<br>" + "[2 , 1 , 0 , 1]" + "<br>" + "Answer :" +matrix[2][1])

// Question N0.3

// for(var i = 1 ; i <= 10 ; i++){
//     console.log(i)
// }

// Question N0.4

// var tableNumber = +prompt("Enter Number Of Table")
// var lengthNumber = +prompt("Enter Lenght Of Number")

// for(var i = 1 ; i <= lengthNumber ; i++){
//     document.write(tableNumber + " x " + " " + i + " " + "=" + " " + tableNumber*i + "<br>")
// }

// Question N0.5

// var fruits = [" apple " , " banana " , " mango " , " orange ",  " strawberry "]
// console.log(fruits)
// document.write("<b>" + "apple" + "<br>" + "banana" + "<br>" + "mango" + "<br>" + "orange" + "<br>" + "strawberry" + "</b>" + "<br>" + "<br>")
// document.write("Element at index 0 is" + " " + " apple " + "<br>" )
// document.write("Element at index 1 is" + " " + " banana " + "<br>" )
// document.write("Element at index 2 is" + " " + " mango " + "<br>" )
// document.write("Element at index 3 is" + " " + " orange " + "<br>" )
// document.write("Element at index 4 is" + " " + " strawberry " + "<br>" )

// Question N0.6 

// document.write("<b>Counting :</b>" + "<br>")
// for(var i = 1 ; i <= 15 ; i++){
//     document.write(i + " " + "," + " ")
// }
// document.write( "<br>" + "<b>Reversen Counting :</b>" + "<br>")
// for(var i = 10 ; i >= 1 ; i--){
//     document.write(i + " " + "," + " ")
// }

// document.write( "<br>" + "<b>Even :</b>" + "<br>")
// for(var i = 0 ; i <= 10 ; i+2){
//     document.write(i + " " + "," + " ")
// }
// document.write( "<br>" + "<b>Odd :</b>" + "<br>")
// for(var i = 1 ; i <= 10 ; i+2){
//     document.write(i + " " + "," + " ")
// }
// // document.write( "<br>" + "<b>Series :</b>" + "<br>")
// var series = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].map(k => k + "k");
// document.write(series)

// Question N0.7

// var userInput = prompt("Enter the item you want to search:");

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchItem(arr, userInput) {
//   const result = arr.find(item => item.toLowerCase() === userInput.toLowerCase());
//   if (result) {
//     document.write(`"${result}" is avaliable in our bakery`);
//   } else {
//     document.write(`We are sorry "${userInput}" is not avaliable in our bakery.`);
//   }
// }

// searchItem(A, userInput);


// Question N0.8

// var A = [24, 53, 78, 91, 12];
// document.write("<b>Array items :</b>" + " " + A + "<br>")
// var largest = A[0]; // Assume first element is largest

// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i]; // Update largest if current element is greater
//   }
// }

// document.write("<b>The largest number is</b>: " + " " + largest);

// var A = [24, 53, 78, 91, 12]
// document.write("<b>Array items :</b>" + " " + A + "<br>")
// var largest = A[0]
// for(var i = 1 ; i < A.length ; i++){
//     if(A[i] > largest) {
//     largest = A[i]
//     }
// }
// document.write("<b>The largest number is</b>: " + " " + largest);

// Question N0.9

// var A = [24, 53, 78, 91, 12]
// document.write("<b>Array items :</b>" + " " + A + "<br>")
// var smallest = A[0]
// for(var i = 0 ; i < A.length ; i++){
//     if(A[i] < smallest){
//         smallest = A[i]
//     }
// }
// document.write("<b>The largest number is</b>: " + " " + smallest);

// Question N0.10

// for(var i = 1 ; i <= 20 ; i++){
//     document.write(i*5 + " " + "," + " ")
// }