require('zzz-term-log')(__dirname);

var _ = require("underscorek");
_.test('1.0.0');

var	abc = require("library-abc"); // underscorek-extend@3.0.0
abc.test('1.0.0-ext-3.0.0');
_.test('1.0.0');

var	xyz = require("library-xyz"); // underscorek-extend@2.0.0
xyz.test('1.0.0-ext-2.0.0');
_.test('1.0.0');

