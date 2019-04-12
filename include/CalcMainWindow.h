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

#pragma once

#include <memory>

#include <QMainWindow>
#include <QTreeWidget>
#include <QLineEdit>
#include <QListWidgetItem>
#include <QListWidget>
#include <QTableWidget>

namespace Ui {
class CalcWindow;
}


class CalcMainWindow : public QMainWindow {
  Q_OBJECT

public:
  explicit CalcMainWindow(QWidget* parent = NULL);
  ~CalcMainWindow();

private:
  std::unique_ptr<Ui::CalcWindow> ui_;

  double output_;

  QClipboard* clipboard_;

  void populateComboBoxes();

  bool checkIfValidVariableName(const QString& val);
  bool checkIfNumber(const QString& val);

private slots:
  void evaluate();
  void updateHistory();
  void loadFromHistory(QListWidgetItem* currentItem);
  void clear();
  void appendExpr(const QString& fn);
  void copyResult();
  void addVariable();

signals:
};


class CalcLineEdit : public QLineEdit
{
  Q_OBJECT

public:
  CalcLineEdit(QWidget* parent = NULL);
  ~CalcLineEdit();

signals:
  void focussed(bool hasFocus);

private:
  bool firstInput_;

public slots:
  void clearUserInput();

protected:
  virtual void focusInEvent(QFocusEvent* e);
};


class CalcHistory : public QListWidget
{
  Q_OBJECT

public:
  CalcHistory(QWidget *parent = NULL);
  ~CalcHistory();

protected:
  virtual void keyPressEvent(QKeyEvent* event);
};


class CalcVars : public QTableWidget
{
  Q_OBJECT

public:
  CalcVars(QWidget *parent = NULL);
  ~CalcVars();

protected:
  virtual void keyPressEvent(QKeyEvent* event);
};
