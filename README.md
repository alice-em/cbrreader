# CBR - CBR book reader

Utility for `.cbr` file handling.

## Installation

Module can be installed locally in a project using npm like following:

```Bash
npm install --save cbr
```

## Use in Command line

You may install the module globally via:
```Bash
npm install -g cbr
```
After that, the application can be used like any other terminal command
```
Usage: cbr [source.cbr] {OPTIONS}

Standard Options:
    --output, -o  Destination folder of all the images.
                  If unspecified, cbr extracts in *output* directory in the same level as source.cbr.

     --debug, -d  Allows users to see what is happening through each point in the process

      --help, -h  Shows the help menu

```

## Use in program

Use of this utility is straightforward.

```Javascript
var cbr = require('cbr');
```

### LICENSE

Licensed under MIT (C) 2015 Bhargav R. Patel. See LICENSE.md for details.
