/*  
Filesystem Node Object:

The Filesystem Node Object is a software component designed to manage and interact with files and directories within a computer's file system. It serves as a bridge between 
applications and the underlying storage infrastructure. This node object can be used to perform various file operations such as creating, reading, updating, and deleting files and 
directories. It also provides information about file attributes like size, permissions, and timestamps. Developers can utilize the Filesystem Node Object to implement file management
features in applications, handle file uploads and downloads, and ensure data persistence.
*/

    const fs = require('fs');
    const {promisify} = require('util')

    // Creates a new directory and log the result whether success or fail
    fs.mkdir('sample_directory', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } else {
        console.log('Directory created successfully.');
    }
    });


    // Reads and writes a file and logs its content
    const readFileasync = promisify(fs.readFile);
    const writeFileasync = promisify(fs.writeFile);
    
    const file_handler = async()=>{
        try { // Overall try/catch method for writing of file
            const content = await writeFileasync('./sample_file.txt', "Hello, Filesystem!");
            console.log('Data written to file successfully.');
            
            try { // Overall try/catch method for reading of file only when file is written
                const data = await readFileasync('./sample_file.txt','utf-8');
                console.log('File content:', data);
            } 
            catch (error) {
                console.log('Error reading file:', error);
            }

            try { // Overall try/catch method for deleting a file only when a file is written
                fs.unlinkSync('./sample_file.txt')
                console.log('File deleted successfuly.')
            }
            catch (error) {
                console.log('Error deleting file:', error)
            }
        } 
        
        catch (error) {
            console.log('Error writing to file:', error);
        }
    }
    
    file_handler();
    
/*
Buffer Node Object:

A Buffer Node Object is a data structure used in computer programming to temporarily store and manipulate binary data or character sequences in memory. Buffers are particularly 
useful for efficiently handling data that needs to be processed byte by byte or in fixed-size chunks. They are commonly employed in tasks such as reading and writing data from/to 
files, network sockets, or encoding/decoding operations. Developers use Buffer Node Objects to efficiently work with data streams, handle data transformation, and avoid memory 
allocation overhead. Buffers are essential for tasks like streaming audio/video, reading large files, or implementing low-level protocols.
*/

    // Create a buffer with binary data
    const buffer = Buffer.from('Sample Buffer Data', 'utf8');

    // Log the buffer content
    console.log('Buffer Content:', buffer.toString('utf8'));

    // Accesses elements in the buffer array
    console.log('First Byte:', buffer[0]);
    console.log('Second Byte:', buffer[1]);

    // Modify data in the buffer
    buffer.write('Updated Data', 0, 'utf8');
    console.log('Updated Buffer Content:', buffer.toString('utf8'));

/*
Globals Node Object:

The Globals Node Object, in the context of programming or software development, typically refers to a container or namespace that holds global variables, functions, or configuration 
settings that are accessible throughout an application. These global elements can be used to store shared state, constants, or utility functions that need to be accessed from 
multiple parts of the codebase. The Globals Node Object provides a centralized and organized way to manage application-wide resources. Developers often utilize it to store 
configuration settings, establish shared communication channels, or define global error-handling routines, making it easier to maintain and extend complex software systems.
*/

    // Defines global variables
    global.appName = 'MyApp';
    global.appVersion = '1.0';

    // Access and log global variables
    console.log('Application Name:', global.appName);
    console.log('Application Version:', global.appVersion);

    // Defines a global function
    global.sayHello = () => {
    console.log('Hello from the global function!');
    };

    // Calls the global function
    global.sayHello();
