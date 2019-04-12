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

namespace calculation {
  // evaluates simple expressions
  // returns false if the given expression is invalid. 
  bool evaluate(const std::string& exp,
                std::vector<std::pair<std::string, double>>& variables,
                double& output);
}
