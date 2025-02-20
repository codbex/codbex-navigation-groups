const groupData = {
    id: 'accounting-navigation-group',
    label: "Accounting",
    icon: "building",
    order: 400
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }