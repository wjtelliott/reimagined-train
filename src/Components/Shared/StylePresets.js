const boxShadowStyle = {
    boxShadow: '10px 10px 30px black'
}

const textShadowStyle = {
    textShadow: '2px 2px 9px black',
    //fontWeight: 600
}

const divStyle = {
    alignItems: 'center'
}

const cardStyle = {
    ...boxShadowStyle,
    borderRadius: '30px 30px 20px 20px'
}

const cardImageStyle = {
    borderRadius: '30px 30px 0px 0px'
}

const contactLinkStyle = {
    textDecoration: 'none',
    //fontWeight: 100,
    //fontSize: '.75em'
}


export { boxShadowStyle, divStyle, cardStyle, cardImageStyle, textShadowStyle, contactLinkStyle as removeLinkStyle }