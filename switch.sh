cd ~/domains/taazy.pl
rm public_nodejs
unzip versions/$1.zip -d ./versions/$1
rm -f versions/$1.zip
ln -s versions/$1 public_nodejs
cd public_nodejs
npm install --production
devil www restart taazy.pl