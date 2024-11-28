const groupData = {
    id: 'purchasing-navigation-group',
    label: "Purchasing",
    icon: "credit-card"
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
