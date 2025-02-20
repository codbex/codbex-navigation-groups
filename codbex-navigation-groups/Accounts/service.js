const groupData = {
    id: 'accounts-navigation-group',
    label: "Accounting",
    icon: "accounting-document-verification",
    order: 400
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }