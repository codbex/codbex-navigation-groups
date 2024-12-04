const groupData = {
    id: 'metadata-navigation-group',
    label: "Metadata",
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
