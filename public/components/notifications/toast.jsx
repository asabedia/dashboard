import React from 'react'

export default class Toast extends React.Component {
  constructor (props) {
    super(props)
    this.close = this.close.bind(this)
  }

  close () {
    if (typeof (this.props.dismiss) === 'function') {
      this.props.dismiss(this.props.id)
    }
  }

  render () {
    const { title, body, emphasis, timeout, isCurrent } = this.props // eslint-disable-line

    if (timeout) setTimeout(this.close, timeout)

    return (
      <div className={'toast toast--' + (emphasis) + (isCurrent ? ' current' : '')}>
        <span className='toast__title'> {title || 'dashboard'} </span>
        { typeof this.props.dismiss === 'function'
          ? <i className='fa fa-times clickable pull-right' onClick={this.close} />
          : null}
        <br/>
        <div className='toast__body'>
          {body}
        </div>
      </div>
    )
  }
}
