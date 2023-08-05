import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export const getStyles = (theme) =>
  StyleSheet.create({
    appWrapper: {
      flexDirection: 'column',
      height: '100%',
      backgroundColor: theme.primaryColor,
      fontWeight: '100',
    },
    appText: {
      fontSize: 2,
      color: theme.secondaryColor,
    },
    appFlatList: {
      height: '100%',
      gap: 5,
    },

    userInputsWrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
    },

    userInputText: {
      backgroundColor: theme.secondaryColor,
    },
    modalView: {
      height: '100%',
      width: '100%',
      margin: 20,
      backgroundColor: theme.primaryColor,
      borderColor: theme.primaryColor,
      borderWidth: 1,
      padding: 50,
      alignItems: 'center',
      shadowColor: theme.match,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },

    //NAVBAR
    navbarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: windowHeight * 0.1,
      width: 270,
      marginBottom: 10,
      backgroundColor: theme.primaryColor,
      borderBottomColor: theme.secondaryColor,
      marginLeft: (windowWidth - 270) / 2,
      marginRight: (windowWidth - 270) / 2,
    },
    navbarButtons: {
      flexDirection: 'row',
      gap: 5,
    },
    navbarButton: {
      padding: 8,
      backgroundColor: theme.buttonBackgroundColor,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.buttonBorderColor,
    },
    navbarTitle: {
      color: theme.primaryTextColor,
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    // PRIMARY MODAL

    primaryModalCenteredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    primaryModalTouchableContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    primaryModalButton: {
      padding: 10,
      elevation: 2,
      marginVertical: 10,
      outlineWidth: 0,
    },
    primaryModalButtonClose: {
      backgroundColor: theme.present,
    },
    primaryModalTextStyle: {
      color: theme.primaryTextColor,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    primaryModalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.primaryTextColor,
      textDecorationLine: 'underline',
      marginTop: 10,
    },

    //INFORMATION MODAL
    modalInformationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
    },
    modalInformationLetter: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primaryColor,
    },
    modalInformationLetterText: {
      flexDirection: 'row',
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.primaryTextColor,
    },

    // STATISTICS MODAL

    statisticsModalContainer: {
      flexDirection: 'column',
      width: '100%',
      gap: 20,
      marginTop: 20,
      justifyContent: 'center',
      textAlign: 'center',
    },
    statisticsModalText: {
      color: theme.primaryColor,
      fontWeight: 'bold',
    },

    // LANGUAGES

    languagesContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: 350,
    },
    languagesListContainer: {
      flexGrow: 1,
      flexDirection: 'column',
      padding: 4,
    },
    languagesItem: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: theme.buttonBackgroundColor,
      justifyContent: 'flex-start',
      alignItems: 'center',
      margin: 4,
      borderRadius: 8,
    },
    languagesItemImage: {
      width: 30,
      height: 30,
      marginRight: 10,
      borderRadius: 8,
    },
    languagesItemText: {
      color: theme.primaryTextColor,
      fontWeight: 'bold',
    },
  })
