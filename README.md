# [Typefascist API](http://typefascist.com/)

A simple node API for converting fonts

## Table of contents

- [Quick Start](#quick-start)
- [Dependencies](#dependencies)
- [Goals](#goals)

## Quick Start
Check the [dependencies](#dependencies)


Install all npm packages from package.json
```
npm install
```
Start the API server using
```
node server.js
```
Test the functionality using the client exmaple file
```
ruby client_example.rb <fontfile>
```

## Dependencies

#### Fontforge
You will need python enabled fontforge
```
sudo apt-get install fontforge python-fontforge
```
#### Python3
If you are rolling an old version of ubuntu without Python3, you will have to install it. 
```
sudo apt-get install python3
```

### You're all set!

## Goals

Fonts to add in the future:
ufo, svg, eot, afm, bin, cff, dfont, pdf, pfa, pfb, pfm, ps, pt3, suit, t11, t42, tfm, ttc
