const groupData = {
    id: 'configurations-navigation-group',
    label: "Configurations",
    icon: "wrench",
    order: 1300
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
