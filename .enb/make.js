var levels = require('enb/techs/levels'),
    files = require('enb/techs/files'),
    bemdeclFromBemjson = require('enb/techs/bemdecl-from-bemjson'),
    deps = require('enb/techs/deps'),
    bh = require('enb-bh/techs/bh-server'),
    html = require('enb-bh/techs/html-from-bemjson'),
    util = require('./lib/util');

module.exports = function(config) {
    createTestsNodes(config);
};

function createTestsNodes(config) {
    util.createBemjsonNode(config, 'blocks/Picture/Picture.tests/simple.bemjson.js');

    config.nodes('tests/*/*', function(nodeConfig) {
        var tech = util.addTech(nodeConfig),
            target = util.addTarget(nodeConfig);

        tech(levels, { levels : getLevels(config) });
        tech(bemdeclFromBemjson);
        tech(deps);
        tech(files);
        tech(bh, { jsAttrName : 'data-bem', jsAttrScheme : 'json', sourceSuffixes : ['bh.js'] });
        tech(html);

        target('?.html');
    });
}

function getLevels(config) {
    return [
        'libs/bem-core/common.blocks',
        'libs/bem-components/common.blocks',
        'blocks'
    ].map(config.resolvePath.bind(config));
}
