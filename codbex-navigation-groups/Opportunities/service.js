const groupData = {
    id: 'opportunities-navigation-group',
    label: "Opportunities",
    icon: "head-side"
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
