import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const RecentGroupTitle = ({ group }) => {
  return (
    <View style={styles.group}>
      <Image
        source={{ uri: group.image }}
        resizeMode='cover'
        style={styles.cardImage}
      />
      <View style={styles.groupDetails}>
        <Text style={styles.name}>{group.name}</Text>
        <Text style={styles.textDimmed}>{group.created_on}</Text>
        <Text style={styles.textDimmed}>Organizer: {group.organizer}</Text>
        <Text style={styles.textDimmed}>Participants: {group.participant_count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    marginRight: 15,
    marginLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupDetails: {
    marginLeft: 12,
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  textDimmed: {
    fontSize: 12,
    color: '#8E8E93',
  }
});

export default RecentGroupTitle;