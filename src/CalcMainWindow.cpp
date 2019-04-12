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
#include <string>
#include <sstream>
#include <cassert>

#include <QDebug>
#include <QMessageBox>
#include <QComboBox>
#include <QClipboard>
#include <QKeyEvent>

#include "exprtk.hpp"

#include "Calculate.h"
#include "CalcMainWindow.h"
#include "ui_calc.h"

using namespace std;

// =============================================================================
//                                CalcMainWindow class
// =============================================================================
CalcMainWindow::CalcMainWindow(QWidget* parent) :
  QMainWindow(parent),
  ui_(new Ui::CalcWindow),
  output_(0),
  clipboard_(QApplication::clipboard()) {

  ui_->setupUi(this);

  populateComboBoxes();

  connect(ui_->userLineInput, SIGNAL(textEdited(const QString&)),
          this, SLOT(evaluate()) );
  connect(ui_->userLineInput, SIGNAL(returnPressed()), this, SLOT(updateHistory()));

  connect(ui_->clearHistoryButton, SIGNAL(clicked()), this, SLOT(clear()));
  connect(ui_->copyResultButton, SIGNAL(clicked()), this, SLOT(copyResult()));
  connect(ui_->addVariableButton, SIGNAL(clicked()), this, SLOT(addVariable()));

  connect(ui_->exprHistoryList, SIGNAL(itemClicked(QListWidgetItem*)),
          this, SLOT(loadFromHistory(QListWidgetItem*)) );

  connect(ui_->fnCombo, SIGNAL(currentIndexChanged(const QString&)),
          this, SLOT(appendExpr(const QString&)));

  connect(ui_->varLineInput, SIGNAL(returnPressed()), this, SLOT(addVariable()));
  connect(ui_->valLineInput, SIGNAL(returnPressed()), this, SLOT(addVariable()));
}

CalcMainWindow::~CalcMainWindow() {
}

void CalcMainWindow::populateComboBoxes() {
  for (size_t idx = 0; idx < exprtk::details::base_function_list_size; ++idx) {
    ui_->fnCombo->addItem(exprtk::details::base_function_list[idx].c_str());
  }

  for (size_t idx = 0; idx < exprtk::details::arithmetic_ops_list_size; ++idx) {
    ui_->opCombo->addItem(exprtk::details::arithmetic_ops_list[idx].c_str());
  }

  for (size_t idx = 0; idx < exprtk::details::inequality_ops_list_size; ++idx) {
    ui_->opCombo->addItem(exprtk::details::inequality_ops_list[idx].c_str());
  }

  for (size_t idx = 0; idx < exprtk::details::logic_ops_list_size; ++idx) {
    ui_->opCombo->addItem(exprtk::details::logic_ops_list[idx].c_str());
  }
}

void CalcMainWindow::evaluate() {
  string input = ui_->userLineInput->text().toStdString();

  vector<pair<string, double>> variables;
  for (int row = 0; row < ui_->variableTable->rowCount(); ++row) {
    const string variable = ui_->variableTable->item(row, 0)->text().toStdString();
    const double value = ui_->variableTable->item(row, 1)->text().toDouble();
    variables.push_back({variable, value});
  }

  const bool valid = calculation::evaluate(input, variables, output_);

  string output = input + " = ";

  if (valid) {
    ostringstream sstream;
    sstream << output_;
    output += sstream.str();
  }
  else {
    output += "Error";
  }

  ui_->outputLabel->setText(output.c_str());
}

void CalcMainWindow::updateHistory() {
  copyResult();
  ui_->exprHistoryList->addItem(ui_->outputLabel->text());
}

void CalcMainWindow::loadFromHistory(QListWidgetItem* currentItem) {
  const string output = currentItem->text().toStdString();
  size_t found = output.find('=');
  const string userLineInputStr = output.substr(0, (found - 1));

  ui_->userLineInput->setText(userLineInputStr.c_str());
  ui_->outputLabel->setText(output.c_str());
}

void CalcMainWindow::clear() {
  ui_->exprHistoryList->clear();
}

void CalcMainWindow::appendExpr(const QString& fn) {
  ui_->userLineInput->clearUserInput();
  ui_->userLineInput->setText(ui_->userLineInput->text() + fn);
  evaluate();
}

void CalcMainWindow::copyResult() {
  ostringstream sstream;
  sstream << output_;
  string output = sstream.str();

  clipboard_->setText(output.c_str());
}

void CalcMainWindow::addVariable() {
  if (!checkIfNumber(ui_->valLineInput->text()) ||
      !checkIfValidVariableName(ui_->varLineInput->text()) ) {
    QMessageBox msgBox;
    msgBox.setText("Invalid data");
    msgBox.exec();
    return;
  }

  if (ui_->varLineInput->text() == "pi") {
    return;
  }

  const int prevSize = ui_->variableTable->rowCount();

  for (int row = 0; row < prevSize; ++row) {
    if (ui_->variableTable->item(row, 0)->text() != ui_->varLineInput->text()) {
      continue;
    }

    ui_->variableTable->item(row, 1)->setText(ui_->valLineInput->text());
    evaluate();
    return;
  }

  ui_->variableTable->insertRow(prevSize);
  ui_->variableTable->setItem(prevSize, 0,
                              new QTableWidgetItem(ui_->varLineInput->text()) );
  ui_->variableTable->setItem(prevSize, 1,
                              new QTableWidgetItem(ui_->valLineInput->text()) );

  evaluate();
}

bool CalcMainWindow::checkIfValidVariableName(const QString& val)
{
  const string& varName = val.toStdString();

  const char initChar = varName[0];
  if (!(initChar >= 'A' && initChar <= 'Z') &&
      !(initChar >= 'a' && initChar <= 'z') ) {
    return false;
  }

  for (size_t idx = (varName.length() - 1); idx > 0; --idx) {
    const char curChar = varName[idx];
    if (!(curChar >= '0' && curChar <= '9') &&
        !(curChar >= 'A' && curChar <= 'Z') &&
        !(curChar >= 'a' && curChar <= 'z') ) {
          return false;
    }
  }

  return true;
}

bool CalcMainWindow::checkIfNumber(const QString& val)
{
  bool valid = false;
  val.toDouble(&valid);
  return valid;
}


// =============================================================================
//                                CalcLineEdit class
// =============================================================================
CalcLineEdit::CalcLineEdit(QWidget* parent) :
  QLineEdit(parent),
  firstInput_(true) {

  connect(this, SIGNAL(focussed(bool)), this, SLOT(clearUserInput()));
}

CalcLineEdit::~CalcLineEdit() {
}

void CalcLineEdit::focusInEvent(QFocusEvent* e)
{
  QLineEdit::focusInEvent(e);
  emit(focussed(true));
}

void CalcLineEdit::clearUserInput() {
  if (!firstInput_) {
    return;
  }

  firstInput_ = false;
  setText("");
}


// =============================================================================
//                                CalcHistory class
// =============================================================================
CalcHistory::CalcHistory(QWidget* parent) : QListWidget(parent) {
}

CalcHistory::~CalcHistory() {
}

void CalcHistory::keyPressEvent(QKeyEvent* e)
{
  if (e->key() != Qt::Key_Delete) {
    return;
  }

  QList<QListWidgetItem*> items = selectedItems();
  foreach(QListWidgetItem* item, items) {
    removeItemWidget(item);
    delete item;
  }
}

// =============================================================================
//                                CalcVars class
// =============================================================================
CalcVars::CalcVars(QWidget* parent) : QTableWidget(parent) {
}

CalcVars::~CalcVars() {
}

void CalcVars::keyPressEvent(QKeyEvent* e)
{
  if (e->key() != Qt::Key_Delete) {
    return;
  }

  QList<QTableWidgetItem*> items = selectedItems();
  for (int idx = (items.count() - 1); idx >= 0; idx -= 2)
  {
    QTableWidgetItem* item0 = items[idx - 1];
    QTableWidgetItem* item1 = items[idx];
    assert(item0->row() == item1->row());

    removeRow(item0->row());
  }
}
