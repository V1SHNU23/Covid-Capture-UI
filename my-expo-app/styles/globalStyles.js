import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  homepage: {
    backgroundColor: '#F0F0F0', // Adjusted background color
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  profileIcon: {
    width: 50,
    height: 50,
  },
  menuIcon: {
    fontSize: 30,
    color: '#333',
  },
  card: {
    margin: 20,
    padding: 20,
    width: '80%',
    borderRadius: 10,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  icon: {
    width: 50,
    height: 50,
  },
  openFormBtn: {
    backgroundColor: '#4CAF50',
    color: '#fff',
  },
  newAppointmentBtn: {
    width: '90%',
    marginTop: 70,
    borderColor: '#fff',
  },
  helpBtn: {
    width: '80%',
    marginTop: 20,
    borderColor: '#333',
  },
  cardSubtext: {
    fontSize: 14,
    color: '#888',
  },
  newAppointment: {
    marginTop: 20,
  },
});

export default globalStyles;
