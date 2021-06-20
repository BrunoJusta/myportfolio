#!/usr/bin/env sh
# abortar no caso de erros
set -e
# build
npm run build
# navegar para a pasta com o conteúdo compilado

cd dist
git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/BrunoJusta/bruno-justa.git
git push -u --force origin master
cd..