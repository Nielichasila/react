import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
//import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
//import {settings} from '../../data/dataStore';

class Column extends React.Component {
  
  static propTypes = {
    cards: PropTypes.node.isRequired,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
  }  
  

  render() {
    const {cards, title, icon} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={icon}></Icon></span>{title}</h3>
        
        <div className={styles.columns}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
          */}
      </section>
    );
  }
}
  
export default Column;
  