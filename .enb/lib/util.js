var path = require('path'),
    fileProvider = require('enb/techs/file-provider'),
    fileCopy = require('enb/techs/file-copy'),

    TESTS_PATH_RE = /(\w+)\.(tests|examples)\/(\w+)\.bemjson\.js$/;

function addTech(nodeConfig) {
    return function(tech, opts) {
        nodeConfig.addTech(opts? [tech, opts] : tech);
    };
}

function addTarget(nodeConfig) {
    return function(target) {
        nodeConfig.addTargets(arguments.length === 1?
            [target] :
            Array.prototype.slice.call(arguments));
    };
}

function createBemjsonNode(config, src) {
    var nodeName = '';
    src.replace(TESTS_PATH_RE, function(_, bemItem, type, name) {
        nodeName = [type, bemItem, name].join(path.sep);
    });

    config.node(nodeName, function(nodeConfig) {
        var tech = addTech(nodeConfig),
            srcTarget = resolveSrcTarget(config, nodeConfig, src);

        tech(fileProvider, { target : srcTarget });
        tech(fileCopy, { sourceTarget : srcTarget, destTarget : '?.bemjson.js' });
    });
}

function resolveSrcTarget(config, nodeConfig, src) {
    return path.relative(nodeConfig.getNodePath(), config.resolvePath(src));
}

module.exports = {
    addTech : addTech,
    addTarget : addTarget,
    createBemjsonNode : createBemjsonNode
};
