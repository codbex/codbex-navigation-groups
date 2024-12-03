const groupData = {
    id: 'products-navigation-group',
    label: "Products",
    icon: "product",
    order: 500
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
