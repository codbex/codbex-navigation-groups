const groupData = {
    id: 'employees-navigation-group',
    label: "Employees",
    icon: "company-view",
    order: 700
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
