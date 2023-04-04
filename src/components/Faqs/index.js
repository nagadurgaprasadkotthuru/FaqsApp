// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  // eslint-disable-next-line react/sort-comp
  getList = () => {
    const {faqsList} = this.props
    return faqsList.map(each => ({...each, isShow: false}))
  }

  state = {updatedList: this.getList()}

  onStateChange = id => {
    this.setState(prevState => ({
      updatedList: prevState.updatedList.map(each => {
        if (each.id === id) {
          return {...each, isShow: !each.isShow}
        }
        return each
      }),
    }))
  }

  render() {
    const {updatedList} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">FAQs</h1>
          <ul>
            {updatedList.map(each => (
              <FaqItem
                faqDetails={each}
                key={each.id}
                onStateChange={this.onStateChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
