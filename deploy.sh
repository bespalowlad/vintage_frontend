# abort on errors 
set -e 

# build 
echo Linting.. 
npm run lint 
echo Building. this may take a minute... 
npm run build 

# navigate into the build output directory
cd dist

# deploy 
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/bespalowlad/vintage_frontend.git master:gh-pages

cd -