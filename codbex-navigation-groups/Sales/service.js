const groupData = {
    id: 'sales-navigation-group',
    label: "Sales",
    icon: "currency"
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
