# How to Setup #

# prerequisites
qt4

## download git repository
git clone --recursive https://github.com/transeos/Calculator
## or update submodules (inside 'cryptotrader' repository)
git submodule update --init --recursive

## build calculator
mkdir build
cd build
qmake -qt=qt5 .. (for ubuntu)
make

## Now you'll have calculator executable file.
