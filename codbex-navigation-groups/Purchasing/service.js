const groupData = {
    id: 'purchasing-navigation-group',
    label: "Purchasing",
    icon: "credit-card",
    order: 300
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
