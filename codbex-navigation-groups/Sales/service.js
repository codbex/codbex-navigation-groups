const groupData = {
    id: 'sales-navigation-group',
    label: "Sales",
    icon: "tag",
    order: 200
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
