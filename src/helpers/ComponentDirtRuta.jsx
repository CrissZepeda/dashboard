
function ComponentDirtRuta(element) {
    return element.props.match.route.element.props.hasOwnProperty('dir') ? element.props.match.route.element.props.dir : [];
}

export default ComponentDirtRuta