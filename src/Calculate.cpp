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

#include "exprtk.hpp"

using namespace std;

namespace calculation {

bool evaluate(const string& exp,
              vector<pair<string, double>>& variables,
              double& result) {

  exprtk::symbol_table<double> symbol_table;

  for (size_t idx = 0; idx < variables.size(); ++idx) {
    pair<string, double>& variable = variables.at(idx);
    symbol_table.add_variable(variable.first.c_str(), variable.second);
  }

  symbol_table.add_constants();

  exprtk::expression<double> expression;
  expression.register_symbol_table(symbol_table);

  exprtk::parser<double> parser;

  if (parser.compile(exp, expression)) {
    result = expression.value();
    return true;
  }

  return false;
}

}
