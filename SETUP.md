# How to Setup #

# prerequisites
sudo apt install qt5-default

## download git repository
git clone --recursive https://github.com/transeos/Calculator
## or update submodules (inside 'Calculator' repository)
git submodule update --init --recursive

## build calculator
mkdir build
cd build
qmake -qt=qt5 ..
make

## Now you'll have calculator executable file.
