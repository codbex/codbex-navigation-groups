const groupData = {
    id: 'reference-data-navigation-group',
    label: "Reference data",
    icon: "folder",
    order: 1400
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }