cd ~/domains/taazy.pl
rm -Rf ~/domains/taazy.pl/public_nodejs
unzip ~/domains/taazy.pl/versions/$1.zip -d ~/domains/taazy.pl/versions/$1
rm -f ~/domains/taazy.pl/versions/$1.zip
ln -s ~/domains/taazy.pl/versions/$1 ~/domains/taazy.pl/public_nodejs
cd ~/domains/taazy.pl/public_nodejs
npm install --production
devil www restart taazy.pl