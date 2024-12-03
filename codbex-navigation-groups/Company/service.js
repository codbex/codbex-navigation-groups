const groupData = {
    id: 'company-navigation-group',
    label: "Company",
    icon: "building",
    order: 600
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
