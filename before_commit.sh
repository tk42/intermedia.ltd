#!/bin/bash
# replace "z-index: 2000;' with "z-index: -2000;' in index.html
sed -i '' 's@z-index: 2000;@z-index: -2000;@g' ./index.html
sed -i '' 's@bottom: 20px;@bottom: -20px;@g' ./index.html
sed -i '' 's@left: 20px;@left: -20px;@g' ./index.html
