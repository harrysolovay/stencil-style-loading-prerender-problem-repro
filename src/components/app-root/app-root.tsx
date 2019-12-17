import { Component, h } from '@stencil/core';
import { css } from "emotion";

const styleClass = css`
  width: 200px;
  height: 200px;

  img {
    max-width: 100%;
    width: inherit;
    height: inherit;
  }
`;


@Component({
  tag: 'app-root',
  shadow: false
})
export class AppRoot {
  render() {
    return (
      <div class={styleClass}>
        <img src="/assets/some-graphic.svg" />
      </div>
    );
  }
}
