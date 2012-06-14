/*
---
description: Two useful methods for stings to encode and decode html/xml elements

authors:
  - Jean-Nicolas Boulay Desjardins (http://jean-nicolas.name)

license:
  - MIT-style license

provides:
  - encodeXML
  - decodeXML
...
*/

String.prototype.encodeXML = function () {
  var chr_to_xml = {
    '&': '&amp;',
    '"': '&quot;',
    '<': '&lt;',
     '>': '&gt;'
  };
  return this.replace(/([\&"<>])/g, function(str, item) {
    return chr_to_xml[item];
  });
};

String.prototype.decodeXML = function () {
  var xml_to_chr = {
    '&amp;': '&',
    '&quot;': '"',
    '&lt;': '<',
    '&gt;': '>'
  };
  return this.replace(/(&quot;|&lt;|&gt;|&amp;)/g, function(str, item) {
    return xml_to_chr[item];
  });
};