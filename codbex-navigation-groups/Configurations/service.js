const groupData = {
    id: 'configurations-navigation-group',
    label: "Configurations",
    icon: "wrench"
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
