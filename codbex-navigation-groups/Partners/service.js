const groupData = {
    id: 'partners-navigation-group',
    label: "Partners",
    icon: "customer-and-contacts"
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
