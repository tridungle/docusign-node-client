/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorDetails', 'model/SharedItem', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./SharedItem'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.MemberSharedItems = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.SharedItem, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, ErrorDetails, SharedItem, UserInfo) {
  'use strict';


  /**
   * The MemberSharedItems model module.
   * @module model/MemberSharedItems
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>MemberSharedItems</code>.
   * @alias module:model/MemberSharedItems
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>MemberSharedItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberSharedItems} obj Optional instance to populate.
   * @return {module:model/MemberSharedItems} The populated <code>MemberSharedItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = UserInfo.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('envelopes')) {
        obj['envelopes'] = ApiClient.convertToType(data['envelopes'], [SharedItem]);
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UserInfo} user
   */
  exports.prototype['user'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SharedItem>} envelopes
   */
  exports.prototype['envelopes'] = undefined;
  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;



  return exports;
}));


