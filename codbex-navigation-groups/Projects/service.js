const groupData = {
    id: 'projects-navigation-group',
    label: "Projects",
    icon: "book",
    order: 1100
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
