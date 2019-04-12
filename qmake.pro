QT += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = calculator
TEMPLATE = app

DEFINES += QT_DEPRECATED_WARNINGS

QMAKE_CXXFLAGS += -std=c++0x
#QMAKE_CXXFLAGS += -D_GLIBCXX_USE_NANOSLEEP
#QMAKE_CXXFLAGS += -pthread 

INCLUDEPATH += include
INCLUDEPATH += 3rdPartyLib/exprtk

SOURCES += src/main.cpp \
           src/Calculate.cpp \
           src/CalcMainWindow.cpp

HEADERS += include/Calculate.h \
           include/CalcMainWindow.h \
           3rdPartyLib/exprtk/exprtk.hpp

FORMS += gui/calc.ui
