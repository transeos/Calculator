// -*- Qt -*-
//
//*****************************************************************
//
// WARRANTY:
// Use all material in this file at your own risk.
//
// Created by Hiranmoy on 08/04/19.
//
//*****************************************************************

#include <iostream>

#include <QApplication>
#include <QDebug>
#include <QDesktopWidget>

#include "CalcMainWindow.h"

using namespace std;

int main(int argc, char *argv[])
{
  //cout << " === Calculator started === \n";

  QApplication app(argc, argv);

  CalcMainWindow cw;
  cw.setFixedSize(cw.width(), cw.height());
  cw.move(QApplication::desktop()->screen()->rect().center() - cw.rect().center());
  cw.show();

  auto ret = app.exec();

  //cout << " === Calculator closed === \n";
  return ret;
}
