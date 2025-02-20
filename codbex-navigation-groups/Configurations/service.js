const groupData = {
    id: 'configurations-navigation-group',
    label: "Configurations",
    icon: "wrench",
    order: 1400
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
