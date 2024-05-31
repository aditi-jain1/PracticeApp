import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function Riders() {
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
      fetchUserData();
    }, []);
  
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://192.168.86.197:5000/requests');
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    return (
      <ScrollView style={styles.container}>
        {userData.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </ScrollView>
    );
  }
  
  const UserCard = ({ user }) => {
    const [isSelected, setIsSelected] = useState(false);
  
    const handleCardPress = () => {
      setIsSelected(prevState => !prevState);
    };
  
    return (
      <TouchableOpacity
        style={[
          styles.card,
          isSelected && styles.selectedCard,
        ]}
        onPress={handleCardPress}
      >
        <Text style={styles.cardTitle}>{user.name}</Text>
        <Text style={styles.cardDetails}>Phone Number: {user.phoneNumber}</Text>

      </TouchableOpacity>
    );
  };
  
  



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
    backgroundColor: '#F5C674', // Change background color when selected
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
