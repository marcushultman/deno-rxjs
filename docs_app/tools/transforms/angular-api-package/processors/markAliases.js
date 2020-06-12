"use strict";
exports.__esModule = true;
exports.markAliases = void 0;
function markAliases(log) {
    return new MarkAliases(log);
}
exports.markAliases = markAliases;
var getOriginalName = function (doc) { return doc.aliasSymbol.resolvedSymbol.escapedName; };
var MarkAliases = /** @class */ (function () {
    function MarkAliases(log) {
        this.log = log;
        this.$runAfter = ['readTypeScriptModules'];
        this.$runBefore = ['generateApiListDoc', 'createSitemap'];
    }
    MarkAliases.prototype.$process = function (docs) {
        var _this = this;
        docs
            .filter(function (doc) { return doc.moduleDoc; })
            .forEach(function (doc) {
            var duplicateDocs = _this.findDuplicateDocs(doc);
            if (duplicateDocs.length > 0) {
                duplicateDocs.forEach(function (duplicateDoc) { return duplicateDoc.duplicateOf = doc; });
                doc.renamedDuplicates = duplicateDocs;
                _this.log.debug(doc.name + " has the following aliases:", duplicateDocs.map(function (doc) { return doc.name; }).join(', '));
            }
        });
    };
    MarkAliases.prototype.findDuplicateDocs = function (doc) {
        return doc.moduleDoc.exports
            .filter(function (exportedDoc) { return exportedDoc !== doc
            && exportedDoc.aliasSymbol
            && getOriginalName(exportedDoc) === doc.name; });
    };
    return MarkAliases;
}());
