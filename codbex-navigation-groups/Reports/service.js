const groupData = {
    id: 'reports-navigation-group',
    label: "Reports",
    icon: "area-chart",
    order: 800
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
