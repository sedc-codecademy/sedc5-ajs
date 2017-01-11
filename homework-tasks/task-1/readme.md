#Description

You are given a folder containing several json files with random names, as well as a file called filelist.json, which contains an array of all the available json files. All the random-names json files have the following structure:
 
    {
        data: array of numbers
        operation: one of the "sine", "cosine", "log", "square", "cube" strings
    }

Your task is to create a web page with a single button. When that button is clicked, a data files is chosen at random, and its data is loaded.
Once loaded the data should be processed, i.e. the operation should be applied to all the items in the array, and after that, the results should be summed up together.
The result should be output to the page in the format:

>The operation {operation} applied to the array {array} gives a result of {result}.

E.g, if the file content is:

    {
        data: [1, 2, 3, 4],
        operation: "square"
    }

you should calculate 1^2 + 2^2 + 3^2 + 4^2 = 30, and write out

>The operation "square" applied to the array 1, 2, 3, 4 gives a result of 30.

#Notes
The browser won't allow using ajax calls when the webpage is directly opened from the disk. Instead, you'll need to host the page via localhost as a regular web site. There are lots of ways to do this, but here are some pointers:

* [Using IIS on Windows](https://www.iis.net/learn/manage/creating-websites/scenario-build-a-static-website-on-iis)
* [Using node and npm](https://www.npmjs.com/package/local-web-server)
* [Some other ideas](http://stackoverflow.com/questions/5050851/best-lightweight-web-server-only-static-content-for-windows)