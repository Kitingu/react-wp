import React from 'react';
import parse from 'html-react-parser';
import Gist from 'super-react-gist';

export default function WpApiContent(props) {
  return parse(props.content, {
    replace: (domNode) =>
      domNode.name === 'script' &&
      domNode.attribs.src.indexOf('/gist.github.com/') && (
        <Gist url={domNode.attribs.src.replace('.js', '')} />
      ),
  });
}
