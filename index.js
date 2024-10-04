const fs = require('fs');

// Define the file path and content
const filePath = './example.txt';
const content = 'Hello, this is a sample content!';

// try {
//     // Write the content to the file synchronously
//     fs.writeFileSync('./example.txt', content);
//     console.log('File written successfully!');
// } catch (err) {
//     console.error('Error writing file:', err);
// }



// Write the content to the file asynchronously


fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
});
