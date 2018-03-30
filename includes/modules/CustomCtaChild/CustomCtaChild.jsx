// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';

class CustomCtaChild extends Component {
  renderButton() {
    const props = this.props;
    const utils = window.ET_Builder.API.utils;
    const buttonTarget = 'on' === props.url_new_window ? '_blank' : '';
    const isCustomButtonIcon = utils.hasValue(props.button_icon);
    const buttonIcon = isCustomButtonIcon ? utils.processFontIcon(props.button_icon) : false;
    const buttonClassName = {
      et_pb_button: true,
      et_pb_custom_button_icon: isCustomButtonIcon,
    };

    return ! utils.hasValue(props.button_text) || ! utils.hasValue(props.button_url) ? '' : (
      <div className='et_pb_button_wrapper'><a
        className={utils.classnames(buttonClassName)}
        href={props.button_url}
        target={buttonTarget}
        rel={utils.linkRel(props.button_rel)}
        data-icon={buttonIcon}
      >{props.button_text}</a></div>
    );
  }

  /**
   * Module render in VB
   * Basically DICM_CTA_Child->render() equivalent in JSX
   */
  render() {
    return (
      <div>
        <h2 className="dicm-title">{this.props.title}</h2>
        <h3 className="dicm-subtitle">{this.props.subtitle}</h3>
        <div className="dicm-content">{this.props.content()}</div>
        {this.renderButton()}
      </div>
    );
  }
}

export default CustomCtaChild;
