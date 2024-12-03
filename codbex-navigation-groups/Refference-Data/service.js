const groupData = {
    id: 'refference-data-navigation-group',
    label: "Refference Data",
    icon: "cog"
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
