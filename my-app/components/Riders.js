import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function Riders() {
  const [selectedCards, setSelectedCards] = useState([]);

  const cardData = [
    { id: 1, name: 'John Doe', details: 'Details about John Doe' },
    { id: 2, name: 'Jane Smith', details: 'Details about Jane Smith' },
    { id: 3, name: 'Samuel Green', details: 'Details about Samuel Green' },
    // Add more cards as needed
  ];

  const handleCardPress = (id) => {
    const newSelectedCards = selectedCards.includes(id)
      ? selectedCards.filter(cardId => cardId !== id)
      : [...selectedCards, id];

    setSelectedCards(newSelectedCards);
  };

  return (
    <ScrollView style={styles.container}>
      {cardData.map(card => (
        <TouchableOpacity
          key={card.id}
          style={[
            styles.card,
            selectedCards.includes(card.id) && styles.selectedCard,
          ]}
          onPress={() => handleCardPress(card.id)}
        >
          <Text style={styles.cardTitle}>{card.name}</Text>
          <Text style={styles.cardDetails}>{card.details}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    backgroundColor: '#EBF5FB',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#99AACB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedCard: {
    backgroundColor: 'yellow', // Change background color when selected
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDetails: {
    fontSize: 14,
    color: '#666',
  },
});
