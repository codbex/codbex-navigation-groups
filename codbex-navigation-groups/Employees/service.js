const groupData = {
    id: 'employees-navigation-group',
    label: "Employees",
    icon: "company-view"
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
