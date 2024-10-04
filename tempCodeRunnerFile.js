

fs.writeFile(path.join(__dirname,"/api","/api","api.txt"), data3, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
    
});
