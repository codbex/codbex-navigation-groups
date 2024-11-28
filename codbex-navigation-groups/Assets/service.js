const groupData = {
    id: 'assets-navigation-group',
    label: "Assets",
    icon: "it-host"
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
