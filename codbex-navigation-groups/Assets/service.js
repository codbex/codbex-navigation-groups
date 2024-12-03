const groupData = {
    id: 'assets-navigation-group',
    label: "Assets",
    icon: "it-host",
    order: 1000
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
