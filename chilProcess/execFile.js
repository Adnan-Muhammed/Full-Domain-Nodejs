const { execFile } = require('child_process');
const fs = require('fs')
const path = require('path');

// Running an executable file directly on Windows


// const notepadPath = 'C:\\Windows\\System32\\notepad.exe';  // Path to Notepad on Windows
// const filePath = 'C:\\Users\\ADNAN MUHAMMED\\OneDrive\\Documents\\Full_Domain_nodejs\\folder\\file.txt';  // Full path to the text file
// const filePath = 'C:\\Users\\ADNAN MUHAMMED\\OneDrive\\Documents\\Full_Domain_nodejs\\folder\\file.txt';  // Full path to the text file


// const filePath = path.join(__dirname,"/")

// console.log(path.join(__dirname,"/"));


// execFile('notepadPath, [filePath]', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   console.log('Notepad opened successfully.');
// });







// const filePath = './example.txt';  
// // const filePath = path.join(__dirname, 'example.txt');   both are same


// const content = 'Hello, this is a sample content!';
// fs.writeFile(filePath, content, (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//     return;
//   }
//   console.log('File written successfully!');
// });


// // Define the path to the notepad executable and example2.txt
// const notepadPath = 'C:\\Windows\\System32\\notepad.exe';  // Ensure this is the correct path on your system

// // Use execFile to open example2.txt with Notepad
// execFile(notepadPath, [filePath], (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   console.log('Notepad opened successfully.');
// });


// const { execFile } = require('child_process');

execFile('node', ['-v'], (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`Node version: ${stdout}`);
});
