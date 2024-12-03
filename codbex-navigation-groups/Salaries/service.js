const groupData = {
    id: 'salaries-navigation-group',
    label: "Salaries",
    icon: "moneybag",
    order: 800
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
