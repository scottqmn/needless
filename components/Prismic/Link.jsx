/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { prismicLinkPropType } from '../../types/prismic'

const PrismicLink = ({ children, Component, href, link, ...props }) => {
  const AnchorComponent = Component || 'a'
  const asProp = Component ? 'a' : null

  // Handle internal/Next links
  if (href) {
    return (
      <Link href={href} passHref {...props}>
        <AnchorComponent as={asProp}>{children}</AnchorComponent>
      </Link>
    )
  }

  // Handle out/Prismic links
  const { link_type, target, url } = link
  switch (link_type) {
    case 'Web':
      return (
        <AnchorComponent
          as={asProp}
          href={url}
          target={target}
          rel='noopener noreferrer'
        >
          {children}
        </AnchorComponent>
      )
    default:
      // eslint-disable-next-line no-console
      console.warn('no link rendered', link, href)
  }

  return children
}

PrismicLink.propTypes = {
  children: PropTypes.node,
  Component: PropTypes.elementType,
  link: prismicLinkPropType,
  href: PropTypes.string,
}

export default PrismicLink
