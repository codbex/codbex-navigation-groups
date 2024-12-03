const groupData = {
    id: 'projects-navigation-group',
    label: "Projects",
    icon: "book"
};

function getGroup() {
    return groupData;
}

if (typeof exports !== 'undefined') {
    exports.getgroup = getGroup;
}

export { getGroup }
