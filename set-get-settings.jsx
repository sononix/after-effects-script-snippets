﻿/**
 * @author fabiantheblind
 * @description this is a AE Settings Class
 *
 *
 * @todo implement features like Array and Object saving
 */

(function(thisObj){

// Copyright (c)  2013
// Fabian "fabiantheblind" Morón Zirfas
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to  permit persons to
// whom the Software is furnished to do so, subject to
// the following conditions:
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTIO
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// see also http://www.opensource.org/licenses/mit-license.php


// read write settings

#include "AESettingsControl/SettingsControl.jsx";

var data = {
  settingsSectionName:"testSettings",
  key_string:"astring",
  key_int:"ainteger",
  key_float:"afloatingpointvalue",
  key_boolean:"aboolean"
};

// the settings control class is a own submodule
// you can find it here
// https://github.com/fabiantheblind/AESettingsControl
//
var sc = new SettingsControl(data.settingsSectionName);
test_set();
test_get();
sc = null;


function test_get () {
  var resbool = sc.exec.get_setting_boolean( data.key_boolean);
  alert("Boolean Value: "+resbool);
  var resint = sc.exec.get_setting_int( data.key_int);
  alert("Integer Value: "+ resint);

    var resfloat = sc.exec.get_setting_int( data.key_float);
  alert("Floating Point Value: "+ resfloat);

    var resstring = sc.exec.get_setting_string( data.key_string);
  alert("String Value: "+ resstring);

}
function test_set(){
   sc.exec.set_setting_boolean( data.key_boolean, false);
   sc.exec.set_setting_number( data.key_int, 345);
   sc.exec.set_setting_string(data.key_string, "Hello Settings");
  sc.exec.set_setting_number(data.key_float, 2.5);
}


})(this);