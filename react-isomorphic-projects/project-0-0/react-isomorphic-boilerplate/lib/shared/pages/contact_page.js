"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

exports["default"] = _react2["default"].createClass({
  displayName: "contact_page",

  getDefaultProps: function getDefaultProps() {
    return {
      name: 'Home page'
    };
  },
  render: function render() {
    return _react2["default"].createElement(
      "div",
      { className: "container" },
      _react2["default"].createElement(
        "form",
        { className: "well form-horizontal", action: " ", method: "post", id: "contact_form" },
        _react2["default"].createElement(
          "fieldset",
          null,
          _react2["default"].createElement(
            "legend",
            null,
            "Contact Us Today!"
          ),
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "col-md-4 control-label" },
              "First Name"
            ),
            _react2["default"].createElement(
              "div",
              { className: "col-md-4 inputGroupContainer" },
              _react2["default"].createElement(
                "div",
                { className: "input-group" },
                _react2["default"].createElement(
                  "span",
                  { className: "input-group-addon" },
                  _react2["default"].createElement("i", { className: "glyphicon glyphicon-user" })
                ),
                _react2["default"].createElement("input", { name: "first_name", placeholder: "First Name", className: "form-control", type: "text" })
              )
            )
          ),
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "col-md-4 control-label" },
              "Last Name"
            ),
            _react2["default"].createElement(
              "div",
              { className: "col-md-4 inputGroupContainer" },
              _react2["default"].createElement(
                "div",
                { className: "input-group" },
                _react2["default"].createElement(
                  "span",
                  { className: "input-group-addon" },
                  _react2["default"].createElement("i", { className: "glyphicon glyphicon-user" })
                ),
                _react2["default"].createElement("input", { name: "last_name", placeholder: "Last Name", className: "form-control", type: "text" })
              )
            )
          ),
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "col-md-4 control-label" },
              "E-Mail"
            ),
            _react2["default"].createElement(
              "div",
              { className: "col-md-4 inputGroupContainer" },
              _react2["default"].createElement(
                "div",
                { className: "input-group" },
                _react2["default"].createElement(
                  "span",
                  { className: "input-group-addon" },
                  _react2["default"].createElement("i", { className: "glyphicon glyphicon-envelope" })
                ),
                _react2["default"].createElement("input", { name: "email", placeholder: "E-Mail Address", className: "form-control", type: "text" })
              )
            )
          ),
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "col-md-4 control-label" },
              "Phone #"
            ),
            _react2["default"].createElement(
              "div",
              { className: "col-md-4 inputGroupContainer" },
              _react2["default"].createElement(
                "div",
                { className: "input-group" },
                _react2["default"].createElement(
                  "span",
                  { className: "input-group-addon" },
                  _react2["default"].createElement("i", { className: "glyphicon glyphicon-earphone" })
                ),
                _react2["default"].createElement("input", { name: "phone", placeholder: "(845)555-1212", className: "form-control", type: "text" })
              )
            )
          ),
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "col-md-4 control-label" },
              "Address"
            ),
            _react2["default"].createElement(
              "div",
              { className: "col-md-4 inputGroupContainer" },
              _react2["default"].createElement(
                "div",
                { className: "input-group" },
                _react2["default"].createElement(
                  "span",
                  { className: "input-group-addon" },
                  _react2["default"].createElement("i", { className: "glyphicon glyphicon-home" })
                ),
                _react2["default"].createElement("input", { name: "address", placeholder: "Address", className: "form-control", type: "text" })
              )
            )
          ),
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "col-md-4 control-label" },
              "City"
            ),
            _react2["default"].createElement(
              "div",
              { className: "col-md-4 inputGroupContainer" },
              _react2["default"].createElement(
                "div",
                { className: "input-group" },
                _react2["default"].createElement(
                  "span",
                  { className: "input-group-addon" },
                  _react2["default"].createElement("i", { className: "glyphicon glyphicon-home" })
                ),
                _react2["default"].createElement("input", { name: "city", placeholder: "city", className: "form-control", type: "text" })
              )
            )
          ),
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "col-md-4 control-label" },
              "State"
            ),
            _react2["default"].createElement(
              "div",
              { className: "col-md-4 selectContainer" },
              _react2["default"].createElement(
                "div",
                { className: "input-group" },
                _react2["default"].createElement(
                  "span",
                  { className: "input-group-addon" },
                  _react2["default"].createElement("i", { className: "glyphicon glyphicon-list" })
                ),
                _react2["default"].createElement(
                  "select",
                  { name: "state", className: "form-control selectpicker" },
                  _react2["default"].createElement(
                    "option",
                    { value: " " },
                    "Please select your state"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Alabama"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Alaska"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Arizona"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Arkansas"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "California"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Colorado"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Connecticut"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Delaware"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "District of Columbia"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    " Florida"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Georgia"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Hawaii"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "daho"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Illinois"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Indiana"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Iowa"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    " Kansas"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Kentucky"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Louisiana"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Maine"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Maryland"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    " Mass"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Michigan"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Minnesota"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Mississippi"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Missouri"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Montana"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Nebraska"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Nevada"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "New Hampshire"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "New Jersey"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "New Mexico"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "New York"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "North Carolina"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "North Dakota"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Ohio"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Oklahoma"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Oregon"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Pennsylvania"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Rhode Island"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "South Carolina"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "South Dakota"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Tennessee"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Texas"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    " Uttah"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Vermont"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Virginia"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Washington"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "West Virginia"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Wisconsin"
                  ),
                  _react2["default"].createElement(
                    "option",
                    null,
                    "Wyoming"
                  )
                )
              )
            )
          ),
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "col-md-4 control-label" },
              "Zip Code"
            ),
            _react2["default"].createElement(
              "div",
              { className: "col-md-4 inputGroupContainer" },
              _react2["default"].createElement(
                "div",
                { className: "input-group" },
                _react2["default"].createElement(
                  "span",
                  { className: "input-group-addon" },
                  _react2["default"].createElement("i", { className: "glyphicon glyphicon-home" })
                ),
                _react2["default"].createElement("input", { name: "zip", placeholder: "Zip Code", className: "form-control", type: "text" })
              )
            )
          ),
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "col-md-4 control-label" },
              "Website or domain name"
            ),
            _react2["default"].createElement(
              "div",
              { className: "col-md-4 inputGroupContainer" },
              _react2["default"].createElement(
                "div",
                { className: "input-group" },
                _react2["default"].createElement(
                  "span",
                  { className: "input-group-addon" },
                  _react2["default"].createElement("i", { className: "glyphicon glyphicon-globe" })
                ),
                _react2["default"].createElement("input", { name: "website", placeholder: "Website or domain name", className: "form-control", type: "text" })
              )
            )
          ),
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "col-md-4 control-label" },
              "Do you have hosting?"
            ),
            _react2["default"].createElement(
              "div",
              { className: "col-md-4" },
              _react2["default"].createElement(
                "div",
                { className: "radio" },
                _react2["default"].createElement(
                  "label",
                  null,
                  _react2["default"].createElement("input", { type: "radio", name: "hosting", value: "yes" }),
                  " Yes"
                )
              ),
              _react2["default"].createElement(
                "div",
                { className: "radio" },
                _react2["default"].createElement(
                  "label",
                  null,
                  _react2["default"].createElement("input", { type: "radio", name: "hosting", value: "no" }),
                  " No"
                )
              )
            )
          ),
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "col-md-4 control-label" },
              "Project Description"
            ),
            _react2["default"].createElement(
              "div",
              { className: "col-md-4 inputGroupContainer" },
              _react2["default"].createElement(
                "div",
                { className: "input-group" },
                _react2["default"].createElement(
                  "span",
                  { className: "input-group-addon" },
                  _react2["default"].createElement("i", { className: "glyphicon glyphicon-pencil" })
                ),
                _react2["default"].createElement("textarea", { className: "form-control", name: "comment", placeholder: "Project Description" })
              )
            )
          ),
          _react2["default"].createElement(
            "div",
            { className: "alert alert-success", role: "alert", id: "success_message" },
            "Success ",
            _react2["default"].createElement("i", { className: "glyphicon glyphicon-thumbs-up" }),
            " Thanks for contacting us, we will get back to you shortly."
          ),
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement("label", { className: "col-md-4 control-label" }),
            _react2["default"].createElement(
              "div",
              { className: "col-md-4" },
              _react2["default"].createElement(
                "button",
                { type: "submit", className: "btn btn-warning" },
                "Send ",
                _react2["default"].createElement("span", { className: "glyphicon glyphicon-send" })
              )
            )
          )
        )
      )
    );
  }
});
module.exports = exports["default"];