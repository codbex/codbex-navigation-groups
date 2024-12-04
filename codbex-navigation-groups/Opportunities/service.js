const groupData = {
    id: 'opportunities-navigation-group',
    label: "Opportunities",
    icon: "newspaper",
    order: 100
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
