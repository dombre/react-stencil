import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'its-input',
  styleUrl: 'its-input.css',
  shadow: false
})
export class ItsInput {

  @Prop() label: string;

  render() {
    return <input class="textfield textfield--large" id="longname" name="longname" type="text"></input>;
  }
}
