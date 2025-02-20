const groupData = {
    id: 'inventory-navigation-group',
    label: "Inventory",
    icon: "retail-store",
    order: 500
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
