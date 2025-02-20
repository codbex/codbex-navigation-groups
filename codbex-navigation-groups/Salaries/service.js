const groupData = {
    id: 'salaries-navigation-group',
    label: "Salaries",
    icon: "wallet",
    order: 700
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
