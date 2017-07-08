import React from 'react';
import './WidgetContainer.css'
import 'font-awesome/css/font-awesome.css';
import { title, content } from '../content.json';
import { WidgetHeader } from './WidgetHeader';
import { WidgetContent } from './WidgetContent';
import { WidgetFooter } from './WidgetFooter';

// Main content box widget container
// Build up the Header, Content and Footer passing in the respective state and event handlers
class WidgetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();

    this.handleCollapseToggle = this.handleCollapseToggle.bind(this);
    this.handlePrevClicked = this.handlePrevClicked.bind(this);
    this.handleNextClicked = this.handleNextClicked.bind(this);
  }

  getInitialState() {
    return Object.assign({
      isCollapsed: false,
      title
    }, this.getContent(0));
  }

  // Get data from content file based on the given index  
  getContent(index) {
    // Wrap index around to end of content or beginning when end of content reached
    if (index < 0) {
      index = content.length - 1;
    } else if (index > content.length - 1) {
      index = 0;
    } 

    return {
      currentRecordIndex: index,
      prevText: index === 0 ? "Prev" : content[index].title,
      nextText: index === content.length - 1 ? "Next" : content[index + 1].title,
      thumbnail: content[index].thumbnail,
      description: content[index].description
    };
  }

  handleCollapseToggle() {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
  }

  // Navigate to the previous record, wrapping round once first record reached
  handlePrevClicked() {
    this.setState(this.getContent(this.state.currentRecordIndex - 1));
  }

  // Navigate to the next record, wrapping round to the first record
  handleNextClicked() {
    this.setState(this.getContent(this.state.currentRecordIndex + 1));
  }

  render() {
    return (
      <div className="content-box-widget-container">
        <WidgetHeader
          title={this.state.title}
          isCollapsed={this.state.isCollapsed}
          onCollapseToggle={this.handleCollapseToggle}
        />
        {!this.state.isCollapsed &&
          <div>
            <WidgetContent thumbnail={this.state.thumbnail} description={this.state.description} />
            <WidgetFooter
              prevText={this.state.prevText}
              nextText={this.state.nextText}
              onPrevClicked={this.handlePrevClicked}
              onNextClicked={this.handleNextClicked}
            />
          </div>
        }
      </div>
    );
  }
}

export { WidgetContainer };